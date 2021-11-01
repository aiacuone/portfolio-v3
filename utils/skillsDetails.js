import { images as skillsImages } from '../public/images/skills'

const {
  react,
  javaScript,
  next,
  materialUI,
  git,
  gitHub,
  npm,
  css,
  html,
  OOP,
  lodash,
  illustrator,
  photoshop,
} = skillsImages

export const skillsObj = {
  react: {
    name: 'React',
    image: react,
    getDetails: () => {
      return (
        <p className="skillsText">
          I have put the vast majority of my efforts towards becoming a React
          Developer. React is versatile and constantly changing, and the
          possibilities seem endless
        </p>
      )
    },
  },
  javaScript: {
    name: 'JavaScript',
    image: javaScript,
    getDetails: () => {
      return (
        <>
          <p className="skillsText">
            At the core of development when using React. I completed an online
            Javascript tutorial using Freecodecamp.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
            }}>
            <a href="https://imgbb.com/vVpgJz9" target="_blank">
              <h4>Javascript Certificate</h4>
            </a>
            <a
              href="https://freecodecamp-notes-portfolio.netlify.app/"
              target="_blank">
              <h4>Workings and Notes</h4>
            </a>
          </div>

          {/* <ul className="skillsText list">
            <li> Javascript Certificate</li>
            <li> Workings and Notes</li>
          </ul> */}
        </>
      )
    },
  },
  next: {
    name: 'Next JS',
    image: next,
    getDetails: () => {
      return (
        <p className="skillsText">
          I find Next JS to have a lot useful tools that I regularly and is my
          preferred platform to create my projects
        </p>
      )
    },
  },
  material: {
    name: 'Material UI',
    image: materialUI,
    getDetails: () => {
      return (
        <>
          <p className="skillsText">
            Material UI is my preferred Front-end library. Components used:
          </p>
          <ul className="skillsText list">
            <li>Grid</li>
            <li>Button</li>
            <li>Slider</li>
            <li>Typography</li>
            <li>Paper</li>
            <li>Material Icons</li>
            <li>Table</li>
            <li>useTheme</li>
            <li>useMediaQuery</li>
            <li>Drawer</li>
            <li>Accordion</li>
            <li>Stepper</li>
          </ul>
          <p className="skillsText">
            Where and why I have used these components can be found on my
            Projects page within the Technical tab
          </p>
        </>
      )
    },
  },
  git: {
    name: 'Git',
    image: git,
    getDetails: () => {
      return (
        <p className="skillsText">
          All my projects have been created using Git. I handle all version
          control via the terminal, not using any 3rd party version control
          applications
        </p>
      )
    },
  },
  gitHub: {
    name: 'GitHub',
    image: gitHub,
    getDetails: () => {
      return (
        <p className="skillsText">
          I have all my projects up on GitHub that can be viewed{' '}
          <a href="https://github.com/aiacuone" target="_blank">
            here
          </a>
        </p>
      )
    },
  },
  css: {
    name: 'CSS',
    image: css,
    getDetails: () => {
      return (
        <p className="skillsText">
          At the core of development when using React. Without CSS there is no
          React.
        </p>
      )
    },
  },
  html: {
    name: 'HTML',
    image: html,
    getDetails: () => {
      return (
        <p className="skillsText">
          At the core of development when using React. Without HTML there is no
          React.
        </p>
      )
    },
  },
  OOP: {
    name: 'OOP',
    image: OOP,
    getDetails: () => {
      return (
        <p className="skillsText">
          (Object Oriented Programming) All my projects and experience are
          Object biased. I have experience using JSON files from an API,
          destructuring and extracting information from objects
        </p>
      )
    },
  },
  lodash: {
    name: 'Lodash',
    image: lodash,
    getDetails: () => {
      return (
        <>
          <p className="skillsText">
            I've found the Lodash library to offer tools that makes me more
            efficient and productive. Tools I've used:
          </p>
          <ul className="skillsText list">
            <li>Uniq</li>
            <li>Debounce</li>
            <li>Find</li>
            <li>Set</li>
          </ul>
          <p className="skillsText">
            Where and why I have used these methods can be found on my Projects
            page within the Technical tab
          </p>
        </>
      )
    },
  },
  illustrator: {
    name: 'Illustrator',
    image: illustrator,
    getDetails: () => {
      return (
        <p className="skillsText">
          I use SVG's in all my projects because of their versatility and ease
          of use. Illustrator allows me to customize my own SVG's and
          incorporate them into my React projects.
        </p>
      )
    },
  },
}

export const skillsArr = Object.keys(skillsObj).map((skill) => skill)
