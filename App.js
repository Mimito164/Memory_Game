document.addEventListener('DOMContentLoaded', () =>{
    
    const cardArray = [ // theese are my cards
        {
            name: 'Azazel',
            img: 'Images/Azazel.jpg'
        },
        {
            name: 'Azazel',
            img: 'Images/Azazel.jpg'
        },
        {
            name: 'Cain',
            img: 'Images/Cain.jpg'
        },
        {
            name: 'Cain',
            img: 'Images/Cain.jpg'
        },
        {
            name: 'Magdalene',
            img: 'Images/Magdalene.png'
        },
        {
            name: 'Magdalene',
            img: 'Images/Magdalene.png'
        },
        {
            name: 'Lilith',
            img: 'Images/Lilith.png'
        },
        {
            name: 'Lilith',
            img: 'Images/Lilith.png'
        },
        {
            name: 'Lazarus',
            img: 'Images/Lazarus.png'
        },
        {
            name: 'Lazarus',
            img: 'Images/Lazarus.png'
        },
        {
            name: 'Eve',
            img: 'Images/Eve.png'
        },
        {
            name: 'Eve',
            img: 'Images/Eve.png'
        },
    ]

    const grid = document.querySelector('.grid');

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'Images/Dado.png');
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    
})