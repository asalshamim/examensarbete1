
import { BiSun, BiMoon } from 'react-icons/bi';

import themeList from '../data/themeList';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === themeList.light ? themeList.dark : themeList.light);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
