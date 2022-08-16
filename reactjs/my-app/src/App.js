import ChildComponent from "./childcomponent";
import useState from "react"

function App() {
  //const {number.setNumber} = useState();
  function handleClick() {
    number++;
    console.log(`you clicked the button ${number} times!!!`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ChildComponent />
      </header>

      <button onclick={handleClick}>DON'T CLICK ME</button>
    </div>
  );
}

export default App;
