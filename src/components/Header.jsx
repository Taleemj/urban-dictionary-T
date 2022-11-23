import { useRef, useEffect } from 'react'
import logo from './logo.png'
import styles from '../Styles.module.scss'
import searchicon from './search.png'

const Header = ({ fetchdata, setsearchTerm, searchTerm }) => {
  const searchRef = useRef(null);

  const handleSearch = () => {
    setsearchTerm(searchRef.current.value);
  };


  useEffect(() => {
      fetchdata(searchTerm);
  }, [searchTerm])
  

  return (
    <div>
      <div className={styles.logocontainer}>
        <div className={styles.logoimg}>
          <a href="index.html">
            <img src={logo} alt="" srcSet="" />
          </a>
        </div>
        <div className={styles.logotext}>
          <h1>URBAN DICTIONARY</h1>
        </div>
      </div>

      <div className={styles.searchcontainer}>
        <input
          type="text"
          id="searchTerm"
          ref={searchRef}
          name="text"
          placeholder="Search a word"
        />
        <div id="button" onClick={handleSearch} className={styles.searchicon}>
          <img src={searchicon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header