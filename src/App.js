
import React from "react"
import './App.css';
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { original ,action,horror,romance,comedy} from "./Components/urls";

function App() {
  
  

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={original} title="Netflix Original"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>

    </div>
  );
}

export default App;
