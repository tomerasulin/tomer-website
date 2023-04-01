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
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
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
      <p className='project__subtext'>{text1}</p>
      <p className='project__subtext'>{text2}</p>
      <p className='project__subtext'>{text3}</p>
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
    </main>
  );
};

export default Project;
