import './style.css'

const Header = () => {
    return ( 
        <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hi, my name is <em>Elena</em></strong><br></br>
                  a frontend developer
              </h1>
              <div className="header__text">
                  <p>with passion for learning and creating.</p>
              </div>
              <a href="https://www.linkedin.com/in/kostrikinaelena/overlay/1777389162446/single-media-viewer/?profileId=ACoAADBDaKEBXz6-EAg_pFYXU4qnvPRyujKe1rk" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
        </header>
     );
}
 
export default Header;