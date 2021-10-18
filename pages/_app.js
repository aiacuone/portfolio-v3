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
    cheapshark: { name: 'Cheapshark', new: true },
    TekkenNet: { name: 'Tekken-Net', new: true },
    noteTaker: { name: 'Note Taker', new: false },
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
      react: { name: 'React', image: react },
      javascript: { name: 'JavaScript', image: javaScript },
      next: { name: 'Next JS', image: next },
      materialUI: { name: 'Material UI', image: materialUI },
      git: { name: 'Git', image: git },
      gitHub: { name: 'GitHub', image: gitHub },
      npm: { name: 'NPM', image: npm },
      css: { name: 'CSS', image: css },
      html: { name: 'HTML', image: html },
      OOP: { name: 'Object Oriented Programming', image: OOP },
      lodash: { name: 'Lodash', image: lodash },
      illustrator: {
        name: 'Adobe Illustrator',
        image: illustrator,
      },
      photoshop: { name: 'Adobe Photoshop', image: photoshop },
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
    hobbies: { name: 'Hobbies', icon: SportsEsportsIcon },
    work: { name: 'Work', icon: WorkIcon },
    details: { name: 'Details', icon: PersonIcon },
    story: { name: 'Story', icon: MenuBookIcon },
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
