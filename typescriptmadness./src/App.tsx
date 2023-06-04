import "./App.css";
import { Person } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
        country="Brazil"
      />
    </div>
  );
}

export default App;
