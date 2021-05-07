document.addEventListener('DOMContentLoaded', () =>{
    
    const cardArray = [ // theese are my cards, there are two of each because there must be 2 in order to match them
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

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid'); // querySelector selects an specific section from html file and converts it to an object
    const resultDisplay = document.querySelector('#result');
    let cardsArray = [];
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'Images/Dado.png');
            card.setAttribute('data-id', i);
            card.setAttribute("class", "images");
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('yep');
            
            cardsWon.push(cardsChosen);
            console.log(cardsWon);
        } else {
            cards[optionOneId].setAttribute('src', 'Images/Momia.jpg');
            cards[optionTwoId].setAttribute('src', 'Images/Momia.jpg');
            alert('Nope');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = "Encontraste todas Wachinn !!";
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id'); //porque usa la expresion this
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length == 2){
            setTimeout(checkForMatch, 500);

        }
    }

    createBoard();
})