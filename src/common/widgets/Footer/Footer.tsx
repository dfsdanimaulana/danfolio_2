import React from 'react'

const Footer = () => {
    return (
        <section id="__footer" className="py-5">
            <div className="text-center text-sm text-slate-400">
                <p className="opacity-90">
                    {' '}
                    Modified by{' '}
                    <a href="https://www.instagram.com/dnm17_" target="_blank" className="text-sky-400">
                        @dnm17_
                    </a>{' '}
                    built & designed by{' '}
                    <a href="https://bento.me/devhasibulislam" target="_blank" className="text-sky-400">
                        @Hasibul Islam
                    </a>{' '}
                    who inspired by{' '}
                    <a href="https://github.com/bchiang7/v4" target="_blank" className="text-sky-400">
                        Brittany Chiang
                    </a>{' '}
                    ❤️{' '}
                </p>
            </div>
        </section>
    )
}

export default Footer
