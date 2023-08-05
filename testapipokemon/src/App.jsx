import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import FavPoke from "./FavPoke";
function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();
    setLoading(true);
    const loadPoke = async () => {
      try {
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${number}`,
          {
            signal: abortController.signal,
          }
        );

        setPoke(response.data);
        setError("");
      } catch (error) {
        setError("Something went wrong ", error);
      } finally {
        setLoading(false);
      }
    };
    loadPoke();
    console.log(poke);
  }, [number]);
  console.log(poke);

  const prevPoke = () => {
    setNumber((number) => number - 1);
  };
  const nextPoke = () => {
    setNumber((number) => number + 1);
  };

  console.log("NumberIDPoke:", number);

  const addFav = () => {
    setFav((oldState) => [...oldState, poke]);
  };
  console.log("Fovourate", fav);
  return (

    <div className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow
     dark:bg-gray-800 dark:border-gray-700">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

      <div className="max-w-sm p-6 bg-white border
       border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
      {
        loading ? <>
        <div className="box-of-star1">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star2">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star3">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star4">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div data-js="astro" className="astronaut">
    <div className="head"></div>
    <div className="arm arm-left"></div>
    <div className="arm arm-right"></div>
    <div className="body">
      <div className="panel"></div>
    </div>
    <div className="leg leg-left"></div>
    <div className="leg leg-right"></div>
    <div className="schoolbag"></div>
  </div>
        
        </>: 
        <>
            <h1>Pokemon</h1>
          <button onClick={addFav}>Add to favourite</button>
          <h2>{poke.name}</h2>

          <img
            src={poke?.sprites?.other?.home?.front_default}
            alt={poke?.name}
          />
          <ul>
            {poke.abilities?.map((abilities, index) => {
              return <li key={index}>{abilities?.ability.name}</li>;
            })}
          </ul>
          <button onClick={prevPoke}>Previous</button>
          <button onClick={nextPoke}>Next</button>
        </>
      }
        </div>
      </div>

      {/* top litf button right */}
      <div>
      <h2> Your favourate Pokemon</h2>
        <FavPoke fav={fav} />
      </div>
    </div>
    </div>
  );
}

export default App;
