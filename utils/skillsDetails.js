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
      return <p> ReactDETAILS</p>
    },
  },
  javascript: {
    name: 'JavaScript',
    image: javaScript,
    getDetails: () => {
      return <p>JavaScriptDETAILS</p>
    },
  },
  next: {
    name: 'Next JS',
    image: next,
    getDetails: () => {
      return <p>NextDETAILS</p>
    },
  },
  materialUI: {
    name: 'Material UI',
    image: materialUI,
    getDetails: () => {
      return <p>MaterialDETAILS</p>
    },
  },
  git: {
    name: 'Git',
    image: git,
    getDetails: () => {
      return <p>GitDETAILS</p>
    },
  },
  gitHub: {
    name: 'GitHub',
    image: gitHub,
    getDetails: () => {
      return <p>GitHubDETAILS</p>
    },
  },
  npm: {
    name: 'NPM',
    image: npm,
    getDetails: () => {
      return <p>NPMDETAILS</p>
    },
  },
  css: {
    name: 'CSS',
    image: css,
    getDetails: () => {
      return <p>CSSDETAILS</p>
    },
  },
  html: {
    name: 'HTML',
    image: html,
    getDetails: () => {
      return <p>HTMLDETAILS</p>
    },
  },
  OOP: {
    name: 'Object Oriented Programming',
    image: OOP,
    getDetails: () => {
      return <p>ObjectDETAILS</p>
    },
  },
  lodash: {
    name: 'Lodash',
    image: lodash,
    getDetails: () => {
      return <p>LodashDETAILS</p>
    },
  },
  illustrator: {
    name: 'Adobe Illustrator',
    image: illustrator,
    getDetails: () => {
      return <p>IllustratorDETAILS</p>
    },
  },
  photoshop: {
    name: 'Adobe Photoshop',
    image: photoshop,
    getDetails: () => {
      return <p>PhotoshopDETAILS</p>
    },
  },
}

export const skillsArr = Object.keys(skillsObj).map((skill) => skill)
