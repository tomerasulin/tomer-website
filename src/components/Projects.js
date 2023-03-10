import newsapi from '../images/newsapi.png';
import photoSharing from '../images/photoSharingWebApp.png';
import outsidePage from '../images/outsidePage.svg';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__title'>My Projects</h2>
      <ul className='projects__cards'>
        <li className='card'>
          <h3 className='card__title'>News API service</h3>
          {/* Video of the project*/}
          <img
            className='card__image'
            src={newsapi}
            alt='Screenshot of the NewsAPI webpage'
          />
          <div className='card__info'>
            <p className='card__description'>
              A service where users can search for news articles and save them
              to their profiles
            </p>
            <a
              href='https://news-explorer-api.students.nomoredomainssbs.ru/'
              className='card__website'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='card__website-image'
                src={outsidePage}
                alt='redirect img to the desired webpage'
              />
            </a>
          </div>
        </li>
        <li className='card'>
          <h3 className='card__title'>Photo Sharing Web App</h3>
          {/* Video of the project*/}
          <img
            className='card__image'
            src={photoSharing}
            alt='Screenshot of the sharing web app'
          />
          <div className='card__info'>
            <p className='card__description'>
              A wep page where users can share their photos among other users,
              add-like-delete photos.
            </p>
            <a
              href='https://react-around-tomer.students.nomoreparties.sbs'
              className='card__website'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='card__website-image'
                src={outsidePage}
                alt='redirect img to the desired webpage'
              />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
