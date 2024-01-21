import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCharacter'

const Left = () => {
    return (
        <div className="relative col-span-2 z-10 text-left max-w-6xl">
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
                <AnimatedTextWord text="Hi, my name is" className="text-base md:text-lg" mono />
                <div className="mt-4 mb-8">
                    <AnimatedTextCharacter
                        className="!font-bold text-5xl md:text-8xl text-slate-300 tracking-tight"
                        text="Dani Maulana"
                    />
                    <AnimatedTextCharacter
                        className="!font-bold text-3xl md:text-5xl text-slate-400 tracking-tight"
                        text="Web And 2D Game Developer"
                    />
                </div>
                <AnimatedTextWord
                    text="I'm a web developer with a passion for creating beautiful and functional websites and 2D web games. I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript."
                    className="text-md text-slate-400 max-w-2xl"
                />
            </div>

            <motion.div variants={fadeUpSpring} initial="hidden" animate="visible" className="w-fit mt-16">
                <a href="#projects">
                    <Button outlined className="font-mono" sizeClass="px-[20px] md:px-[27px] py-[13px] md:py-[20px]">
                        Check Out My Projects
                    </Button>
                </a>
            </motion.div>
        </div>
    )
}

export default Left
