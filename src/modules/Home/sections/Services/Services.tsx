import React from 'react'
import { motion } from 'framer-motion'
//
import Featured from '@components/cards/Project/Featured'
import ProjectCard from '@components/cards/Project/ProjectCard'
import Button from '@components/Button'
import { fadeTop, fadeLeft, motionStep } from '@config/motion'
import { projects } from '@config/constants'
import { ProjectTypes } from '@config/types'

const Services = () => {
    return (
        <section id="services" className="container">
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
