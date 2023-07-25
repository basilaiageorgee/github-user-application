import ThemeSwitcher from "./ThemeSwitcher";
import useThemeStore from "../store/themeStore";
import SearchBar from "./SearchBar";
import "./header.scss";

const Header = () => {
  const { theme } = useThemeStore();

  return (
    <div>
      <div className={`header-${theme} header`}>
        <h1>devfinder</h1>

        <ThemeSwitcher />
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
