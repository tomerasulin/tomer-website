import logo from '../images/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo logo__header' src={logo} alt='Logo TA' />
      <div className='header__description'>
        <h1 className='header__title'>Tomer Asulin</h1>
        <p className='header__about'>Web Developer</p>
      </div>
      <div className='header__contact'></div>
    </header>
  );
};

export default Header;
