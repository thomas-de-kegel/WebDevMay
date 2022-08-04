/*
<div class="card" style="width: 18rem;">
<img src="https://picsum.photos/200" class="card-img-top" alt="..."> CHILD OF CARD
<div class="card-body"> CHILD OF CARD
<h5 class="card-title">Card title</h5> CHILD OF CARD-BODY
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> CHILD OF CARD-BODY
<a href="#" class="btn btn-primary">Go somewhere</a> CHILD OF CARD-BODY
</div>
</div>
*/

//element gen

/*

const g = (t) => document.createElement(t);

const card = g('div');
card.className = "card";
card.style = 'width: 18rem;';

const randomImage = g('img');
randomImage.className= "card-img-top";
randomImage.src = 'https://picsum.photos/200';
randomImage.setAttribute('alt','...');

const cardBody= g('div');
cardBody.className= "card-body";

const cardTitle= g('h5');
cardTitle.className= "card-title";
const cardTitleText= document.createTextNode("Card Title");
cardTitle.append(cardTitleText);



const cardText= g('p');
cardText.className= "card-text";
const actualCardText= document.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");
cardText.append(actualCardText);

const cardBtn= g('a');
cardBtn.href= "#";
cardBtn.className= "btn btn-primary";
const buttonText = document.createTextNode("Go somewhere"); //InnerText can remove entire chunks of text as opposed to using createTextNode
cardBtn.append(buttonText);


cardBody.append(cardTitle, cardText, cardBtn);

card.append(randomImage, cardBody)

const cloneOfCardContainer = card.cloneNode(true);
cloneOfCardContainer.children[1].children[0].innerText= "New Card Title"
cloneOfCardContainer.children[1].children[2].className= "btn btn-danger"

document.body.append(card);
document.body.append(cloneOfCardContainer);

//*/

function MakeCardComponent(image, cardTitle, description, btnColor, btnText) {
    // Card Container
    const CardContainer = g('div')
    CardContainer.setAttribute('style', 'width: 18rem;')

    // Card Image
    const CardImage = g('img')
    CardImage.setAttribute('src', `${image}`)
    //CardImage.classList.add('card-img-top')
    CardImage.className = "card-img-top"
    CardImage.setAttribute('alt', 'Random')



    const CardBody = g('div')
    CardBody.classList.add('card-body')

    const h5 = g('h5')
    h5.classList.add('card-title')
    const CardTitleText = document.createTextNode(cardTitle)
    h5.append(CardTitleText)

    const desc = g('p')
    desc.classList.add('card-text')
    const CardText = document.createTextNode(description)
    desc.append(CardText)

    const CardBtn = g('a')
    CardBtn.classList.add('btn')
    CardBtn.classList.add(btnColor != undefined ? btnColor : 'btn-primary')
    CardBtn.innerText = btnText
    CardBody.append(h5)
    CardBody.append(desc)
    CardBody.append(CardBtn)
    CardContainer.append(CardImage)
    CardContainer.append(CardBody)
    console.log(btnColor)
    return document.body.append(CardContainer)
}


MakeCardComponent('https://evolutionsports.nl/wp-content/uploads/2020/10/Martial-Art-stijlen-die-als-inspiraatsie-diende-voor-Avatar-The-Last-Airbender.jpeg','This is a test','lorem ipsum lorem ipsum','btn-success','Click me')

MakeCardComponent('https://evolutionsports.nl/wp-content/uploads/2020/10/Martial-Art-stijlen-die-als-inspiraatsie-diende-voor-Avatar-The-Last-Airbender.jpeg','Tasdasdasdasd','lorem ipsum lorem ipsum')

document.querySelector('.RemoveBtn').addEventListener('click',()=>{
    document.body.removeChild(document.body.children[2])
})