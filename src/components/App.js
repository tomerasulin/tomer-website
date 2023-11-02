import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import About from './About';
import ScrollToTop from './ScrollToTop';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cloud from './Cloud';

function App() {
  return (
    <main className='main'>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route
            path='/tomer-website'
            element={
              <>
                <Cloud />
                <About />
                <Projects />
              </>
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
