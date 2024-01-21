'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
//
import ProjectCard from '@components/cards/Project/ProjectCard'
import { fadeLeft, fadeUpSpring, motionStep } from '@config/motion'
import { projects } from '@config/constants'
import { ProjectTypes } from '@config/types'
import Button from '@components/Button'

const NonFeaturedProject = () => {
    const [showMore, setShowMore] = useState(false)
    const projectTypes = ['WEB', 'GAME', 'APP']

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

    const __showLess = () => {
        return (
            <>
                {projects
                    .filter((e: ProjectTypes) => e.featured !== true)
                    .splice(0, 3)
                    .map((e: ProjectTypes, i: number) => (
                        <ProjectCard {...e} key={i} />
                    ))}
            </>
        )
    }
    const __showMore = () => {
        return (
            <>
                {projects
                    .filter((e: ProjectTypes) => e.featured !== true)
                    .map((e: ProjectTypes, i: number) => (
                        <ProjectCard {...e} key={i} />
                    ))}
            </>
        )
    }

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3 justify-center items-center mt-20 mb-10  md:mt-40 md:mb-20"
            >
                <motion.h2 variants={fadeLeft} {...motionStep} className="text-lg md:text-3xl font-medium">
                    <span className="text-sky-400 font-mono">Other Noteworthy Projects</span>
                </motion.h2>
                <div className="inline-flex items-center gap-3">
                    {projectTypes.map((e: string, i: number) => (
                        <motion.span
                            key={i}
                            variants={child}
                            initial="hidden"
                            animate="visible"
                            className="cursor-pointer text-sky-200 tracking-wide hover:text-sky-100"
                        >
                            {e}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-6 my-20 items-center">
                {showMore ? <>{__showMore()}</> : <>{__showLess()}</>}
            </div>

            <motion.div
                variants={fadeUpSpring}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center"
            >
                <Button outlined onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Show More'}
                </Button>
            </motion.div>
        </>
    )
}

export default NonFeaturedProject
