import React from 'react'
import { motion } from 'framer-motion'
//
import { fadeTop, fadeLeft, motionStep } from '@config/motion'

const Services = () => {
    return (
        <section id="services" className="container min-h-screen">
            <motion.h1
                variants={fadeLeft}
                {...motionStep}
                className="flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300 mb-12"
            >
                <span className="text-sky-400 font-mono">03. </span>
                What We Offer
            </motion.h1>

            <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-20">
                {[1, 2, 3].map((e: number, i: number) => (
                    <div key={i} className="border p-5 rounded bg-sky-800">
                        {e}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
