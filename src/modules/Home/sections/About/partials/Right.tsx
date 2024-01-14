import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
import React from 'react'
//
import { fadeLeft, motionStep } from '@config/motion'

const Right = () => {
    return (
        <motion.div
            variants={fadeLeft}
            {...motionStep}
            className="cols-span-1 md:col-span-2 flex justify-center mt-10 md:mt-0"
        >
            <div className="w-[300px] h-[350px] scale-75 md:scale-100 relative group rounded-xl transition-all duration-200 hover:translate-x-[-6px] hover:translate-y-[-6px] after:transition-all after:duration-200 after:w-full after:z-30 after:h-full after:border-[4px] after:absolute after:top-[20px] after:left-[20px] after:rounded-xl after:border-sky-500 hover:after:top-[32px] hover:after:left-[32px]">
                <Image
                    src="/images/model/dani.jpg"
                    blurDataURL="/images/model/dani.jpg"
                    className="rounded-xl z-40"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="loading..."
                />

                <div className="absolute rounded-xl z-50 top-0 bottom-0 right-0 left-0 bg-sky-500/25 hover:bg-transparent transition-all duration-200 cursor-pointer" />
            </div>
        </motion.div>
    )
}

export default Right
