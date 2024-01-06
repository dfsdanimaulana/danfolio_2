import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCharacter'

const Left = () => {
    return (
        <div className="relative col-span-2 z-10 text-left max-w-6xl mx-4 mt-7 md:mx-11">
            <picture>
                <source srcSet="/images/glassify/blur-cyan-0.png" type="image/png" />
                <img
                    alt="devhasibulislam"
                    src="/images/glassify/blur-cyan-0.png"
                    width="530"
                    height="530"
                    decoding="async"
                    data-nimg="1"
                    className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
                />
            </picture>

            <div className="relative">
                <AnimatedTextWord text="Hi, my name is" className="text-base md:text-lg" />
                <div className="my-7">
                    <AnimatedTextCharacter
                        className="!font-medium text-4xl md:text-7xl text-slate-300 tracking-tight"
                        text="Dani Maulana."
                    />
                    <AnimatedTextCharacter
                        className="!font-medium text-4xl md:text-7xl text-slate-400 tracking-tight"
                        text="Your Web Developer Partner"
                    />
                </div>
                <AnimatedTextWord
                    text="I'm a web developer with a passion for creating beautiful and functional websites and 2D web games. I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript."
                    className="text-md text-slate-400 max-w-xl"
                />
            </div>

            <motion.div variants={fadeUpSpring} initial="hidden" animate="visible" className="w-fit mt-16 md:mt-10">
                <a href="#works">
                    <Button outlined>Check Out My Works</Button>
                </a>
            </motion.div>
        </div>
    )
}

export default Left
