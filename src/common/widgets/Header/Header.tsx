'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
//
import { navData } from '@config/constants'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCharacter'
import Button from '@components/Button'

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(true)
    const [scrolledToTop, setScrolledToTop] = useState<boolean>(true)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setVisible(prevScrollPos > currentScrollPos)
            setPrevScrollPos(currentScrollPos)
            setScrolledToTop(window.scrollY < 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos])

    useEffect(() => {
        controls.start(visible ? (scrolledToTop ? 'visible_top' : 'visible') : 'hidden')
    }, [controls, visible, scrolledToTop])

    const variants = {
        visible_top: {
            translateY: 0,
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
        visible: {
            translateY: 0,
            backgroundColor: 'rgba(10, 25, 47, 0.95)',
            boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
        },
        hidden: {
            translateY: '-100%',
            backgroundColor: 'rgba(10, 25, 47, 0.95)',
            boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
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
            className="fixed top-0 w-full z-50 py-[20px] mx-auto right-0 left-0"
        >
            <div className="container flex items-center justify-center md:justify-between">
                <Link href="/" className="flex">
                    <AnimatedTextCharacter text="D" className="text-4xl font-semibold text-sky-700" />
                    <AnimatedTextCharacter text="nm." className="text-4xl text-slate-700/80" />
                </Link>

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

                    {/* <Link href='/' target='__blank' > <Button > Resume </Button> </Link> */}
                </motion.ul>
            </div>
        </motion.header>
    )
}

export default Header
