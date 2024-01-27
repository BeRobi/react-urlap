import logo from "./logo.svg";
import "./App.css";
import Urlap from "./component/Urlap";
import DataService from "./model/DataService";
import { useEffect } from "react";


const DS = new DataService()

function App() {


function kuld(urlapAdat){

    console.log(urlapAdat) 
    // itt küldöm az adatokat az adatbázisba
    // DS.postAxiosData(vegpont, urlapAdat) <--- aszinkron hívásnál így nem használható -- useEffect hook-ot kell használni

useEffect(() => {
  DS.postAxiosData(vegpont, urlapAdat)
}, []);


}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Űrlap</h1>
      </header>
      <article>
        <Urlap kuld= {kuld}/>
      </article>
    </div>
  );
}

export default App;
