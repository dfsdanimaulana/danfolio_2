import classNames from 'classnames'
import { ProjectTypes } from './types'

// whenever wee need to change default className value we will use this
export const cx = classNames

// nav data
export const navData = ['About', /*'Experiences', */ 'Works' /*, 'Services'*/, 'Contact']

// project data
export const projects: ProjectTypes[] = [
    {
        title: 'Twice Memory Card',
        description:
            "An online memory card game featuring the K-pop girl group 'Twice' as its theme, offering numerous levels to complete, authentication, a scoreboard, collection cards, a chat room, and many other features.",
        tech: ['React JS', 'Tailwind CSS', 'Firebase', 'Vite'],
        code: 'https://github.com/dfsdanimaulana/twice-game',
        live: 'https://twice-memory.netlify.app',
        thumbnail: 'twice-memory.png',
        featured: true,
        type: ['web', 'game'],
    },
    {
        title: 'Tank War II',
        description:
            "An online 2D web game creating using Kaboom.js javascript web game library. It's an arcade game where you have to defeat your opponent's tanks.",
        tech: ['Kaboom.js', 'Typescript', 'Vite-ts'],
        live: 'https://tank-war-2d.netlify.app',
        thumbnail: 'tank-war-2.png',
        featured: true,
        type: ['web', 'game'],
    },
    {
        title: 'Circle Drop',
        description:
            "An online 2D web game creating using Matter.js javascript physics engine library. It's a simple game you just need to drop the circle with your mouse and match it with the same circle.",
        tech: ['Matter.js', 'javascript', 'Webpack'],
        code: 'https://github.com/dfsdanimaulana/circle-drop',
        live: 'https://circle-drop.netlify.app/',
        thumbnail: 'circle-drop.png',
        featured: true,
        type: ['web', 'game'],
    },
    {
        title: 'Simple Snake',
        description:
            "An online 2D web game it's a simple snake game where you just need to eat the food and grow, and become number 1 in the leaderboard.",
        tech: ['HTML', 'CSS', 'javascript', 'Firebase', 'Webpack'],
        code: 'https://github.com/dfsdanimaulana/simple-snake',
        live: 'https://dfsdanimaulana.github.io/simple-snake',
        thumbnail: 'simple-snake.png',
        featured: false,
        type: ['web', 'game'],
    },
    {
        title: 'Natours: Tour Guide',
        description:
            'Natours is an intricately designed landing page UI dedicated to tour guides and travel aficionados. Immerse yourself in its captivating interface, meticulously crafted using HTML, CSS, and Javascript to ensure a seamless and engaging user experience.',
        tech: ['HTML', 'CSS', 'javascript'],
        code: 'https://github.com/dfsdanimaulana/natours',
        live: 'https://dfsdanimaulana.github.io/natours',
        thumbnail: 'natours.png',
        featured: false,
        type: ['web'],
    },
    {
        title: 'The Dojo: Project Manager',
        description:
            'The Dojo is a dynamic project management website meticulously crafted with React.js and powered by Firebase, designed to empower teams and individuals in seamlessly orchestrating and executing their projects. Combining the flexibility of React.js for a responsive and interactive user interface with the robust backend capabilities of Firebase, The Dojo offers a user-friendly experience for project planning, collaboration, and tracking.',
        tech: ['React JS', 'Firebase'],
        code: 'https://github.com/dfsdanimaulana/the-dojo',
        live: 'https://thedojosite-686bb.web.app',
        thumbnail: 'the-dojo.png',
        featured: false,
        type: ['web'],
    },
    {
        title: 'Twice Memory Card I',
        description: 'First version of Twice Memory Card Game',
        tech: ['React JS'],
        code: 'https://github.com/dfsdanimaulana/memorygame',
        live: 'https://dfsdanimaulana.github.io/memorygame',
        thumbnail: 'memorygame.png',
        featured: false,
        type: ['web'],
    },
    {
        title: 'Tank War I',
        description:
            'First version of Tank War Game, created using pure HTML, CSS, & Javascript and sprite sheet image',
        tech: ['HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/dfsdanimaulana/tank-war',
        live: 'https://dfsdanimaulana.github.io/tank-war',
        thumbnail: 'tank-war-1.png',
        featured: false,
        type: ['web'],
    },
]
