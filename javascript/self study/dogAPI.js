//Practice hungarian notation:
// write in lowerCamelCase, with the lower letter indicating the type of variable it's supposed to be (oMember for an object called member, sName for a string, bPassed for a boolean etc)

// For comment blocks use a //* and // /* at the end, as removing the first slash will toggle the visibility of the entire block

async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data= await response.json();
    createBreedList(data.message);
}

start();

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option> Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
    //the entire block above makes it so we fetch all the different breeds from the dog API, and for every breed we create a new object that also injects a new option into the select portion of HTML. Because of that we can also use the this keyword to extract the value for our loadByBreed function
}

async function loadByBreed(breed) {
    if (breed!="Choose a dog breed") {
       const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
       const data = await response.json()
       console.log(data);
    }
}