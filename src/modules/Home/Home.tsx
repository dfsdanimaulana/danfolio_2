import React from 'react'
//
import About from './sections/About'
import GetInTouch from './sections/GetInTouch'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Footer from '@widgets/Footer'
// import Services from './sections/Services'
// import Worked from './sections/Worked'
// import Why from './sections/Why/Why'

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Why /> */}
            <About />
            {/* <Worked /> */}
            <Projects />
            {/* <Services /> */}
            <GetInTouch />
            <Footer />
        </>
    )
}

export default Home
