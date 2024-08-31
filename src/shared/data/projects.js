import {
    imagesPortfolio
} from 'shared/images';

const projects = [
    {
        id: 1,
        img: `${imagesPortfolio.dashboard}`,
        name: 'Practicing SASS preprocessors',
        type: 'Practice',
        categories: ['sass', 'html', 'js'],
        link: 'https://github.com/KristinaHranovska/sass-project'
    },
    {
        id: 2,
        img: `${imagesPortfolio.rentcar}`,
        name: 'Easily',
        type: 'Pet-project',
        categories: ['react', 'react-dom', 'react-redux', 'react-modal', 'redux-persist', 'react-router-dom', 'date-fns', 'react-responsive', 'react-hooks', 'clsx', 'react-hook-form', 'redux-toolkit', 'yup-validation', 'axios-react', 'react-hot-toast', 'gsap', 'aos-animation', 'mui-material', 'context-react'],
        link: 'https://github.com/KristinaHranovska/rent-camper'
    },
    {
        id: 3,
        img: `${imagesPortfolio.camperapi}`,
        name: 'Easily API',
        type: 'Node-project',
        categories: ['nodejs', 'dotenv', 'mongoose', 'swagger', 'nodemon', 'joi', 'morgan'],
        link: 'https://github.com/KristinaHranovska/rent-camper-api'
    },
    {
        id: 4,
        img: `${imagesPortfolio.typestudy}`,
        name: 'Study-Buddy',
        type: 'Practice',
        categories: ['html', 'grid'],
        link: 'https://github.com/KristinaHranovska/grid-study-buddy'
    },
    {
        id: 5,
        img: `${imagesPortfolio.cathouse}`,
        name: 'Cats House',
        type: 'Practice',
        categories: ['html', 'grid'],
        link: 'https://github.com/KristinaHranovska/grid-cats-house'
    },
    {
        id: 6,
        img: `${imagesPortfolio.aquatrack}`,
        name: 'AquaTrack',
        type: 'Team-project',
        categories: ['react', 'redux', 'react-router', 'react-modal', 'mui', 'date-fns', 'react-responsive', 'react-hooks', 'clsx', 'react-helmet-async', 'react-hook-form', 'reactour', 'react-persist', 'yup-validation', 'axios-react', 'react-hot-toast', 'aos-animation', 'i18next-react'],
        link: 'https://github.com/KristinaHranovska/project-aqua-track'
    },
    {
        id: 7,
        img: `${imagesPortfolio.aquatrackapi}`,
        name: 'AquaTrack API',
        type: 'Node-project',
        categories: ['nodejs', 'mongodb', 'mongoose', 'axios', 'bcrypt', 'sendgrid', 'cloudinary', 'swagger-ui', 'uuid-generator', 'joi-validation', 'date-fns', 'ejs-templates', 'moment-timezone'],
        link: 'https://github.com/KristinaHranovska/node-rest-api'
    },
    {
        id: 8,
        img: `${imagesPortfolio.chocolateeuphoria}`,
        name: 'Chocolate Euphoria',
        type: 'Pet-project',
        categories: ['react', 'redux', 'sass', 'toolkit', 'axios', 'react-modal', 'redux-persist', 'react-select', 'aoc', 'swiper', 'react-responsive', 'react-toast', 'formik', 'clsx', 'yup-validation'],
        link: 'https://github.com/KristinaHranovska/project-chocolate-euphoria'
    },
    {
        id: 9,
        img: `${imagesPortfolio.chocolateapi}`,
        name: 'Chocolate Euphoria API',
        type: 'Node-project',
        categories: ['nodejs', 'dotenv', 'mongodb', 'mongoose', 'nodemon', 'render', 'sendgrid', 'swagger-ui', 'joi-validation', 'ejs-templates'],
        link: 'https://github.com/KristinaHranovska/chocolate-euphoria-backend'
    },
    {
        id: 10,
        img: `${imagesPortfolio.honey}`,
        name: 'Bee and Hornet',
        type: 'Commercial project',
        categories: ['react', 'sass', 'rest-api', 'react-responsive', 'swiper-slider', 'usestate-hook'],
        link: 'https://github.com/KristinaHranovska/honey_front'
    },
    {
        id: 11,
        img: `${imagesPortfolio.phonebook}`,
        name: 'My Phone Book',
        type: 'Pet-project',
        categories: ['react', 'fuse', 'authentication', 'react-router', 'material-ui', 'react-redux', 'authorization', 'formik', 'react-hooks', 'clsx', 'yup-validation', 'react-hot-toast', 'aos-animation'],
        link: 'https://github.com/KristinaHranovska/goit-react-hw-08'
    },
    {
        id: 12,
        img: `${imagesPortfolio.cinemapulse}`,
        name: 'CinemaPulse',
        type: 'Pet-project',
        categories: ['react', 'pagination', 'rest-api', 'react-router-dom', 'react-toast', 'formik', 'clsx'],
        link: 'https://github.com/KristinaHranovska/goit-react-hw-05'
    },
    {
        id: 13,
        img: `${imagesPortfolio.energyflow}`,
        name: 'EnergyFlow',
        type: 'Team-project',
        categories: ['css', 'html', 'pagination', 'js', 'rest-api', 'promise', 'localstorage', 'axios', 'post', 'get', 'patch', 'izitoast', 'await-async'],
        link: 'https://github.com/KristinaHranovska/project-JS-Wizards'
    },
    {
        id: 14,
        img: `${imagesPortfolio.jsapi}`,
        name: 'Search pictures',
        type: 'Pet-project',
        categories: ['css', 'html', 'js', 'axios', 'async-await', 'simplelightbox', 'pixabay-api', 'izitoast'],
        link: 'https://github.com/KristinaHranovska/goit-js-hw-12'
    },
    {
        id: 15,
        img: `${imagesPortfolio.focusframe}`,
        name: 'Focus.Frame',
        type: 'Team-project',
        categories: ['css', 'html', 'js', 'vite'],
        link: 'https://github.com/KristinaHranovska/project-CodeCrafters'
    },
    {
        id: 16,
        img: `${imagesPortfolio.webstydio}`,
        name: 'WebStudio',
        type: 'Pet-project',
        categories: ['html', 'css', 'js'],
        link: 'https://github.com/KristinaHranovska/goit-markup-hw-06'
    },
]

export default projects