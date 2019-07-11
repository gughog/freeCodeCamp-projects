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
            course: 'Computer Information Systems',
            degree: 'Bachelor of Coputional Information Systems',
            conclusion: '2023'
        },
        {
            id: 02,
            institution: 'Estacio of Alagoas - FAL',
            course: 'Administration Business',
            degree: 'Bachelor of Administration Business',
            conclusion: '2019'
        }
    ]
}
