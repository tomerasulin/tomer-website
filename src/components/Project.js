const Project = ({
  projectName,
  projectLink,
  projectText,
  projectClass,
  onBack,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
}) => {
  return (
    <main className='project'>
      <div className='project__intro'>
        <h1 className='project__title'>{projectName}</h1>
        <button
          className='project__back-btn'
          type='button'
          onClick={onBack}
        ></button>
      </div>
      <h2 className='project__subtitle'>
        <a
          href={projectLink}
          className='project__text'
          target='_blank'
          rel='noreferrer'
        >
          {projectText}
        </a>
      </h2>
      {text1 === undefined ? '' : <p className='project__subtext'>{text1}</p>}
      {text2 === undefined ? '' : <p className='project__subtext'>{text2}</p>}
      {text3 === undefined ? '' : <p className='project__subtext'>{text3}</p>}
      <img className={projectClass} src={img1} alt={projectName + ' photo'} />
      <p className='project__subtext'>{text4}</p>
      <img className={projectClass} src={img2} alt={projectName + ' photo'} />
      <p className='project__subtext'>{text5}</p>
      <img className={projectClass} src={img3} alt={projectName + ' photo'} />
      <p className='project__subtext'>{text6}</p>
      {img4 === undefined ? (
        ''
      ) : (
        <img className={projectClass} src={img4} alt={projectName + ' photo'} />
      )}
      {text7 === undefined ? '' : <p className='project__subtext'>{text7}</p>}
      {img5 === undefined ? (
        ''
      ) : (
        <img className={projectClass} src={img5} alt={projectName + ' photo'} />
      )}
      {text8 === undefined ? '' : <p className='project__subtext'>{text8}</p>}

      {img6 === undefined ? (
        ''
      ) : (
        <img className={projectClass} src={img6} alt={projectName + ' photo'} />
      )}
      {text9 === undefined ? '' : <p className='project__subtext'>{text9}</p>}

      {img7 === undefined ? (
        ''
      ) : (
        <img className={projectClass} src={img7} alt={projectName + ' photo'} />
      )}
      {text10 === undefined ? '' : <p className='project__subtext'>{text10}</p>}

      {img8 === undefined ? (
        ''
      ) : (
        <img className={projectClass} src={img8} alt={projectName + ' photo'} />
      )}
    </main>
  );
};

export default Project;
