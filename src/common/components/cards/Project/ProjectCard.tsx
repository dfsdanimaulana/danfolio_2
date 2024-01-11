import React, { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
//
import { RiFilePaperLine } from 'react-icons/ri'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
//
import { motionStep } from '@config/motion'
import { ProjectTypes } from '@config/types'

const ProjectCard = ({ live, thumbnail, code, title, description, tech }: ProjectTypes) => {
    const swiperContainerRef = useRef<HTMLDivElement>(null)

    const handleSwipe = (direction: 'left' | 'right') => {
        const container = swiperContainerRef.current as HTMLDivElement
        const scrollAmount = 200 // Adjust this value based on your design

        if (container) {
            if (direction === 'left') {
                // Property 'scrollLeft' does not exist on type 'never'.ts(2339)
                container.scrollLeft -= scrollAmount
            } else {
                container.scrollLeft += scrollAmount
            }
        }
    }

    return (
        <motion.div
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'spring',
                        damping: 15,
                        stiffness: 50,
                    },
                },

                hidden: {
                    opacity: 0,
                    y: 50,
                    transition: {
                        type: 'spring',
                        damping: 15,
                        stiffness: 1 * 20 + 50,
                    },
                },
            }}
            {...motionStep}
            className="col-span-12 sm:col-span-6 md:col-span-4 bg-slate-800 rounded-xl p-4 group flex flex-col"
        >
            <div>
                <Link href={`${live}`}>
                    <div className="h-[200px] w-full relative rounded-xl overflow-hidden">
                        <Image
                            src={`/images/projects/${thumbnail}`}
                            blurDataURL={`/images/projects/${thumbnail}`}
                            className="transition-all duration-300 group-hover:scale-125"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            alt="loading..."
                        />

                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-900/50 transition-all duration-300 cursor-pointer group-hover:opacity-0" />
                    </div>
                </Link>
            </div>

            <div className="flex-1">
                <div className="flex items-center justify-between my-5">
                    <RiFilePaperLine className="text-2xl text-sky-400" />

                    <div className={'flex justify-end items-center gap-3 text-slate-300'}>
                        {live && (
                            <Link
                                href={`${live}`}
                                target="_blank"
                                className="hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl"
                            >
                                <HiOutlineExternalLink />
                            </Link>
                        )}

                        {code && (
                            <Link
                                href={`${code}`}
                                target="_blank"
                                className="hover:text-sky-400 transition-all duration-300 hover:scale-110 text-[1.2rem]"
                            >
                                <FiGithub />
                            </Link>
                        )}
                    </div>
                </div>

                <h1 className="text-xl font-medium mb-1 text-slate-200"> {title} </h1>
                <div className="min-h-20">
                    <p className="text-slate-400 text-sm line-clamp-4"> {description} </p>
                </div>

                <div className="relative w-full">
                    <div
                        ref={swiperContainerRef}
                        className="flex text-slate-300 mt-7 gap-x-2 overflow-x-auto mx-8"
                        // use px-8 instead of mx-8 display another effect
                    >
                        {tech.map((e: string, i: number) => (
                            <span
                                key={i}
                                className="bg-slate-800 text-gray-400 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-500 shadow whitespace-nowrap lowercase"
                            >
                                {e}
                            </span>
                        ))}
                        {/* <div className="absolute top-0 right-0 w-full flex flex-row justify-between"> */}
                        <button
                            onClick={() => handleSwipe('left')}
                            className="bg-slate-800 text-gray-400 text-xs font-medium border border-gray-500 shadow whitespace-nowrap cursor-pointer absolute top-0 left-0 h-6 w-6 flex justify-center items-center rounded-full"
                        >
                            {'<'}
                        </button>
                        <button
                            onClick={() => handleSwipe('right')}
                            className="bg-slate-800 text-gray-400 text-xs font-medium px-2 py-0.5 border border-gray-500 shadow whitespace-nowrap cursor-pointer absolute top-0 right-0 h-6 w-6 flex justify-center items-center rounded-full"
                        >
                            {'>'}
                        </button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
