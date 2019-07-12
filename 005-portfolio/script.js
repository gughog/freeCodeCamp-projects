//Materialize inits
//Navbar, Floating buttons init
document.addEventListener('DOMContentLoaded', ()=>{
    let sidenavs = document.querySelectorAll('.sidenav')
    let floating_btn = document.querySelectorAll('.fixed-action-btn')

    let sidenavi_instances = M.Sidenav.init(sidenavs)
    let floating_btn_instances = M.FloatingActionButton.init(floating_btn);
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
        { id: 'html5', class: 'fab fa-html5'},
        { id: 'css3', class: 'fab fa-css3'},
        { id: 'js', class: 'fab fa-js'},
        { id: 'react', class: 'fab fa-react'},
        { id: 'linux', class: 'fab fa-ubuntu'},
        { id: 'bootstrap', class: 'fab fa-bootstrap'},
        { id: 'materialize', class: 'fab fa-google'},
        { id: 'git', class: 'fab fa-git'},
        { id: 'npm', class: 'fab fa-npm'},
        { id: 'yarn', class: 'fab fa-yarn'},
    ]
}


const education = document.getElementById('education')
const skills = document.getElementById('skills')

education.innerHTML = data.education.map(item =>{
    return `
        <h4>${item.degree}</h4>
        <h5><a href="${item.institutionWebSite}">${item.institution}</a></h5>
        <h5>${item.course}</h5>
        <h5>${item.conclusion}</h5>
        <div class="divisor2-2"></div>
    `
}).join('')

skills.innerHTML = data.skills.map(item =>{
    return `
        <i class="${item.class} skill-icon"></i>
    `
}).join('')