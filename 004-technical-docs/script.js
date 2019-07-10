//database of contents
const contents = [
    {
        id: '001',
        title: '#001 - Getting Started',
        body: `
            You will start to learn the fundamentals of React, great! To get start, what if we just say hello in a very objective and clean way?

            To do this, we'll need some tools installed in our machine: <br/><br/>
        
            > Node and NPM (Node Package Manager, comes with node); <br/>
            > Or Yarn, as NPM alternative; <br/><br/>
            

            Let's start creating a project with <code>npx create-react-app myproject</code>, or <code>yarn create myproject</code> <br/><br/>

            Now navigate to the page with <code> cd /myproject</code> and then start the development server with <code>npm start</code> or <code>yarn start</code>. Then you can open your localhost server and see the boilerplate react app.
        `,
    },
    {
        id: '002',
        title: '#002 - Writing a Stateful component',
        body: `
            So, you have setup everything and want to make some codes, huh? So Let's write a component. But first your need to keep in mind that, in this first approach we'll learn to create 2 types of components: Stateful and Stateless.<br/><br/>

            Stateful components, or Class-based components are the ones who can keep states and manipulate lifecycle hooks. Here is an example: <br/><br/>
            
            <img src="./assets/codes/code2-1.png" alt="A Stateful component">
        `,
    },
    {
        id: '003',
        title: '#003 - Writing a Stateless component',
        body: `
            Stateless components are arrow functions basically, that cannot have state or lifecycle hooks by default, put they have props. Here's an example:<br/><br/>

            <img src="./assets/codes/code3-1.png" alt="A Stateless component">
        `,
    },
    {
        id: '004',
        title: '#004 - About JSX',
        body: `
            This section we'll see more about JSX, a funny tag syntax that is neither a string nor HTML. <br/><br/>

            It is called JSX, and it is a syntax extension to JavaScript. React official docs recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript. <br/><br/>

            Here is an example: <br/><br/>

            <img src="./assets/codes/code4-1.png" alt="JSX In Action"> <br/><br/>

            Note this "className" thing. This is how we define classes, for css style or some other action instead of "class". This is because "class" is a reserved world in javascript. remember: <strong>React is all about Javascript!</strong>
        `,
    },
    {
        id: '005',
        title: '#005 - Importing components to container components',
        body: `
            After you create your new fancy components, if you need to use two or more of these inside a view/container, you'll need to import these to your view component. And when you're done, It's easy to call them to your app: <br/><br/>

            <img src="./assets/codes/code5-1.png" alt="Importing components">
        `,
    },
    {
        id: '006',
        title: '#006 - State Vs Props',
        body: `
        State is ONLY avaliable in class-based/stateful components that extends React.Component. With that said, funcional/stateless components cannot have states. Is is why they are usually called 'Stateless components'. We can manipulate state changes, and if we do, react needs to re-render the virtual DOM for update It. <br/><br/>

        States are managed inside a component, while props are defined outside, and atributed in componend call. States are initialized by the reserved word 'state', and they are a javascript object that can contain states in variety of data structures. We need to access them with 'this' keyword.

        Props (properties) are values defined inside components to be passed for it when are called.<br/><br/>

        <img src="./assets/codes/code6-1.png" alt="State versus props"> 
        `,
    },
    {
        id: '007',
        title: '#007 - Events',
        body: `
            React is javascript. So, we'll have a lot of events that we can use to help us to build our interfaces more interactive.<br/><br/>

            <h4>Mouse Events</h4>
            <img src="./assets/codes/code7-1.png" alt="Mouse event options"> 

            <h4>Form Events</h4>
            <img src="./assets/codes/code7-2.png" alt="Form event options"> 

            <h4>Keyboard Events</h4>
            <img src="./assets/codes/code7-3.png" alt="Keyboard event options"> 

            <p>To see more events, check <a href="https://reactjs.org/docs/events.html">this link</a>.</p>
        `,
    },
    {
        id: '008',
        title: '#008 - Passing data to props',
        body: `
            As we talk in section about props, we can define properties and pass data to it.<br/><br/>

            In MyCompo: <br/><br/>
            <img src="./assets/codes/code8-1.png" alt="MyCompo code"><br/><br/>

            In App container: <br/><br/>
            <img src="./assets/codes/code8-2.png" alt="App container code">

        `,
    },
    {
        id: '009',
        title: '#009 - Updating the state',
        body: `
            We cannot update our state directly by reassigning up a new value. To this we have <code>setState()</code> method instead. <br/><br/>
            
            <img src="./assets/codes/code9-1.png" alt="Explanation on how to update state">
        `,
    },
    {
        id: '010',
        title: '#010 - Stylishing Components',
        body: `
            There are a lot of ways to put styles in your components, but we'll see the Module way and the inline style. <br/><br/>

            Inline styles <br/><br/>

            <img src="./assets/codes/code10-1.png" alt="Inline styles in react"><br/><br/>

            CSS module styles <br/><br/>
            
            For this we'll need just create a <code>styles.module.css</code> and import to our component. This will avoid styles to conflite with others of the same name:<br/><br/>

            <img src="./assets/codes/code10-2.png" alt="Using css modules">      
        `,
    },
    {
        id: '011',
        title: '#011 - About this docs',
        body: `This React docs is part of the freeCodeCamp Web Developer course, and contains a limited amount of data about React. Please, visit the <a href="https://facebook.github.io/create-react-app/">official documentation</a> for a more deep and consistent content for your studies, or use this only for a quick guide.`
    }
]

// --------------------------------------
const main = document.getElementById('main-doc')

main.innerHTML = contents.map((item)=>{
    return `
    <h2 id="${item.id}">${item.title}</h2>
    <p>
        ${item.body}
    </p>
    <div class="divisor"></div>
`
}).join('')