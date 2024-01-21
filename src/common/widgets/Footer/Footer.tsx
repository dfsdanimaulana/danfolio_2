import React from 'react'

const Footer = () => {
    return (
        <section id="__footer" className="py-5">
            <div className="text-center text-sm text-slate-400 tracking-wide">
                <p className="opacity-90 mb-2">
                    {' '}
                    Built & designed by{' '}
                    <a href="https://devhasibulislam.vercel.app/" target="_blank" className="text-sky-400">
                        Hasibul Islam
                    </a>{' '}
                    who inspired by{' '}
                    <a href="https://v4.brittanychiang.com" target="_blank" className="text-sky-400">
                        Brittany Chiang
                    </a>{' '}
                </p>
                <p className="opacity-90">
                    {' '}
                    Modified by{' '}
                    <a href="https://github.com/dfsdanimaulana" target="_blank" className="text-sky-400">
                        @dnm17_
                    </a>{' '}
                    © {new Date().getFullYear()}
                </p>
            </div>
        </section>
    )
}

export default Footer
