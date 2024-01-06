import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'

const Left = () => {
    // content
    const content = [
        "Hi, I'm Dani Maulana, a self-taught web developer for almost two years. I've focused on HTML, CSS, and JavaScript, learning how to create websites from scratch. I've also explored making sites look good on all devices and started understanding how the back-end of websites works. I love learning at my own pace and improving my skills to build better digital experiences. I'm excited to keep growing and bring my expertise to new projects.",
        'While I have no professional experience in the field, I have completed numerous projects on my own and through online courses, allowing me to develop a diverse skill set and a strong understanding of web development best practices.',
        'I am a quick learner and always strive to improve my skills and stay up-to-date with the latest technologies. ',
        'Here are a few technologies I have been working with recently:',
    ]

    return (
        <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
            <div className="space-y-4 mt-7 text-slate-400">
                {content.map((e: string, i: number) => (
                    <p key={i}> {e} </p>
                ))}

                <div className="__skills md:pr-56">
                    <ul className="grid grid-cols-2 space-y-2">
                        {skills.map((e: string, i: number) => (
                            <li
                                key={i}
                                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
                            >
                                {' '}
                                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Left
