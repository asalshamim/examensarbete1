import styles from "./Footer.module.scss";
import { useState, useEffect } from "react";
import themeList from '../../data/themeList';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  const [theme] = useState(themeList.light);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div
        className={styles.footer}
        style={{
          color:
            theme === themeList.light ? "var(--light-green)" : "var(--dark-green)",
        }}
      >
        &copy; {year} All Rights Reserved
      </div>
    </>
  );
};

export default Footer;

