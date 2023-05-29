import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import HomeImage from '../images/imContainer.png';
import Category from '../Components/category/Category';


const Home = () => {
  return (<>
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <h2> 30- 90% OFF</h2>
        <p className={styles.pContainer}>EVERYTHING</p>
        <button className={styles.buttonHome}><Link to='/shop' > Shop Now</Link></button>
      </div>

      {/* Right sida */}
      <div>
        <img src={HomeImage} alt='HomeImage' className={styles.imgContainer} />
      </div>
    </div>
    <Category />
    
    </>
  );
};

export default Home;
