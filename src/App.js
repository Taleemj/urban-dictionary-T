import { useState } from "react";
import axios from 'axios'
import Header from "./components/Header";
import Results from "./components/Results";
import styles from "./Styles.module.scss";
import Loader from "./components/Loader";

function App() {
  const [Data, setData] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [searchTerm, setsearchTerm ] = useState('')

  const getData = async (Term) => {
    setisLoading(true)
  const data = await axios.get(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${Term}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "3ad125af40msha3fe0c6e8a0b18ep15f567jsn1747f4551c09",
          "    X-RapidAPI-Host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
        },
      }
    )
    setData(data?.data?.list)
    setisLoading(false)
    console.log(data)
  }
  return (
    <>
      <div className={styles.App}>
        <Header
          fetchdata={getData}
          searchTerm={searchTerm}
          setsearchTerm={setsearchTerm}
        />
        <center>
        <h3>Look up a word</h3>
        </center>
        {/* {isLoading ? (
          <Loader />
        ) : (
          <Results searchTerm={searchTerm} resultsData={Data} />
        )} */}

        {isLoading ? (
          <Loader />
        ) : Data.length === 0 ? (
          <p className={styles.error}>Couldnt find a definition for {searchTerm}</p>
        ) : (
          <Results searchTerm={searchTerm} resultsData={Data} />
        )}
      </div>

      <div className={styles.footer}>
        <h4>Made By Taleem</h4>
      </div>
    </>
  );
}

export default App;
