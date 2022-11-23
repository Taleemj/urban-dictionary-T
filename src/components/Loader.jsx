import { MagnifyingGlass } from "react-loader-spinner";
import styles from '../Styles.module.scss'
const Loader = () => {
  return (
    <div className={styles.loader}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#fff"
        color="#2e2eff"
      />
    </div>
  );
}

export default Loader