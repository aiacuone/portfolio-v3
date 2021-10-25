import '../styles/globals.css'
import Layout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserContext } from '../utils/UserContext'
import { useState, useEffect } from 'react'
import { skillsObj, skillsArr } from '../utils/skillsDetails'
import { projectsObj, projectsArr } from '../utils/projectsDetails'
import { aboutMeObj, aboutMeArr } from '../utils/aboutMeDetails'
import { contactsObj, contactsArr } from '../utils/contactDetails'

function MyApp({ Component, pageProps }) {
  const [windowHeight, setWindowHeight] = useState('100%')
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
    headerHeightPortrait: 20,
    secondHeaderHeightPortrait: 50,
    headerHeightLandscape: 20,
    secondHeaderHeightLandscape: 25,
    buttonsNormalHeight: '30px',
    handleScroll,
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
  // useEffect(() => {
  //   setWindowHeight(window.innerHeight + 'px')
  //   console.log(windowHeight)
  // })

  function handleScroll() {
    setWindowHeight(window.innerHeight + 'px')
    console.log('scroll')
  }
  return (
    <UserContext.Provider value={{ state, setState, vars }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
