// element generator
const g = t=> document.createElement(t);

const randomImage= g('img')
randomImage.src = 'https://picsum.photos/200'
randomImage.className="img-fluid"
randomImage.setAttribute("alt", "Random Image")

const container = g('div')
container.className='container';
const row = g('div')
row.className= "row justify-content-center align-items-center text-light"
//collumn 1
const col1 = g('div')
const col1Text = document.createTextNode('col 1')
col1.appendChild(col1Text)
col1.className = "col-md-4 bg-primary p-5"
//collumn 2
const col2 = g('div')
col2.appendChild(randomImage)
col2.className = "col-md-4 bg-warning p-5"
//collumn 3
const col3 = g('div')
const col3Text = document.createTextNode('col 3')
col3.appendChild(col3Text)
col3.className = "col-md-4 bg-danger p-5"

row.append(col1)
row.append(col2)
row.append(col3)
container.append(row) //we make all 3 collumns children of row, and make row a child of container
document.body.append(container)
