import '../styles/globals.css'
import Layout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserContext } from '../utils/UserContext'
import { useState, useEffect } from 'react'
import { images as skillsImages } from '../public/images/skills'
import { images as contactImages } from '../public/images/contact'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'
import MenuBookIcon from '@mui/icons-material/MenuBook'

function MyApp({ Component, pageProps }) {
  const [windowHeight, setWindowHeight] = useState()
  const [showViewButtons, setShowViewButtons] = useState(false)
  const [selections, setSelections] = useState({
    projects: { project: 0, details: 0 },
    skills: 0,
    aboutMe: 0,
  })

  const isPhoneWidthPortrait = useMediaQuery('(max-width:430px)')
  const isPhoneHeightPortrait = useMediaQuery('(max-height:920px)')
  const isPhoneWidthLandscape = useMediaQuery('(max-width:920px')
  const isPhoneHeightLandscape = useMediaQuery('(max-height:430px')
  const isPhonePortrait =
    isPhoneWidthPortrait && isPhoneHeightPortrait ? true : false
  const isPhoneLandscape =
    isPhoneWidthLandscape && isPhoneHeightLandscape ? true : false
  const isPhone = isPhonePortrait || isPhoneLandscape ? true : false

  const projectsObj = {
    cheapshark: {
      name: 'Cheapshark',
      new: true,
      details: {
        basic: 'CHEAPSHARK BASIC DETAILS',
        technical: 'CHEAPSHARK TECHNICAL DETAILS',
      },
    },
    TekkenNet: {
      name: 'Tekken-Net',
      new: true,
      details: {
        basic: 'TEKKEN NET BASIC DETAILS',
        technical: 'TEKKEN NET TECHNICAL DETAILS',
      },
    },
    noteTaker: {
      name: 'Note Taker',
      new: false,
      details: {
        basic: 'NOTE TAKER BASIC DETAILS',
        technical: 'NOTE TAKER TECHNICAL DETAILS',
      },
    },
  }

  const projectsArr = Object.keys(projectsObj).map((project) => project)

  function getSkillsObj() {
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

    const obj = {
      react: {
        name: 'React',
        image: react,
        getDetails: () => {
          return <p>REACT MAIN DETAILS</p>
        },
      },
      javascript: {
        name: 'JavaScript',
        image: javaScript,
        getDetails: () => {
          return <p>JAVA SCRIPT MAIN DETAILS</p>
        },
      },
      next: {
        name: 'Next JS',
        image: next,
        getDetails: () => {
          return <p>NEXT MAIN DETAILS</p>
        },
      },
      materialUI: {
        name: 'Material UI',
        image: materialUI,
        getDetails: () => {
          return <p>MATERIAL UI MAIN DETAILS</p>
        },
      },
      git: {
        name: 'Git',
        image: git,
        getDetails: () => {
          return <p>GIT MAIN DETAILS</p>
        },
      },
      gitHub: {
        name: 'GitHub',
        image: gitHub,
        getDetails: () => {
          return <p>GITHUB MAIN DETAILS</p>
        },
      },
      npm: {
        name: 'NPM',
        image: npm,
        getDetails: () => {
          return <p>NPM MAIN DETAILS</p>
        },
      },
      css: {
        name: 'CSS',
        image: css,
        getDetails: () => {
          return <p>CSS MAIN DETAILS</p>
        },
      },
      html: {
        name: 'HTML',
        image: html,
        getDetails: () => {
          return <p>HTML MAIN DETAILS</p>
        },
      },
      OOP: {
        name: 'Object Oriented Programming',
        image: OOP,
        getDetails: () => {
          return <p>OOP MAIN DETAILS</p>
        },
      },
      lodash: {
        name: 'Lodash',
        image: lodash,
        getDetails: () => {
          return <p>LODASH MAIN DETAILS</p>
        },
      },
      illustrator: {
        name: 'Adobe Illustrator',
        image: illustrator,
        getDetails: () => {
          return <p>ILLUSTRATOR MAIN DETAILS</p>
        },
      },
      photoshop: {
        name: 'Adobe Photoshop',
        image: photoshop,
        getDetails: () => {
          return <p>PHOTOSHOP MAIN DETAILS</p>
        },
      },
    }

    return obj
  }

  const skillsObj = getSkillsObj()

  const skillsArr = Object.keys(skillsObj).map((skill) => skill)

  function getContactObj() {
    const { email, linkedin, phone, gitHub } = contactImages

    const obj = {
      email: { name: 'Email', image: email },
      linkedin: { name: 'Linkedin', image: linkedin },
      phone: { name: 'Phone', image: phone },
      gitHub: { name: 'GitHub', image: gitHub },
    }

    return obj
  }

  const contactsObj = getContactObj()

  const contactsArr = Object.keys(contactsObj).map((contact) => contact)

  const aboutMeObj = {
    hobbies: {
      name: 'Hobbies',
      icon: SportsEsportsIcon,
      getDetails: () => {
        return <p>HOBBIES MAIN DETAILS</p>
      },
    },
    work: {
      name: 'Work',
      icon: WorkIcon,
      getDetails: () => {
        return <p>WORK MAIN DETAILS</p>
      },
    },
    details: {
      name: 'Details',
      icon: PersonIcon,
      getDetails: () => {
        return <p>DETAILS MAIN DETAILS</p>
      },
    },
    story: {
      name: 'Story',
      icon: MenuBookIcon,
      getDetails: () => {
        return <p>STORY MAIN DETAILS</p>
      },
    },
  }

  const aboutMeArr = Object.keys(aboutMeObj).map((item) => item)

  const normalPageContainerDimensions = {
    maxWidth: '1300px',
    minWidth: '650px',
    maxHeight: '1200px',
    minHeight: '500px',
    width: '70vw',
    height: '70vh',
  }

  const vars = {
    projectsArr,
    hamburger: { height: 35, width: 35, padding: 7 }, //ONLY CHANGE SIZES RELATED TO HAMBURGER HERE
    projectsObj,
    skillsObj,
    skillsArr,
    normalPageContainerDimensions,
    skillsObj,
    contactsObj,
    contactsArr,
    aboutMeObj,
    aboutMeArr,
    headerHeightPortrait: 30,
    secondHeaderHeightPortrait: 50,
    headerHeightLandscape: 20,
    secondHeaderHeightLandscape: 25,
  }

  const state = {
    windowHeight,
    phone: {
      isPhone,
      isPhoneLandscape,
      isPhonePortrait,
    },
    showViewButtons,
    selections,
  }

  const setState = { setWindowHeight, setShowViewButtons, setSelections }

  useEffect(() => {
    setWindowHeight(window.innerHeight + 'px')

    function handleResize() {
      setWindowHeight(window.innerHeight + 'px')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <UserContext.Provider value={{ state, setState, vars }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
