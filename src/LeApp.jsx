import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function LeApp() {
  const [openMenu, setOpenMenu] = useState(false)
  const [showWork, setShowWork] = useState(1)
  // const [showMore, setShowMore] = useState(false)
  
  
  useEffect(() => {
    console.log("Menu state changed:", openMenu);
  }, [openMenu]);
  return (
    <div className='scroll-smooth'>
      <nav className="navbar">
        <div className="logo">
          {/* <p>EO</p> */}
          <a href="#presentation">
            <img src="/img/EO.png" alt="logo" />
          </a>
        </div>
        <div className="divLinks">
          <div className="listLinks">
            <a className="link" href='#about'>
              <span className="linkNumber">01.</span> About
            </a>
            <a className="link" href='#experience'>
              <span className="linkNumber">02.</span> Experience
            </a>
            <a className="link" href='#projects'>
              <span className="linkNumber">03.</span> Work
            </a>
            <a className="link" href='#contact'>
              <span className="linkNumber">04.</span> Contact
            </a>
          </div>
          <div className="divResume">
            <a className="linkResume" href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
          </div>
        </div>
      </nav>
      <label className="hamburger">
        <input
          className="hamburgerInput"
          type="checkbox"
          checked={openMenu}
          onChange={() => setOpenMenu(!openMenu)}
        ></input>
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {openMenu && (
        <div className="blurryBack">
          <div className="divLinksBurger">
            <div className="listLinksBurger">
              <a className="linkBurger" href='#about' onClick={() => setOpenMenu(!openMenu)}>
                <span className="linkNumberBurger">01.</span> About
              </a>
              <a className="linkBurger" href='#experience' onClick={() => setOpenMenu(!openMenu)}>
                <span className="linkNumberBurger">02.</span> Experience
              </a>
              <a className="linkBurger" href='#projects' onClick={() => setOpenMenu(!openMenu)}>
                <span className="linkNumberBurger">03.</span> Work
              </a>
              <a className="linkBurger" href='#contact' onClick={() => setOpenMenu(!openMenu)}>
                <span className="linkNumberBurger">04.</span> Contact
              </a>
            </div>
            <div className="divResumeBurger">
              <a className="linkResumeBurger" href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
            </div>
          </div>
        </div>
      )}
      <div className="presentation" id='presentation'>
        <div className="divPhrase">
          <p className="presP">Hi, my name is</p>
          <h1 className="presTitle">Emrah Oztek.</h1>
          <h1 className="presPhrase">I bring ideas to life on the web.</h1>
        </div>
        <div className="divDescription">
          <p className="descP">
            I am a web developer, interested in user behaviour and having a keen
            eye for aesthetics, I like to craft intuitive and visually appealing
            interfaces. Currently, I’m a Frontend/UX-UI Developer at{" "}
            <a className="linkJob" href="https://www.tweetz.com/">
              Tweetz
            </a>
            .
          </p>
        </div>
        <div className="divResumePres">
          <a className="linkResumePres">Check out my resume!</a>
        </div>
      </div>
      <section className="about" id='about'>
        <div className="titleAbout">
          {/* <p className='aboutTitle'><span className='titleNumber'>01.</span> About Me</p> */}
          <p className="aboutTitle">About Me</p>
          <div className="titleLine"></div>
        </div>
        <div className="aboutContent">
          <div className="aboutText">
            <p className="aboutPara">
              Hello! My name is Emrah, and I’m passionate about crafting digital
              experiences that live on the internet. My journey into web
              development began just a year ago, and since then, I’ve been
              immersed in the world of coding, design, and user behavior. What
              started as a curiosity has quickly turned into a deep love for
              creating intuitive and visually appealing interfaces.
            </p>
            <p className="aboutPara">
              I’ve had the opportunity to grow my skills through hands-on
              experience. My first internship as a web developer at{" "}
              <a className="linkJob" href="https://demainselection.com/">
                a start-up
              </a>{" "}
              introduced me to the world of Shopify, where I learned to build and
              customize e-commerce solutions. Currently, I’m interning as a
              Front-end and UX/UI Developer at{" "}
              <a className="linkJob" href="https://www.tweetz.com/">
                Tweetz
              </a>
              , where I focus on designing and developing user-centric interfaces
              that are both functional and beautiful.
            </p>
            <p className="aboutPara">
              My goal is to be part of projects that have a meaningful impact on
              the world, whether that’s through solving real-world problems or
              enhancing the way people experience technology.
            </p>
            <p className="aboutPara">
              When I’m not coding, I might be watching the new Almodovar picture in
              a local cinema theater, or studying the patterns of play of
              Barcelona and Chelsea.
            </p>
            <div>
              <p className="aboutPara">
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Figma</li>
                <li>Shopify</li>
              </ul>
            </div>
          </div>
          <div className="aboutImg">
            <img src="/img/polaroid.png" alt="polaroid" />
            {/* <Avatar className='avatar' /> */}
          </div>
        </div>
      </section>
      <section className="experience" id='experience'>
        <div className="titleExp">
          {/* <p className='aboutTitle'><span className='titleNumber'>01.</span> About Me</p> */}
          <p className="aboutTitleExperience">Where I&apos;ve Worked</p>
          <div className="titleLine"></div>
        </div>
        <div className="inner">
          <div role="tablist" aria-label="Job tabs" className="jobs__StyledTabList-sc-59sdss-1 sAHTI">
            <div id="tab-0" role="tab" tabIndex="0" aria-selected="true" aria-controls="panel-0" className={showWork == 1 ? "dHdZWh" : "gHbkvF"} onClick={() => setShowWork(1)}>
              <span>Tweetz</span>
            </div>
            <div id="tab-1" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-1" className={showWork == 2 ? "dHdZWh" : "gHbkvF"} onClick={() => setShowWork(2)}>
              <span>Demain Sélection</span>
            </div>
            <div id="tab-2" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-2" className={showWork == 3 ? "dHdZWh" : "gHbkvF"} onClick={() => setShowWork(3)}>
              <span>MolenGeek</span>
            </div>
            <div id="tab-3" role="tab" tabIndex="-1" aria-selected="false" aria-controls="panel-3" className={showWork == 4 ? "dHdZWh" : "gHbkvF"} onClick={() => setShowWork(4)}>
              <span>CPAS de Jette</span>
            </div>
            <div className={showWork == 1 ? "fLsUSJ" : showWork == 2 ? "fLsUxN2" : showWork == 3 ? "fLsUxN3" : showWork == 4 ? "fLsUxN4" : showWork == 5 ? "fLsUxN5" : "fLsUSJ"}></div>
          </div>
          <div className="jobs__StyledTabPanels-sc-59sdss-4 jbGgbG">
            <div id="panel-0" role="tabpanel" tabIndex="0" aria-labelledby="tab-0" aria-hidden={showWork == 1 ? "false" : "true"} className={showWork == 1 ? "expShow" : "exp"}>
              <h3 className='expTitle'>
                <span>Frontend/UX-UI Developer</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href="https://www.tweetz.com/" className="inline-link" rel="noopener noreferrer">
                    Tweetz
                  </a>
                </span>
              </h3>
              <p className="expRange">December 2024 - Present</p>
              <div>
                <ul className='expUl'>
                  <li>
                    Designing various prototypes for new features with the use of Figma
                  </li>
                  <li>
                    Craft and design various features, like a smart link generator, for a social
                    media platform using mainly TypeScript and React as the frontend technologies
                  </li>
                  <li>
                    Optmize and simplify the code of the application and report bugs
                  </li>
                  <li>
                    Collaborate with designers, project managers, and other
                    engineers to transform creative concepts into production
                    realities for creators
                  </li>
                </ul>
              </div>
            </div>
            <div id="panel-1" role="tabpanel" tabIndex="-1" aria-labelledby="tab-1" aria-hidden={showWork == 2 ? "false" : "true"} className={showWork == 2 ? "expShow" : "exp"}>
              <h3 className='expTitle'>
                <span>Web Developer</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a
                    href="https://demainselection.com/"
                    className="inline-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demain Sélection
                  </a>
                </span>
              </h3>
              <p className="expRange">August - November 2024</p>
              <div>
                <ul className='expUl'>
                  <li className='expLi'>
                    Redesigned the landing page and product page of a Shopify e-shop resulting in the 
                    improvement of the conversion rate by 1%
                  </li>
                  <li className='expLi'>
                    Built a system allowing customers to use in-store currency for product purchases 
                    which resulted in a marginal increase in in-store profits
                  </li>
                  <li className='expLi'>
                    Automated tasks such as personalized email campaigns for customers
                  </li>
                  <li className='expLi'>
                    Created comprehensive documentation for the projects completed to enable the team 
                    to modify or customize projects post-departure
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="panel-2"
              role="tabpanel"
              tabIndex="-1"
              aria-labelledby="tab-2"
              aria-hidden={showWork == 3 ? "false" : "true"}
              className={showWork == 3 ? "expShow" : "exp"}
            >
              <h3 className='expTitle'>
                <span>Full-stack Web Developer Traineeship</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a
                    href="#"
                    className="inline-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    MolenGeek
                  </a>
                </span>
              </h3>
              <p className="expRange">October 2023 - June 2024</p>
              <div>
                <ul className='expUl'>
                  <li className='expLi'>
                    Craft and design a variety of web applications like e-commerce websites
                    and video games using HTML, CSS, JAVASCRIPT and 
                    Frontend technologies like React, Next.js, and Backend technologies like Python
                    and Django
                  </li>
                  <li className='expLi'>
                    Manipulating databases to use them for the development of web applications
                    with the help of MySql and DBeaver
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="panel-3"
              role="tabpanel"
              tabIndex="-1"
              aria-labelledby="tab-3"
              aria-hidden={showWork == 4 ? "false" : "true"}
              className={showWork == 4 ? "expShow" : "exp"}
            >
              <h3 className='expTitle'>
                <span>Polyvalent assistant administrator</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a
                    href="#"
                    className="inline-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CPAS de Jette
                  </a>
                </span>
              </h3>
              <p className="expRange">December 2020 - May 2023</p>
              <div>
                <ul className='expUl'>
                  <li className='expLi'>
                    Write documents, encode invoices, set up files and documents organisation,
                    archive files, translate written documents,
                    order and stock office supply
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2 className="numbered-heading">Some Things I’ve Built</h2>
        <ul className="featured__StyledProjectsGrid-ywnbqt-0 dnNJYD">
          <li className="featured__StyledProject-ywnbqt-1 gvznfB">
            <div className="project-content">
              <div className='contentAlign'>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    href="https://portofolio-646s.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                    >My first portfolio
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    For my first portfolio, I wanted to go big. Similar to how a young filmaker 
                    would use tracking shots, or how a football player would try to dribble past everyone,
                    I conceived my portfolio in the most pedantic way regarding web developement: Three.js.
                    The website lags, and it burns your PC so much you wished you were mining
                    bitcoins instead, but I still love it.
                    </p>
                </div>
                <ul className="project-tech-list">
                  <li>Three.js</li>
                  <li>React Vite</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://github.com/Kanzaki7/portofolio"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path></svg></a>
                    <a
                    href="https://portofolio-646s.vercel.app/"
                    aria-label="External Link"
                    className="external"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a
                href="https://portofolio-646s.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
              <div className='tinted-container'>
                <img src="/img/portfolio.png" alt="Mon premier portfolio"  />
              </div>
              </a>
            </div>
          </li>
          <li className="featured__StyledProject-ywnbqt-1 gvznfB">
            <div className="project-content">
              <div className='contentAlign2'>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    href="https://memorydelosmuertos.netlify.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Memoria de los muertos</a>
                </h3>
                <div className="project-description">
                  <p>
                  This is my first 'finished' game and my first real web developement project, 
                  a web-based memory card game that draws inspiration from Mexico's Día de 
                  los Muertos celebration and aesthetics.
                  </p>
                </div>
                <ul className="project-tech-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://github.com/Kanzaki7/Memory_emrah_oztek"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path></svg></a><a
                        href="https://memorydelosmuertos.netlify.app/"
                        aria-label="External Link"
                        className="external"
                        rel="noopener noreferrer"
                        target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a
                href="https://memorydelosmuertos.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
              <div className='tinted-container'>
                <img src="/img/memoria.png" alt="Memoria de los muertos"  />
              </div>
              </a>
            </div>
          </li>
          <li className="featured__StyledProject-ywnbqt-1 gvznfB">
            <div className="project-content">
              <div className='contentAlign'>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    href="https://one-crew.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                    >One Crew</a>
                </h3>
                <div className="project-description">
                  <p>
                    Having struggled with understanding how the Spotify OAuth flow
                    works, I made the course I wish I could have had.
                  </p>
                  <p>
                    Unlike tutorials that only cover a few concepts and leave you with
                    half-baked GitHub repositories, this course covers everything from
                    explaining the principles of REST APIs to implementing Spotify&apos;s
                    OAuth flow and fetching API data in a React app. By the end of the
                    course, you’ll have an app deployed to the internet you can add to
                    your portfolio.
                  </p>
                </div>
                <ul className="project-tech-list">
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>External API</li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://github.com/Kanzaki7/projet_next_emrah_oztek"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path></svg></a>
                    <a
                    href="https://one-crew.vercel.app/"
                    aria-label="External Link"
                    className="external"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a
                href="https://one-crew.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className='tinted-container'>
                  <img src="/img/pirates.png" alt="One Crew"  />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </section>
      <section className="projects__StyledProjectsSection-sc-1v1fime-0 iavbTH">
        <h2>Other Noteworthy Projects</h2>
        <a className="inline-link archive-link" href="/archive">
          view the archive
        </a>
        <ul className="projects-grid">
          <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                  <a
                      href="https://github.com/Kanzaki7/rock-paper-scissors"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="https://rock-paper-scissors-six-mu.vercel.app/"
                      aria-label="External Link"
                      className="external"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://rock-paper-scissors-six-mu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rock-Paper-Scisors
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    A video game app where you can play rock-paper-scissors against a incredibly
                    tenacious and clever AI.
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>React Vite</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/Kanzaki7/projet_redux_emrah_oztek"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="https://sweet-trolley.vercel.app"
                      aria-label="External Link"
                      className="external"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://sweet-trolley.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sweet Trolley
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    A e-shop app to buy your favorite collection items from the Harry Potter saga.
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>React Vite</li>
                  <li>Redux</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>JSON</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                  <a
                      href="https://github.com/Kanzaki7/Manga_API_emrah_oztek"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A manga/anime database app
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                  A database app using the API of MyAnimeList to research the best manga and anime.
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>React Vite</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>External API</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="project-title">
                  <p
                  >
                    CSV Data Converter
                  </p>
                </h3>
                <div className="project-description">
                  <p>
                  A python program with a GUI for Demain Sélection that converts the data from
                  csv files into csv files with specific required columns and formats.
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>Python</li>
                  <li>Pandas</li>
                  <li>Tkinter</li>
                  <li>Inno Setup</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/Kanzaki7/password_generator"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://github.com/Kanzaki7/password_generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Password Generator
                  </a>
                </h3>
                <div className="project-description">
                  <p>A password generator for better security for your accounts.</p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                  <a
                      href="https://github.com/Kanzaki7/color_tiles"
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://github.com/Kanzaki7/color_tiles"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Color Tiles
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    You can change the color of the tiles in grid by hovering on it.
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
              </footer>
            </div>
          </li>
          {/* {showMore && <li className="projects__StyledProject-sc-1v1fime-1 gJHaRi">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-folder"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                      aria-label="External Link"
                      className="external"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">
                  <a
                    href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apple Music Facebook Messenger Integration
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    Facebook Messenger chat bot extension featuring authentication and
                    full song streaming from within the Messenger app. Read more about
                    it on{" "}
                    <a
                      href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      The Verge
                    </a>
                    .
                  </p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  <li>Ember</li>
                  <li>JS</li>
                  <li>SCSS</li>
                </ul>
              </footer>
            </div>
          </li>} */}
        </ul>
        {/* <div className="project-links-resume more-button">
            <a className="linkResume" onClick={() => setShowMore(!showMore)}>{ showMore ? "Show less" : "Show more" }</a>
        </div> */}
      </section>
      <section id="contact" className="contact__StyledContactSection-sc-1m8df4t-0 fMdyDu">
        <h2 className="numbered-headingNext overline">What’s Next?</h2>
        <h2 className="title">Get In Touch</h2>
        <p>
          Hey, my inbox is always open. Whether you have a question or just want to say hi, 
          I’ll try mybest to get back to you!
        </p>
        <div className="say-hello">
          <a className="linkTouch" href='mailto:emrah.oztek97@gmail.com'>Say Hello</a>
        </div>
      </section>
      <footer className="footer__StyledFooter-sc-4jwnt4-0 earxGk">
        <div className="footer__StyledSocialLinks-sc-4jwnt4-1 iKeBGp">
          <ul>
            <li>
              <a
                href="https://github.com/bchiang7"
                aria-label="GitHub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bchiang7"
                aria-label="Linkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__StyledCredit-sc-4jwnt4-2 fLSMpu">
          <a
            href="https://github.com/Kanzaki7?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>Designed &amp; Built by Emrah Oztek</div>
            <div className="github-stats">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-star"
                >
                  <title>Star</title>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>7 734</span>
              </span>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-git-branch"
                >
                  <title>Git Fork</title>
                  <line x1="6" y1="3" x2="6" y2="15"></line>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
                <span>3 873</span>
              </span>
            </div>
          </a>
        </div>
      </footer>
      <div className="socialLinks">
        <a href="https://github.com/Kanzaki7?tab=repositories">
          <FontAwesomeIcon icon={faGithub} className="socialIcon" />
        </a>
        <a href="https://www.linkedin.com/in/emrah-oztek">
          <FontAwesomeIcon icon={faLinkedinIn} className="socialIcon" />
        </a>
        <div className="socialLine"></div>
      </div>
      <div className="emailLinks">
        <a href="mailto:emrah.oztek97@gmail.com" type="email" className="email">
          emrah.oztek97@gmail.com
        </a>
        <div className="socialLine"></div>
      </div>
    </div>
  )
}
