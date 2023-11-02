import avatar from '../images/tomer.jpg';

const About = () => {
  return (
    <section className='about'>
      <img className='about__avatar' src={avatar} alt='Pic of Tomer' />
      <div className='about__description'>
        <h2 className='about__title'>Tomer Asulin</h2>
        <p className='about__paragraph'>
          Hey There, I'm Tomer and I'm a Software developer.
        </p>
        <p className='about__paragraph'>
          I'm Passionate software developer, with a can-do approach. I am a
          quick learner, team player and creative problem solver.
        </p>
        <p className='about__paragraph'>
          My hobbies: Yoga, Meditation, books, sports and travelling
        </p>
      </div>
    </section>
  );
};

export default About;
