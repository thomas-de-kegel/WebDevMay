//fetches the text file and then dumps the data into the console log
fetch("dontreadme.txt")
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
  });
