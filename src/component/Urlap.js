import { useState } from "react";

export default function Urlap(props) {
  const [obj, setObj] = useState({ nev: "", szul: 2022 });

  function kuld(event) {
    event.preventDefault();
    //a submit gomb alól az alapértelmezett függvényt leveszi
    console.log(obj);
    props.kuld(obj);
  }

  function adatValt(event) {
    //console.log(event.target);
    //console.log(event.target.value);
    //console.log(event.target.id);

    const masolat = { ...obj };
    //setObj({...obj})
    masolat[event.target.id] = event.target.value;
    setObj(masolat);
  }

  return (
    <>
      <h2>Új adat rögzítése</h2>
      <form onSubmit={kuld}>
        <div>
          <label htmlFor="nev">Név:</label>
          <input
            onChange={adatValt}
            type="text"
            name="nev"
            id="nev"
            value={obj.nev}
            placeholder="Vezetéknév Keresztnév"
          />
        </div>
        <div>
          <label htmlFor="szul">Születési év:</label>
          <input
            onChange={adatValt}
            type="number"
            name="szul"
            id="szul"
            value={obj.szul}
            min="2000"
            max="2024"
          />
        </div>

        <input type="submit" id="submit" value="OK" />
      </form>
    </>
  );
}
