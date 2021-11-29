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
  typescript,
  express,
  node,
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
        border: `1px ${darkMode ? '#717171' : '#e8e8e8'} solid`,
        borderRadius: '7px',
        // fontSize: '15px',
      }
      return (
        <div>
          <p className="skillsText">
            At the core of development when using React. I completed the online
            Freecodecamp Javascript bootcamp February, 2021. <br />
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
  typescript: {
    name: 'Typescript',
    image: typescript,
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
        border: `1px ${darkMode ? '#717171' : '#e8e8e8'} solid`,
        borderRadius: '7px',
        fontSize: '15px',
      }
      return (
        <p className="skillsText">
          A major focus in my next project is to incorporate Typescript, and
          will incorporate into all my projects going forward. I have completed
          an online course that can be viewed{' '}
          <a href="https://youtu.be/BwuLxPH8IDs?t=0" target="_blank">
            <b>here</b>
          </a>
          . I have completed all my notes and are currently going through the
          process of creating my next project with Typescript.
          <br /> <br />
          The tutorial notes can be found here:
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul className="skillsText list">
              <li>
                <a
                  href="https://drive.google.com/file/d/1Im81Gcb2STd8zgQWT50C7P6JF-pLfEZt/view?usp=sharing"
                  target="_blank"
                  style={style}>
                  Page 1
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/10JCDhchqXPWGWsrf7UKSJ6d6wbxuuqUx/view?usp=sharing"
                  target="_blank"
                  style={style}>
                  Page 2
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1hCk-sgO5_IIInt0JG4G6WHe_ou0z3Vu3/view?usp=sharing"
                  target="_blank"
                  style={style}>
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </p>
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
        <p className="skillsText">
          I have all my projects up on GitHub that can be viewed
          <a href="https://github.com/aiacuone" target="_blank">
            <b> here</b>
          </a>
        </p>
      )
    },
  },
  express: {
    name: 'Express',
    image: express,
    getDetails: () => {
      return (
        <p className="skillsText">
          A long term goal I have is to become a Full Stack Developer, and
          Express will play a very important part in that goal. A major focus on
          my next project is to create an API using Express.
          <br />
          <br />I have completed an online course that can be found{' '}
          <a
            href="https://www.youtube.com/watch?v=Oe421EPjeBE&t=0s&ab_channel=freeCodeCamp.org"
            target="_blank">
            <b>here</b>
          </a>
          .
          <br />
          <br />
          My notes for the course can be found{' '}
          <a
            href="https://drive.google.com/file/d/1W2OJJT_j991oWOAsBqOz2pv1_aSf_qHh/view?usp=sharing"
            target="_blank">
            <b>here</b>
          </a>
          .
        </p>
      )
    },
  },
  node: {
    name: 'Node JS',
    image: node,
    getDetails: () => {
      return (
        <p className="skillsText">
          A long term goal I have is to become a Full Stack Developer, and Node
          will play a very important part in that goal. A major focus on my next
          project is to create an API using Node.
          <br />
          <br />I have completed an online course that can be found{' '}
          <a
            href="https://www.youtube.com/watch?v=Oe421EPjeBE&t=0s&ab_channel=freeCodeCamp.org"
            target="_blank">
            <b>here</b>
          </a>
          .
          <br />
          <br />
          My notes for the course can be found{' '}
          <a
            href="https://drive.google.com/file/d/1W2OJJT_j991oWOAsBqOz2pv1_aSf_qHh/view?usp=sharing"
            target="_blank">
            <b>here</b>
          </a>
          .
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
        <p className="skillsText">
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
