import CoverImage from '../images/cover-image.jpeg';
import ProfileImage from '../images/profile-image.png';
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>

      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">

            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}>

              <h1 className="title-text">鵜川大輔</h1>
              <h3 className="title-text">大学生</h3>
              <ul className="social-icons">
                <li className="icon-link">
                  {/*TODO*/}
                </li>
                <li className="icon-link">
                  <a href="https://github.com/DaisukeYou">
                    <FaGithub color="white" size="2rem" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
