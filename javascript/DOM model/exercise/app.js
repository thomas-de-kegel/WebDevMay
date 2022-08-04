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

//*

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
const buttonText = document.createTextNode("Go somewhere");
cardBtn.append(buttonText);


cardBody.append(cardTitle);
cardBody.append(cardText);
cardBody.append(cardBtn);

card.append(randomImage)
card.append(cardBody);
document.body.appendChild(card);

//*/