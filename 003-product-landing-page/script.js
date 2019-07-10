const data1 = [
    {
        id: 0,
        icon: {
            url: './assets/shipping.svg',
            size: '60'
        },
        title: 'Superfast Shipping',
        subtitle: 'Your hardware will be send at speed of light, really superfast!'
    },
    {
        id: 1,
        icon: {
            url: './assets/powerful.svg',
            size: '60'
        },
        title: 'Super powerful',
        subtitle: 'Our equipments are bleeding edge of the market, so you\'ll handle top hardware!' 
    },
    {
        id: 2,
        icon: {
            url: './assets/price.svg',
            size: '60'
        },
        title: 'Super cheap',
        subtitle: 'And all of that for a super-accessible price, subscribe to get start!'
    },
]

const data2 = [
    {
        id: 00,
        picture: 'https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/aerocool_p7-c1_1.jpg',
        size: '200',
        item: 'Set of 10x PCs i9 with 2TB',
        description: 'Set of high-end PCs for your team of professionals.',
        pay: 'in 24x without fees!'
    },
    {    
        id: 01,
        picture: 'https://www.inkmasters.net.au/image/cache/Fuji%20Xerox%20Products/315a-min-800x800-800x800.jpg',
        size: '200',
        item: 'Set of 10x professional Printers',
        description: 'Set of professional padronized printers for your need of printing.',
        pay: 'in 24x without fees!'
    },
    {
        id: 02,
        picture: 'https://img1.madeiramadeira.com.br/product/images/88639437-samsung-un50mu6100-tv-led-50-smart-tv-4k-uhd-3hdmi-2usb-pretosku8765-525-1_zoom-800x800.jpg',
        size: '200',
        item: 'Set of 10x 4K TV Screens',
        description: 'Set of padronized TVs with 4K resolution, for your need of show the world your art.',
        pay: 'in 24x without fees!'

    },

]

const products = document.getElementById('products-container')
const prices = document.getElementById('prices-container')

products.innerHTML = data1.map((item)=>{
    return `
        <div id="card">
            <img src="${item.icon.url}" alt="${item.title} icon" width="${item.icon.size}" height="${item.icon.size}">
            <div>
                <h3>${item.title}</h3
                <p id="description">${item.subtitle}</p>
            </div>
        </div>
    `
}).join('')

prices.innerHTML = data2.map((item)=>{
    return `
        <div id="card2">
            <img src="${item.picture}" alt="${item.item} picture" width="${item.size}" height="${item.size}">
            <div>
                <h3>${item.item}</h3
                <p id="description">${item.description}</p>
                <h4>${item.pay}</h4>
            </div>
        </div>
    `
}).join('')