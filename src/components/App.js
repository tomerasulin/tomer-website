import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import About from './About';
import ScrollToTop from './ScrollToTop';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Project from './Project';
import poolgame1 from '../images/poolgame1.png';
import poolgame2 from '../images/poolgame2.png';
import poolgame3 from '../images/poolgame3.png';
import poolgame4 from '../images/poolgame4.png';
import newsapi1 from '../images/newsapi1.png';
import newsapi2 from '../images/newsapi2.png';
import newsapi4 from '../images/newsapi4.png';
import newsapi9 from '../images/newsapi9.png';
import aroundtheworld1 from '../images/aroundtheworld1.png';
import aroundtheworld2 from '../images/aroundtheworld2.png';
import aroundtheworld3 from '../images/aroundtheworld3.png';
import aroundtheworld4 from '../images/aroundtheworld4.png';
import succulent1 from '../images/SucculentShop.png';
import succulent2 from '../images/SucculentShop1.png';
import succulent3 from '../images/SucculentShop2.png';

function App() {
  const navigate = useNavigate();

  function onBack() {
    navigate('/tomer-website');
  }
  return (
    <main className='main'>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route
            path='/tomer-website'
            element={
              <>
                <About />
                <Projects />
              </>
            }
          />
          <Route
            path='succulentShop'
            element={
              <Project
                projectName={'Succulent Shop'}
                projectLink={'https://succulent-shop.vercel.app/'}
                projectText={'To the Website'}
                projectClass={'project__image_newsapi'}
                onBack={onBack}
                img1={succulent1}
                img2={succulent2}
                img3={succulent3}
                text1={
                  'This is a sample application that demonstrate an Ecommerce website that sell succulents.'
                }
                text4={
                  'Once a user press the Shop Succulent button, he reaches the succulents catalog.'
                }
                text5={
                  'Users can click on any succulent to get more information including pricing and description.'
                }
              />
            }
          />
          <Route
            path='poolGame'
            element={
              <Project
                projectName={'Pool Game'}
                projectLink={'https://tomerasulin.github.io/pool-game/'}
                projectText={'Play'}
                projectClass={'project__image'}
                onBack={onBack}
                img1={poolgame1}
                img2={poolgame2}
                img3={poolgame3}
                img4={poolgame4}
                text1={
                  '8-ball is a call shot game played with a cue ball and 15 object balls.'
                }
                text2={
                  'One player must pocket balls of the group - red balls, while the other player has the yellow balls.'
                }
                text3={`The player pocketing his group first and then the 8-ball (black ball) and he has more points WINS THE GAME.`}
                text4={
                  'Once a player pockets a ball red or yellow, the players continue in turns to pocket all their balls till reaching the black ball.'
                }
                text5={
                  'Once a player pocketed all his balls, he turns to pocket the black ball in order to end the game.'
                }
                text6={
                  'Once the player pocket the black ball - the game ends and the player with the higher score WINS THE GAME'
                }
              />
            }
          />
          <Route
            path='newsapi'
            element={
              <Project
                projectName={'News API'}
                projectLink={'https://newsexplorerta.com/'}
                projectText={'To the Website'}
                projectClass={'project__image_newsapi'}
                onBack={onBack}
                img1={newsapi1}
                img2={newsapi2}
                img3={newsapi4}
                img4={newsapi9}
                text1={
                  'A service where users can search for news articles and save them to their profiles.'
                }
                text4={
                  'When the user enters a keyword in the search bar, the website send a request to the News API service, find all the relevant articles over the last week, and display a list of cards for each of them.'
                }
                text5={
                  'A registration form where a new user can sign up in order to save his favoirte articles to his profile.'
                }
                text6={
                  'The page with saved news items where all the liked materials are displayed.'
                }
              />
            }
          />
          <Route
            path='aroundtheworld'
            element={
              <Project
                projectName={'Photo Sharing Web App'}
                projectLink={
                  'https://react-around-tomer.students.nomoreparties.sbs'
                }
                projectText={'To the Website'}
                projectClass={'project__image'}
                onBack={onBack}
                img1={aroundtheworld1}
                img2={aroundtheworld2}
                img3={aroundtheworld3}
                img4={aroundtheworld4}
                text1={
                  'A weppage where users can share their photos among other users, adding, like-dislike and deleting the photos.'
                }
                text4={
                  'Once the user sign into his account, he can see all other users photos, like/dislike them.'
                }
                text5={'A user can edit his profile - name and profession.'}
                text6={
                  'A user can add a new place to share among other users to be seen.'
                }
              />
            }
          />
          <Route path='*' element={<Navigate to='/tomer-website' />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </main>
  );
}

export default App;
