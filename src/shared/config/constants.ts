import classNames from 'classnames'
import { ProjectTypes } from './types'

// whenever wee need to change default className value we will use this
export const cx = classNames

// nav data
export const navData = ['About', 'Experiences', 'Works', 'Contact']

// project data
export const projects: ProjectTypes[] = [
    {
        title: 'Ciseco eCommerce',
        description:
            'Shop seamlessly with top brands, secure transactions, swift deliveries, user-friendly navigation, and exclusive deals. Redefine convenience in our digital marketplace.',
        tech: ['Next.JS', 'Redux', 'Tailwind-CSS', 'Vercel', 'MongoDB', 'Cloudinary', 'JWT'],
        code: 'https://github.com/devhasibulislam/ciseco-ecommerce',
        live: 'https://ciseco-csr.vercel.app',
        thumbnail: 'ciseco-ecommerce.png',
        featured: false,
    },

    {
        title: 'Travello Booking',
        description:
            'Perfect for all kinds of travel agency. Including tours, hotel booking, activity/event, travel experiences, online booking, room bnb, villa rental, holiday rental, flight ticket, and more.',
        tech: ['Next.JS', 'Redux', 'Tailwind-CSS', 'Vercel', 'MongoDB', 'Cloudinary', 'JWT'],
        code: 'https://github.com/devhasibulislam/travello-template',
        live: 'https://travello-template.vercel.app/',
        thumbnail: 'travello-template.png',
        featured: false,
    },

    {
        title: 'PlanNao Advisory',
        description:
            "All you need is mentor' is a pioneering ed-tech platform in Bangladesh connecting students with mentors for personalized guidance and bridging the gap between education and success.",
        tech: ['Next.JS', 'Redux', 'Tailwind-CSS', 'Vercel', 'MongoDB', 'Cloudinary', 'Nodemailer', 'JWT'],
        code: 'https://github.com/devhasibulislam/plannao-template',
        live: 'https://plannao-template.vercel.app',
        thumbnail: 'plannao-template.png',
        featured: false,
    },

    {
        title: 'nLog Blogging',
        description:
            'Natural Way Of Blogging. By writing politically incorrect things uwu. Welcome to our cozy corner of the internet! A delightful mix of lighthearted musings, adventures, and insightful reflections.',
        tech: ['React.JS', 'Hapi/Joi', 'Morgan', 'Express.JS', 'MongoDB', 'Axios', 'DayJS', 'Mongoose'],
        code: 'https://github.com/devhasibulislam/nLog-blogs',
        live: 'https://nlog-blogs-csr.vercel.app',
        thumbnail: 'nLog.png',
        featured: false,
    },

    {
        title: 'eCommerce Dashboard',
        description:
            'Full-featured e-commerce admin dashboard: Efficiently oversee products, orders, customers, and additional functionalities for seamless website management.',
        tech: ['Next.JS', 'Redux', 'Vercel', 'MUI', 'Nivo', 'MongoDB', 'Express.JS', 'Render', 'Emotion'],
        code: 'https://github.com/devhasibulislam/ecomvision-template',
        live: 'https://ecomvision-csr.vercel.app/',
        thumbnail: 'ecomvision-template.png',
        featured: false,
    },

    {
        title: 'URL Shortener',
        description:
            'URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page.',
        tech: ['Next.JS', 'Axios', 'Cheerio', 'Vercel', 'MongoDB', 'Tailwind CSS'],
        code: 'https://github.com/devhasibulislam/lisonet-template',
        live: 'https://lisonet-template.vercel.app/',
        thumbnail: 'url-shortener.png',
        featured: false,
    },
]
