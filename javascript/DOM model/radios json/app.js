const radioList = document.querySelector(".radioList");

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/radios")
    .then((response) => response.json())

    .then((radios) => {
      radios.map((radio, index) => {
        console.log(radio);

        radioList.innerHTML += `<li class="text-start list-group-item bg-black radio text-light" radio-id="${radio.id}">

            <img src="${radio.logo}" class="w-25 mx-2">

            ${radio.name}

            </li>`;
      });
    });
});

function PlayAudio(obj) {
  console.log(obj);

  document.querySelector("audio").src = obj.url;
}

async function getRadioById(id) {
  let res = await fetch(`http://localhost:5000/radios/${id}`);

  let radio = await res.json();

  return radio;
}

radioList.addEventListener("click", (e) => {
  //we targetten de parent class (radioList, de ul) en niet de li, want die zijn nog niet gerenderd in html als static maar worden pas daarna ingeladen in JS

  console.log("clicked", e.target);

  if (e.target.classList.contains("radio")) {
    console.log("radiooooo", e.target);

    const RadioID = e.target.getAttribute("radio-id");

    console.log(RadioID);

    getRadioById(RadioID).then((radio) => {
      PlayAudio(radio);
    });
  }

  e.preventDefault();
});
