import classNames from 'classnames'
import { ProjectTypes } from './types'

// whenever wee need to change default className value we will use this
export const cx = classNames

// nav data
export const navData = ['About', /*'Experiences', */ 'Works', 'Services', 'Contact']

// project data
export const projects: ProjectTypes[] = [
    {
        title: 'Twice Memory Card Game',
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
            "An online 2D web game creating using Matter.js javascript physics engine library. It's a simple game you just need to droop the circle with your mouse and match it with the same circle.",
        tech: ['Matter.js', 'javascript', 'Webpack'],
        code: 'https://github.com/dfsdanimaulana/circle-drop',
        live: 'https://circle-drop.netlify.app/',
        thumbnail: 'circle-drop.png',
        featured: false,
        type: ['web', 'game'],
    },
    {
        title: 'Simple Snake',
        description:
            "An online 2D web game creating using HTML, CSS, and Javascript. It's a simple snake game where you just need to eat the food and grow, and become number 1 in the leaderboard.",
        tech: ['HTML', 'CSS', 'javascript', 'Firebase', 'Webpack'],
        code: 'https://github.com/dfsdanimaulana/simple-snake',
        live: 'https://dfsdanimaulana.github.io/simple-snake',
        thumbnail: 'simple-snake.png',
        featured: false,
        type: ['web', 'game'],
    },
]
