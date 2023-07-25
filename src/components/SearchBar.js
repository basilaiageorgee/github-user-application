import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUserStore from "../store/userStore";
import useThemeStore from "../store/themeStore";
import axios from "axios";
import "./saerchBar.scss";

const SearchBar = () => {
  const { theme } = useThemeStore();
  const { setUser } = useUserStore();
  const [username, setUsername] = useState();
  const [userData, setUserData] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  function fetchUser(e) {
    e.preventDefault();

    axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => setUser(res.data))
      .catch((error) => setErrorMessage(error));
  }

  const handleChange = (e) => setUsername(e.target.value);

  return (
    <form className={`searchbar searchbar-${theme}`} onSubmit={fetchUser}>
      <i className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-xl" />
      </i>
      <input
        placeholder="Search GitHub Username..."
        maxLength={39}
        onChange={handleChange}
        value={username}
      />

      {errorMessage ? <p className="results">No Results</p> : null}

      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
