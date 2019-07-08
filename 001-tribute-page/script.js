const discography = [
    {
        id: 0,
        cd_name: 'Facelift',
        type: 'CD',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/4/43/Alice_In_Chains-Facelift.jpg',
        year: '1990',
        musics: [
            'We Die Young',
            'Man in the Box',
            'Sea of Sorrow',
            'Bleed the Freak',
            'I can\'t Remember ',
            'Love Hate Love',
            'It Ain\'t Like That',
            'Sunshine',
            'Put You Down',
            'Confusion',
            'I Know Something (Bout You)',
            'Real Thing'
        ]
    },
    {
        id: 1,
        cd_name: 'Dirt',
        type: 'CD',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg',
        year: '1992',
        musics: [
            'Them Bones',
            'Dam That River',
            'Rain When I Die',
            'Down In A Hole',
            'Sickman',
            'Rooster',
            'Junkhead',
            'Dirt',
            'God Smack',
            'Intro (Dream Sequence/Iron Gland)',
            'Hate to Feel',
            'Angry Chair',
            'Would?'
        ]
    },
    {
        id: 2,
        cd_name: 'Alice in Chains',
        type: 'CD',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/2/24/Alice_in_Chains_%28album%29.jpg',
        year: '1995',
        musics: [
            'Grind',
            'Brush Away',
            'Sludge Factory',
            'Heaven Beside You',
            'Head Creeps',
            'Again',
            'Shame In You',
            'God Am',
            'So Close',
            'Nothin\' Song',
            'Frogs',
            'Over Now',
        ]
    },
    {
        id: 3,
        cd_name: 'Black Gives Way to Blue',
        type: 'CD',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/5/58/AIC_FINAL_COVERsmall.jpg',
        year: '2009',
        musics: [
            'All Secrets Known',
            'Check My Brain',
            'Last Of My Kind',
            'Your Decision',
            'A Look In View',
            'When The Sun Rose Again',
            'Acid Bubble',
            'Lesson Learned',
            'Take Her Out',
            'Private Hell',
            'Black Gives Way to Blue'
        ]
    },
    {
        id: 4,
        cd_name: 'Devil put Dinosaurs Here',
        type: 'CD',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/7/74/AliceinChainsTheDevilPutDinosaursHere.png',
        year: '2013',
        musics: [
            'Hollow',
            'Pretty Done',
            'Stone',
            'Voices',
            'The Devil Put Dinosaurs Here',
            'Lab Monkey',
            'Low Ceiling',
            'Breath On A Window',
            'Scalpel',
            'Phantom Limb',
            'Hung on a Hook',
            'Choke'
        ]
    },
    {
        id: 5,
        cd_name: 'Rainier Fog',
        type: 'CD',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/0/05/Alice_in_Chains_-_Rainier_Fog.jpg',
        year: '2018',
        musics: [
            'The One You Know',
            'Rainier Fog',
            'Red Giant',
            'Fly',
            'Drone',
            'Deaf Ears Blind Eyes',
            'Maybe',
            'So Far Under',
            'Never Fade',
            'All I Am'
        ]
    },
    {
        id: 6,
        cd_name: 'SAP',
        type: 'EP',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Alice_in_Chains_Sap.jpg',
        year: '1992',
        musics: [
            'Brother',
            'Got Me Wrong',
            'Right Turn',
            'Am I Inside',
            'Love Song'
        ]
    },
    {
        id: 7,
        cd_name: 'Jar Of Flies',
        type: 'EP',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/1/15/Alice_in_Chains_Jar_of_Flies.jpg',
        year: '1994',
        musics: [
            'Rotten Apple',
            'Nutshell',
            'I Stay Away',
            'No Excuses',
            'Whale & Wasp',
            'Don\' Follow',
            'Swing On This',
        ]
    },
]

let container_body = document.getElementById('tribute-info')

container_body.innerHTML = discography.map((item)=>{
    return `
        <div id="card">
            <img src="${item.cover_img}" alt="The ${item.cd_name} cd cover." >
            <div id="card_info">
                <h2>${item.cd_name}</h2>
                <h3>${item.type}, ${item.year}</h3>
                <h4>Musics( ${item.musics.length} ):</h4>
                ${item.musics.map(music => `<li>${music}</li>`).join('')}
            </div>
        </div>
    `
}).join('')