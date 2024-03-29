import React from 'react'
//
import Left from './partials/Left'
import Right from './partials/Right'

const Hero = () => {
    return (
        <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-6.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-6.75rem] dark:lg:pt-[4.75rem]">
            <div className="py-16 lg:relative lg:py-20 !pt-32">
                <section className="container items-center">
                    <Left />
                    <Right />
                </section>
            </div>
        </div>
    )
}

export default Hero
