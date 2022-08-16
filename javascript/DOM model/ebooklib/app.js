const g = t => document.createElement(t);

const bookAppend=document.getElementById("tbody")

document.addEventListener('DOMContentLoaded',()=>{
    fetch ('http://localhost:5000/books')
    .then(response=>response.json())
    .then(books=>{
        books.map((book)=>{
            const tr=g('tr')
            const th = g('th')
            th.class="row"
            th.textContent=`${book.id}`
            const tdTitle = g('td')
            tdTitle.textContent=`${book.title}`
            const tdAuthor=g('td')
            tdAuthor.textContent=`${book.author}`
            const tdGenre=g('td')
            tdGenre.textContent=`${book.category}`
            const tdDate=g('td')
            tdDate.textContent=`${book.publishDate}`
            const tdPrice=g('td')
            tdPrice.textContent=`${book.price}`
            const tdTrashCan=g('td')
            tdTrashCan.innerHTML='<a href="#" class="deletelink"><i class="fa fa-trash lead" aria-hidden="true"></i></a>'
            tr.append(th,tdTitle,tdAuthor,tdGenre,tdDate,tdPrice,tdTrashCan)
            bookAppend.append(tr)
        })
    })
})

//postBtn
let postBtn = document.querySelector('.addbookbtn')

postBtn.addEventListener("click",(e)=>{
    fetch('http://localhost:5000/books',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "title":`${document.getElementById("book_name").value}`,
            "author":`${document.getElementById("book_author").value}`,
            "category": `${document.getElementById("book_category").value}`,
            "publishDate": `${document.getElementById("book_date").value}`,
            "price": `€${document.getElementById("price").value}`
        }) 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`POST request: ${data}`)
    })
    e.preventDefault()
})
                        
//deleteAllBtn
let deleteAllBtn = document.querySelector('.btndel')

deleteAllBtn.addEventListener('click',(e)=>{
    const bookDatas = Array.from(document.querySelectorAll('tr'))
    bookDatas.shift()
    fetch ('http://localhost:5000/books')
    .then(response=>response.json())
    .then(books=>{
        for (let i=0; bookDatas.length>i; i++){
            const book_id = Number(bookDatas[i].children[0].innerText)
            fetch(`http://localhost:5000/books/${book_id}`,{method:'DELETE' 
        })}
    })
})


//deletebutton
const TableRecords = document.querySelector('tbody')

TableRecords.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash')){
        fetch(`http://localhost:5000/books/${e.target.parentElement.parentElement.parentElement.children[0].innerText}`,{
        method:'DELETE' 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`Delete: ${data}`)
    })
    e.preventDefault()
    }
})