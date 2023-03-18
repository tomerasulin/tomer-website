import logo from '../images/Logo.svg';
import github from '../images/githubIcon.svg';
import linkedin from '../images/LinkedIn.svg';
import downloadCV from '../images/cvdownload.svg';
import tomerCV from '../images/TomerAsulinCV.pdf';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__about'>
        <img className='logo logo__footer' src={logo} alt='Logo TA' />
        <p className='footer__text'>
          {' '}
          © {new Date().getFullYear()} Tomer Asulin
        </p>
      </div>
      <nav className='footer__groups'>
        <ul className='footer__link-group'>
          <li className='footer__link'>
            <a
              className='footer__link'
              href={tomerCV}
              target='_blank'
              rel='noreferrer'
              download
            >
              <img className='footer__logo' src={downloadCV} alt='CV logo' />
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='footer__link'
              href='https://github.com/tomerasulin'
              target='_blank'
              rel='noreferrer'
            >
              <img className='footer__logo' src={github} alt='GitHub Logo' />
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='footer__link'
              href='https://www.linkedin.com/in/tomerasulin/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='footer__logo'
                src={linkedin}
                alt='LinkedIn Logo'
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
