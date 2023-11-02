import logo from '../images/Logo.svg';
import github from '../images/githubIcon.svg';
import linkedin from '../images/LinkedIn.svg';
import downloadCV from '../images/cvdownload.svg';
import tomerCV from '../images/TomerAsulinCV.pdf';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo logo__header' src={logo} alt='Logo TA' />
      <div className='header__description'>
        <h1 className='header__title'>Tomer Asulin</h1>
        <p className='header__about'>Software Developer</p>
      </div>

      <nav className='header__groups'>
        <ul className='header__link-group'>
          <li className='header__link'>
            <a
              className='header__link'
              href={tomerCV}
              target='_blank'
              rel='noreferrer'
              download
            >
              <img className='header__logo' src={downloadCV} alt='CV logo' />
            </a>
          </li>
          <li className='header__link'>
            <a
              className='header__link'
              href='https://github.com/tomerasulin'
              target='_blank'
              rel='noreferrer'
            >
              <img className='header__logo' src={github} alt='GitHub Logo' />
            </a>
          </li>
          <li className='header__link'>
            <a
              className='header__link'
              href='https://www.linkedin.com/in/tomerasulin/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='header__logo'
                src={linkedin}
                alt='LinkedIn Logo'
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
