import useThemeStore from "../store/themeStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./themeSwitcher.scss";
const ThemeSwitcher = () => {
  const { theme, changeTheme } = useThemeStore();
  return (
    <div className={`theme-${theme} container`}>
      <div className="switcher-box" onClick={changeTheme}>
        <h4>{theme}</h4>

        <div className="icons-div">
          <i>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={theme === "LIGHT" ? faMoon : faSun}
            />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
