import { images as skillsImages } from '../public/images/skills'

const {
  react,
  javaScript,
  next,
  materialUI,
  git,
  gitHub,
  css,
  html,
  OOP,
  lodash,
  illustrator,
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
          possibilities to me seem endless.
          <br />
          <br />
          <b>Experience:</b>
          <ul className="skillsText list">
            <li>Reusable components</li>
            <li>useState</li>
            <li>useEffect</li>
            <li>useRef</li>
            <li>useCallback</li>
            <li>useMemo</li>
            {/* <li>SVGs</li> */}
            <li></li>
          </ul>
        </p>
      )
    },
  },
  javaScript: {
    name: 'JavaScript',
    image: javaScript,
    getDetails: ({ darkMode }) => {
      const style = {
        background: darkMode ? 'grey' : 'white',
        padding: '6px 20px',
        textDecoration: 'none',
        margin: '10px 10px',
        whiteSpace: 'nowrap',
        width: '150px',
        textAlign: 'center',
        color: darkMode ? 'white' : 'black',
        display: 'inline-block',
      }
      return (
        <div>
          <p className="skillsText">
            At the core of development when using React. I completed an online
            Javascript tutorial using Freecodecamp. <br />
          </p>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <a href="https://imgbb.com/vVpgJz9" target="_blank" style={style}>
              <p>Certificate</p>
            </a>
            <a
              style={style}
              href="https://freecodecamp-notes-portfolio.netlify.app/"
              target="_blank">
              <p>Workings/Notes</p>
            </a>
          </div>
          <br />
          <b>Experience:</b>
          <ul className="skillsText list">
            <li>ES6</li>
            <li>Array Methods</li>
            <li>Object Methods</li>
            <li>String Methods</li>
            <li>OOP (Object Oriented Programming)</li>
            <li>Constructors</li>
            <li>Regular Expressions</li>
            <li>Debugging</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Functional Programming</li>
          </ul>
        </div>
      )
    },
  },
  next: {
    name: 'Next JS',
    image: next,
    getDetails: () => {
      return (
        <p className="skillsText">
          I find Next JS to have a lot useful tools that I regularly use and is
          my preferred platform to create my projects
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
            Material UI is my preferred Front-end library.
            <br />
            <br /> <b>Experience:</b>
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
          <br />
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
        <p className="skillsText" style={{ whiteSpace: 'nowrap' }}>
          I have all my projects up on GitHub that can be viewed{' '}
          <a href="https://github.com/aiacuone" target="_blank">
            <b>here</b>
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
        <p className="skillsText" style={{ whiteSpace: 'nowrap' }}>
          At the core of development when using React. All my projects include
          CSS.
        </p>
      )
    },
  },
  html: {
    name: 'HTML',
    image: html,
    getDetails: () => {
      return (
        <p className="skillsText" style={{ whiteSpace: 'nowrap' }}>
          At the core of development when using React. All my projects include
          HTML
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
          <b>Object Oriented Programming</b> All my projects and experience are
          Object biased. I have experience using JSON files from an API,
          destructuring and constructors.
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
            efficient and productive. <br />
            <br />
            <b>Experience:</b>
          </p>
          <ul className="skillsText list">
            <li>Uniq</li>
            <li>Debounce</li>
            <li>Find</li>
            <li>Set</li>
          </ul>
          <br />
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
