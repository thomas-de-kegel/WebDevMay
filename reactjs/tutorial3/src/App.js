import React from "react";

function App({users, posts}) { //We zetten hier ook users en posts zodat we ze in de pagina kunnen gebruiken
  return (
    <div>
        {
            console.log(users,posts) //nu zal de pagina beide arrays tonen in de console
        }
      <h3>Home</h3>
    </div>
  );
}

export default App;
