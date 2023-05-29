/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect  } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";

import themeList from '../../data/themeList';

import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ThemeSwitcher from "../ThemeSwitcher";




const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  
  const [theme, setTheme] = useState(themeList.light);

  //dark

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.substring(0,user.email.indexOf('@'));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        
        } else {
          setdisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [ ]);


  const dispatch = useDispatch();
 

  const navigate = useNavigate();

  
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

 

  const cart = (
    <span 
      className= {styles.cart}

    >
      <Link to="/cart">
       
        <FaShoppingCart size={20} />
     
      </Link>
    </span>
  );

  const logo = (
    <div className={styles.logo}
    
    >
      <Link to="/">
        <h2  >
          <span style={{
      color:
        theme === themeList.light ? "var(--ligtLogo)" : "var( --color-white)",
    }} >Shop</span>
        </h2>
      </Link>
    </div>
  );

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully.");
      navigate("/");
    })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
  <header style={{
    backgroundColor:
    theme === themeList.light ? "var(--light-green)" : "var(--dark-green)",
  }} >
    
        <div
          className={styles.header}
          
          
          
        >
          {logo}

          <nav
            
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }

            
           

          
          >
            <div
              
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]} >
                {logo }
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>
              <li>
                
              <ThemeSwitcher theme={theme} setTheme={setTheme} />
              
              </li>
              <li>
                <NavLink to="/" className={activeLink} >
                  Home
                 
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={activeLink} >
               Shop
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>


              
                  <NavLink to="/login" className={activeLink}>
                    Login
                  </NavLink>
            
               
                  <a href="#home" style={{ color: "#ff7723" }}>
                    <FaUserCircle size={16} />
                    Hi,{displayName}
                  </a>
              
              
        
                  <NavLink to="/" onClick={logoutUser} >
                    Logout
                  </NavLink>
              
              </span>
              {cart}
            </div>
          </nav>
         
          <div className={styles["menu-icon"] }
            
          >
            
            {cart}

            
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
           
          </div>
       
        </div>
    
        </header>
    </>
  );
};

export default Header;
