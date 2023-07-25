import useUserStore from "../store/userStore";
import useThemeStore from "../store/themeStore";
import "./infographics.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLink,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Infographics = () => {
  const { theme } = useThemeStore();
  const { user } = useUserStore();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateAccountCreated = user.created_at.split("-");
  const yearCreated = dateAccountCreated[0];
  const monthCreated = month[dateAccountCreated[1].slice(1, 2)];
  const dayCreated = dateAccountCreated[2].slice(0, 2);

  return (
    <div className={`infographics-parent infographics-parent-${theme}`}>
      <div className={`container-info1`}>
        <img src={user.avatar_url} />

        <div className={`div-name div-name-${theme}`}>
          <div>
            <h1>{user.name}</h1>

            <a href={user.html_url} target="_blank">
              @{user.login}
            </a>
          </div>
          <div>
            <p className={`created`}>
              Joined {dayCreated} {monthCreated} {yearCreated}
            </p>
          </div>
        </div>
      </div>

      <div className={`bio bio-${theme}`}>
        <p>{user.bio === null ? "This profile has no bio" : user.bio}</p>

        <div className={`github-data github-data-${theme}`}>
          <div className="repos">
            <p>Repos</p>
            <h3>{user.public_repos}</h3>
          </div>
          <div className="followers">
            <p>Followers</p>
            <h3>{user.followers}</h3>
          </div>
          <div className="following">
            <p>Following</p>
            <h3>{user.following}</h3>
          </div>
        </div>

        <div className="other-data">
          <div>
            <div className="data-child">
              <i>
                <FontAwesomeIcon icon={faLocationDot} className="fa-xl" />
              </i>
              <p>{user.location ? user.location : "Not Available"}</p>
            </div>
            <div className="data-child">
              <i>
                <FontAwesomeIcon icon={faLink} className="fa-xl" />
              </i>
              <p>
                {user.blog ? (
                  <a href={user.blog}>{user.blog}</a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
          </div>

          <div>
            <div className="data-child">
              <i>
                <FontAwesomeIcon icon={faTwitter} className="fa-xl" />
              </i>
              <p>
                {user.twitter_username
                  ? user.twitter_username
                  : "Not Available"}
              </p>
            </div>
            <div className="data-child">
              <i>
                <FontAwesomeIcon icon={faBuilding} className="fa-xl" />
              </i>
              <p>{user.company ? `@${user.company}` : "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographics;
