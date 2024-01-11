'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Variants, motion, useAnimation } from 'framer-motion'
//
import { navData } from '@config/constants'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCharacter'
import Button from '@components/Button'
import MenuButton from '@components/MenuButton'
import { socialData } from '@widgets/Socials/config/constans'
import { SocialTypes } from '@widgets/Socials/config/types'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(true)
    const [scrolledToTop, setScrolledToTop] = useState<boolean>(true)
    const controls = useAnimation()
    const controls_mobile = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setVisible(prevScrollPos > currentScrollPos)
            setPrevScrollPos(currentScrollPos)
            setScrolledToTop(window.scrollY < 50)
            setIsOpen(false)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos])

    useEffect(() => {
        controls.start(visible ? (scrolledToTop ? 'visible_top' : 'visible') : 'hidden')
    }, [controls, visible, scrolledToTop])

    useEffect(() => {
        controls_mobile.start(isOpen ? 'visible' : 'hidden')
    }, [controls_mobile, isOpen])

    const variants = {
        visible_top: {
            translateY: 0,
            backgroundColor: 'rgba(10, 25, 47, 0)',
            boxShadow: '0 0 0 0 rgba(2, 12, 27, 0.7)',
            padding: '30px 0',
        },
        visible: {
            translateY: 0,
            backgroundColor: 'rgba(10, 25, 47, 0.95)',
            boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
            padding: '20px 0',
        },
        hidden: {
            translateY: '-100%',
            backgroundColor: 'rgba(10, 25, 47, 0.95)',
            boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
            padding: '20px 0',
        },
    }

    // motion
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    }
    const container_mobile: Variants = {
        hidden: { right: '-100%' },
        visible: (i = 1) => ({
            right: 0,
            backgroundColor: 'rgba(10, 25, 47, 0.95)',
            boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.header
            initial="visible_top"
            animate={controls}
            variants={variants}
            className="fixed top-0 w-full mx-auto right-0 left-0 z-[9999999]"
        >
            <div className="flex items-center justify-between px-[20px] lg:px-[40px]">
                <Link href="/" className="flex">
                    <AnimatedTextCharacter text="D" className="text-4xl font-semibold text-sky-700" />
                    <AnimatedTextCharacter text="nm." className="text-4xl text-slate-700/80" />
                </Link>

                <MenuButton
                    initial="hidden"
                    animate="visible"
                    variants={child}
                    className="block lg:hidden z-50"
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    strokeWidth="4"
                    color="#0369a1"
                    lineProps={{ strokeLinecap: 'round' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                />

                <motion.ul variants={container} initial="hidden" animate="visible" className="__navright">
                    {navData.map((e: string, i: number) => (
                        <motion.a
                            key={i}
                            variants={child}
                            className="hidden md:block"
                            href={`#${e.toLocaleLowerCase()}`}
                        >
                            <li>
                                {' '}
                                <span>0{i + 1}.</span> {e}{' '}
                            </li>
                        </motion.a>
                    ))}

                    <Link href="/" target="__blank">
                        {' '}
                        <Button outlined> Resume </Button>{' '}
                    </Link>
                </motion.ul>

                <motion.ul
                    variants={container_mobile}
                    initial="hidden"
                    animate={controls_mobile}
                    className="__navright-mobile"
                >
                    {navData.map((e: string, i: number) => (
                        <motion.a
                            key={i}
                            variants={child}
                            className="md:hidden block"
                            href={`#${e.toLocaleLowerCase()}`}
                        >
                            <li>
                                {' '}
                                <span>0{i + 1}.</span> {e}{' '}
                            </li>
                        </motion.a>
                    ))}

                    <Link href="/" target="__blank">
                        {' '}
                        <Button outlined> Resume </Button>{' '}
                    </Link>

                    <ul className="flex items-center gap-3 translate-y-10">
                        {socialData.map((e: SocialTypes, i: number) => (
                            <motion.li variants={child} key={i}>
                                <Link
                                    href={e.url}
                                    target="_blank"
                                    className="text-[22px] text-slate-400 hover:text-sky-400 cursor-pointer transition-all duration-300 hover:translate-y-[-10px]"
                                >
                                    {<e.icon />}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.ul>
            </div>
        </motion.header>
    )
}

export default Header
