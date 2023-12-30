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

                <AnimatedTextCharacter
                    className="!font-medium !bg-clip-text !text-4xl md:!text-7xl !leading-normal md:!leading-[87px] !text-slate-300"
                    text="Dani Maulana."
                />
                <AnimatedTextCharacter
                    className="!font-medium tracking-normal text-3xl leading-8 md:leading-normal md:!text-5xl text-slate-400 mt-1"
                    text="Your Web Developer Partner"
                />

                <div className="my-8 leading-7 text-slate-400 md:text-lg max-w-3xl">
                    <AnimatedTextWord
                        text="Highly motivated and very passionate Full Stack Developer with three years of experience in Typescript, React js, Next js, Firebase, Tailwind CSS, Material UI, Node js, Express js, MongoDB"
                        className="text-sm sm:text-lg"
                    />
                </div>
            </div>

            <motion.div variants={fadeUpSpring} initial="hidden" animate="visible" className="w-fit mt-16 md:mt-10">
                <a
                    href="https://drive.google.com/file/d/1Gdbax82oaBWz2_0-OYh44E7QvfB53wNS/view?usp=share_link"
                    target="_blank"
                >
                    <Button outlined>Check Out My Resume</Button>
                </a>
            </motion.div>
        </div>
    )
}

export default Left
