// 7bb69938615c468fa36934049aea7a87

var apiKey = "7bb69938615c468fa36934049aea7a87";
var baseUrl = "https://newsapi.org/v2/everything?";
var ResultsElement = document.querySelector(`.results`); //more flexible than getbyid
var ModalTitle = document.querySelector(`.modal-title`); //makes things ready to display the articles inside a modal
var NewsImageEl= document.querySelector('.news-image')
var publishedAtEl= document.querySelector('.publishedAt')
var NewsContent = document.querySelector('.content')

/*/
fetch(`${baseUrl}q=javascript&language=nl&apiKey=${apiKey}`)
.then(res=>res.json())
.then(data =>{
    console.log(data)
    data.articles.forEach(news =>{
        console.log(news) //we can use .title and other properties to narrow down the output
    })
})

//*/

//*/
async function getAllNews() {
  let res = await fetch(`${baseUrl}q=corona&language=nl&apiKey=${apiKey}`);
  return res.json();
} //done with an async function

/*/

function getAllNews2(){
    return new Promise{(resolve,reject)}
}       //promise model

//*/

function GetDetail(news) {
  ModalTitle.innerHTML = news.title;
  NewsImageEl.src = news.urlToImage;
  publishedAtEl.innerHTML = news.publishedAt;
  NewsContent.innerHTML = news.content;
}

getAllNews().then((result) => {
  // console.log(result)
  result.articles.map((news, index) => {
    //  console.log(news)
    let NewsLink = `<a href="${news.url}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" target="_blank" data-id="${index}">${news.title}</a><br/>`;
    //  console.log(NewsLink)

    ResultsElement.innerHTML += NewsLink;
  });
  document.querySelectorAll("a").forEach((link) => {
    //  console.log(link)
    link.addEventListener("click", (event) => {
      let id = event.target.getAttribute("data-id");
      let singleNews = result.articles;

      GetDetail(result.articles[id]);
    });
  });
});
