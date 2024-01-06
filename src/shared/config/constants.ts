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
        live: 'https://twice-memory.netlify.app/',
        thumbnail: 'twice-memory.png',
        featured: false,
    },
]
