import React from 'react'
import { motion } from 'framer-motion'
//
import Featured from '@components/cards/Project/Featured'
import { fadeTop, fadeLeft, motionStep } from '@config/motion'
import { projects } from '@config/constants'
import { ProjectTypes } from '@config/types'
import NonFeaturedProject from './NonFeaturedProject'

const Projects = () => {
    return (
        <section id="projects" className="container">
            <motion.h1
                variants={fadeLeft}
                {...motionStep}
                className="flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300 mb-12 md:mb-20"
            >
                <span className="text-sky-400 font-mono">02. </span>
                <span className="__heading-line">Some Things I’ve Built</span>
            </motion.h1>

            <div className="space-y-20">
                {projects
                    .filter((e: ProjectTypes) => e.featured == true)
                    .map((e: ProjectTypes, i: number) => (
                        <motion.div key={i} variants={fadeTop} {...motionStep}>
                            <Featured {...e} secondary={i % 2 === 0 ? false : true} />
                        </motion.div>
                    ))}
            </div>

            <NonFeaturedProject />
        </section>
    )
}

export default Projects
