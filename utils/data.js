import yelp from '../assets/yelpcamp.png'
import proManag from '../assets/proManag.png'
import portfolio from '../assets/portfolio.png'
import vaktija from '../assets/vaktija.png'
import movie from '../assets/moviedb.png'
const webScraper = require('../assets/web-scraper.png')
const dall = require('../assets/dall-e.png')


export const projects = [
    {
        id: 0,
        name: 'Yelp Camp',
        desc: 'Site for making new campgrounds, reviewing other campgrounds by commenting them, giving them grade. Register/Login system implemented. When you check one campground it shows him on map. Map implemented via MapBox',
        img: yelp,
        madeWith: 'MEN Stack(Mongo DB with mongoose, Express and Node)',
        link: 'https://github.com/AidPuska/YelpCamp-project'
    },
    {
        id: 1,
        name: 'Projects Managment',
        desc: 'Add new project or project part, assign it to some registred user, se online/offline users',
        img: proManag,
        madeWith: 'FrontEnd(React, Tailwind CSS) & BackEnd(Firebase)',
        link: 'https://projectsmanagment-f43a4.web.app/'
    },
    {
        id: 2,
        name: 'Portfolio page',
        desc: 'Portfolio page for personal use',
        img: portfolio,
        madeWith: 'React, Tailwind CSS, Framer motion for animations',
        link: 'https://apuska.netlify.app/'
    },
    {
        id: 3,
        name: 'E-commerce app',
        desc: 'Simple e-commerce app.',
        img: 'https://user-images.githubusercontent.com/108176604/216184632-481bc902-7c81-482b-ad4d-f338ee9580a1.png',
        madeWith: 'MERN Stack, TailwindCSS',
        link: 'https://github.com/AidPuska/e-commerce'
    },
    {
        id: 4,
        name: 'Vaktija Interactive Map',
        desc: 'Get Prayer Time for towns available in Vaktija.ba Api',
        img: vaktija,
        madeWith: 'React, Pure CSS, Mapbox, Vaktija Api',
        link: 'https://vaktijainteractivemap.netlify.app/'
    },
    {
        id: 5,
        name: 'Movies and tv shows',
        desc: 'Get random movie, search for movies/tv shows, see popular movies and tv shows, and upcoming movies',
        img: movie,
        madeWith: 'React, TailwindCSS, TMDB Api',
        link: 'https://github.com/AidPuska/movie-database'
    },
    {
        id: 5,
        name: "Dall-e Aid",
        desc: "Get suprised by random prompt or enter yours and get image generated by that propmt with your name entered, on home page you can chech available generations...,",
        img: dall,
        madeWith: "MERN stack, openAi",
        link: "https://dall-e-aid.netlify.app"
    },
    {
        id: 6,
        name: "Web scraper",
        desc: "With this you can scrape any olx.ba category, where you'll get products price, name and picture, in plan for better functionality",
        img: webScraper,
        madeWith: "MERN stack",
        link: "https://github.com/AidPuska/web-scraper"
    }
]

export const skills = [
    {
        name: 'React.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
        name: 'NodeJS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'TailwindCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
    },
    {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
        name: 'React Native',
        icon: 'https://cdn.cdnlogo.com/logos/r/18/react-native.svg'
    },
    {
        name: 'PostgreSql',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
]