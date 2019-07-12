//Materialize inits
//Navbar, Floating buttons init
document.addEventListener('DOMContentLoaded', ()=>{
    let sidenavs = document.querySelectorAll('.sidenav')
    let floating_btn = document.querySelectorAll('.fixed-action-btn')
    let icon_tooltips = document.querySelectorAll('.tooltipped')
    let carousel = document.querySelectorAll('.carousel')

    let sidenavi_instances = M.Sidenav.init(sidenavs)
    let floating_btn_instances = M.FloatingActionButton.init(floating_btn);
    let icon_tooltips_instances = M.Tooltip.init(icon_tooltips)
    let carousel_instances = M.Carousel.init(carousel, { fullWidth: true, padding: 40})
})

// Data:

const data = {
    education: [
        {
            id: 01,
            institution: 'Federal Institute of Alagoas',
            institutionWebSite: 'https://www2.ifal.edu.br/',
            course: 'Computer Information Systems',
            degree: 'Bachelor of Computional Information Systems',
            conclusion: 'December, 2023'
        },
        {
            id: 02,
            institution: 'Estacio of Alagoas - FAL',
            institutionWebSite: 'http://portal.estacio.br/unidades/faculdade-est%C3%A1cio-de-alagoas/',
            course: 'Administration Business',
            degree: 'Bachelor of Administration Business',
            conclusion: 'July, 2019'
        }
    ],
    skills: [
        { id: 'HTML5', class: 'fab fa-html5', color: 'red-text'},
        { id: 'CSS3', class: 'fab fa-css3', color: 'blue-text'},
        { id: 'Javascript', class: 'fab fa-js', color: 'yellow-text'},
        { id: 'React.js', class: 'fab fa-react', color: 'cyan-text'},
        { id: 'Linux/Ubuntu', class: 'fab fa-ubuntu', color: 'orange-text'},
        { id: 'Bootstrap CSS', class: 'fab fa-bootstrap', color: 'purple-text'},
        { id: 'Materialize CSS', class: 'fab fa-google', color: ''},
        { id: 'Git/Github', class: 'fab fa-git', color: 'red-text'},
        { id: 'NPM', class: 'fab fa-npm', color: 'red-text'},
        { id: 'Yarn', class: 'fab fa-yarn', color: 'blue-text'},
    ],
    projects: [
        {
            id: 001,
            link: 'https://github.com/gughog/crud-react-app',
            name: 'CRUD React Todo App',
            description: 'A simple To-do app to train my skills in React.js, React Router and Axios.',
            image: './assets/img/project-pics/react-todo.png'
        },
        {
            id: 002,
            link: 'https://github.com/gughog/personal-budget-app',
            name: 'Personal Budget App',
            description: 'A web application with local data persistent for you keep track of your expenses.',
            image: './assets/img/project-pics/personal-budget.png'
        },
        {
            id: 003,
            link: 'https://github.com/gughog/realtime-html-editor',
            name: 'HTML5 Editor',
            description: 'A little html5 editor to test tiny pieces of codes and see the result in real time.',
            image: './assets/img/project-pics/html-editor.png'
        },
        {
            id: 004,
            link: 'https://github.com/gughog/freeCodeCamp-projects/tree/master/001-tribute-page',
            name: 'Alice In Chains Tribute Page',
            description: 'A tribute page for Alice in Chains, as proposed in freeCodeCamp course to build a tribute page.',
            image: './assets/img/project-pics/aic-tribute.png'
        },
        {
            id: 005,
            link: 'https://github.com/gughog/freeCodeCamp-projects/tree/master/002-survey-form',
            name: 'Gaming Survey Form',
            description: 'A Gaming survey Form, proposed in freeCodeCamp course.',
            image: './assets/img/project-pics/gaming-form.png'
        },
        {
            id: 006,
            link: 'https://github.com/gughog/freeCodeCamp-projects/tree/master/003-product-landing-page',
            name: 'Technobucket Landing Page',
            description: 'A landing page for the fictional service called "Technobucket".',
            image: './assets/img/project-pics/technobucket.png'
        },
        {
            id: 007,
            link: 'https://github.com/gughog/freeCodeCamp-projects/tree/master/004-technical-docs',
            name: 'React Docs',
            description: 'A mini technical documentation about React, as proposed in freeCodeCamp course.',
            image: './assets/img/project-pics/react-docs.png'
        }
    ]
}


const education = document.getElementById('education')
const skills = document.getElementById('skills')
const cards = document.getElementById('cards')

education.innerHTML = data.education.map(item =>{
    return `
        <h4>${item.degree}</h4>
        <h5><a class="indigo-text" href="${item.institutionWebSite}">${item.institution}</a></h5>
        <h5>${item.course}</h5>
        <h5>${item.conclusion}</h5>
        <div class="divisor2-2"></div>
    `
}).join('')

skills.innerHTML = data.skills.map(item =>{
    return `
        <i class="${item.class} ${item.color} skill-icon tooltipped" data-position="bottom" data-tooltip="${item.id}"></i>
    `
}).join('')

cards.innerHTML = data.projects.map(item=>{
    return `
    <div id="card" class="project-tile carousel-item grey darken-2 white-text" href="#one!">
        <h2><a href="${item.link}" class=" cyan-text text-accent-3">${item.name} <i class="fas fa-external-link-alt"></i></a></h2>
        <p class="">${item.description}</p>
        <img src="${item.image}" alt="">
    </div>
    `
}).join('')