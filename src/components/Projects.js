import newsapi from '../images/newsexplorer.png';
import photoSharing from '../images/aroundtheus.png';
import poolGame from '../images/poolGame.png';
import succulentShop from '../images/SucculentShop.png';
import reactlogo from '../images/react.svg';
import nodejslogo from '../images/nodejs.svg';
import nextjslogo from '../images/nextjs.svg';
import mongodblogo from '../images/mongodb.svg';
import javascriptlogo from '../images/javascript.svg';
import htmllogo from '../images/html5.svg';
import csslogo from '../images/css3.svg';
import shoppingcartcover from '../images/shoppincartcover.png';
import typescript from '../images/typescript.svg';
import materialui from '../images/materialui.svg';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__title'>My Projects</h2>
      <ul className='projects__cards'>
        <li className='card'>
          <h3 className='card__title'>Shopping Cart</h3>
          <a
            href='https://tomerasulin.github.io/shopping-cart/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='card__image'
              src={shoppingcartcover}
              alt='Screenshot of the shopping cart'
            />
          </a>
          <div className='card__logos'>
            <img
              className='card__logo'
              src={typescript}
              alt='typescript logo'
            />
            <img className='card__logo' src={csslogo} alt='css logo' />
            <img
              className='card__logo'
              src={materialui}
              alt='material-ui logo'
            />
            <img className='card__logo' src={htmllogo} alt='html logo' />
          </div>
          <div className='card__info'>
            <p className='card__description'>
              E-commerce store that each user have is own shopping cart that he
              can add/remove products to/from the cart.
            </p>
          </div>
        </li>
        <li className='card'>
          <h3 className='card__title'>Succulent Shop</h3>
          <a
            href='https://succulent-shop.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='card__image'
              src={succulentShop}
              alt='Screenshot of Succulent Shop'
            />
          </a>
          <div className='card__logos'>
            <img className='card__logo' src={nextjslogo} alt='nextjs logo' />
            <img className='card__logo' src={csslogo} alt='css logo' />
            <img className='card__logo' src={htmllogo} alt='html logo' />
            <img
              className='card__logo'
              src={javascriptlogo}
              alt='javascript logo'
            />
          </div>
          <div className='card__info'>
            <p className='card__description'>
              A sample app that demonstrate an Ecommerce website to shop
              Succulents
            </p>
          </div>
        </li>
        <li className='card'>
          <h3 className='card__title'>Pool Game</h3>
          <a
            href='https://tomerasulin.github.io/pool-game/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='card__image'
              src={poolGame}
              alt='Screenshot of Pool Game'
            />
          </a>
          <div className='card__logos'>
            <img className='card__logo' src={csslogo} alt='css logo' />
            <img className='card__logo' src={htmllogo} alt='html logo' />
            <img
              className='card__logo'
              src={javascriptlogo}
              alt='javascript logo'
            />
          </div>
          <div className='card__info'>
            <p className='card__description'>
              A classic 8-ball pool game where you can play against a friend
            </p>
          </div>
        </li>
        <li className='card'>
          <h3 className='card__title'>News API service</h3>
          <a
            href='https://newsexplorerta.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='card__image'
              src={newsapi}
              alt='Screenshot of the NewsAPI webpage'
            />
          </a>
          <div className='card__logos'>
            <img className='card__logo' src={reactlogo} alt='react logo' />
            <img className='card__logo' src={csslogo} alt='css logo' />
            <img className='card__logo' src={nodejslogo} alt='nodejs logo' />
            <img className='card__logo' src={htmllogo} alt='html logo' />
            <img
              className='card__logo'
              src={javascriptlogo}
              alt='javascript logo'
            />
            <img className='card__logo' src={mongodblogo} alt='mongodb logo' />
          </div>
          <div className='card__info'>
            <p className='card__description'>
              A service where users can search for news articles and save them
              to their profiles
            </p>
          </div>
        </li>
        <li className='card'>
          <h3 className='card__title'>Photo Sharing Web App</h3>
          <a
            href='https://acrosstheworld.net/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='card__image'
              src={photoSharing}
              alt='Screenshot of the sharing web app'
            />
          </a>
          <div className='card__logos'>
            <img className='card__logo' src={reactlogo} alt='react logo' />
            <img className='card__logo' src={csslogo} alt='css logo' />
            <img className='card__logo' src={nodejslogo} alt='nodejs logo' />
            <img className='card__logo' src={htmllogo} alt='html logo' />
            <img
              className='card__logo'
              src={javascriptlogo}
              alt='javascript logo'
            />
            <img className='card__logo' src={mongodblogo} alt='mongodb logo' />
          </div>
          <div className='card__info'>
            <p className='card__description'>
              A wep page where users can share their photos among other users,
              add-like-delete photos.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
