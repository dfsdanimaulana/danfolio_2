import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeLeft, fadeTop, motionStep } from '@config/motion'

const GetInTouch = () => {
    const content =
        'I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'

    return (
        <section id="contact" className="container text-center flex flex-col items-center justify-center">
            <motion.h1
                variants={fadeLeft}
                {...motionStep}
                className="flex items-center gap-2 text-md justify-center font-normal text-sky-400"
            >
                <span className=" font-mono">03. </span>
                What next?
            </motion.h1>
            <motion.div variants={fadeTop} {...motionStep}>
                <h1 className="font-bold text-slate-300 text-5xl text-center mt-5"> Get In Touch </h1>

                <p className="text-slate-400 max-w-[500px] mx-auto my-3 mb-10">{content}</p>

                <Button href="mailto:danimaulana9f@gmail.com" outlined>
                    Say Hello
                </Button>
            </motion.div>
        </section>
    )
}

export default GetInTouch
