import '../styles/globals.css'
import Layout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserContext } from '../utils/UserContext'
import { useState, useEffect } from 'react'
import { images as skillsImages } from '../public/images/skills'

function MyApp({ Component, pageProps }) {
  const [windowHeight, setWindowHeight] = useState()
  const [showViewButtons, setShowViewButtons] = useState(false)

  const isPhoneWidthPortrait = useMediaQuery('(max-width:430px)')
  const isPhoneHeightPortrait = useMediaQuery('(max-height:850px)')
  const isPhoneWidthLandscape = useMediaQuery('(max-width:850px')
  const isPhoneHeightLandscape = useMediaQuery('(max-height:430px')
  const isPhonePotrait =
    isPhoneWidthPortrait && isPhoneHeightPortrait ? true : false
  const isPhoneLandscape =
    isPhoneWidthLandscape && isPhoneHeightLandscape ? true : false
  const isPhone = isPhonePotrait || isPhoneLandscape ? true : false

  const projectsObj = {
    cheapshark: { name: 'Cheapshark', new: true },
    TekkenNet: { name: 'Tekken-Net', new: true },
    noteTaker: { name: 'Note Taker', new: false },
  }

  const projectsArr = Object.keys(projectsObj).map((project) => project)

  const skillsObj = {
    react: { name: 'React', image: skillsImages.react },
    javascript: { name: 'JavaScript', image: skillsImages.javaScript },
    next: { name: 'Next JS', image: skillsImages.next },
    materialUI: { name: 'Material UI', image: skillsImages.materialUI },
    git: { name: 'Git', image: skillsImages.git },
    gitHub: { name: 'GitHub', image: skillsImages.gitHub },
    npm: { name: 'NPM', image: skillsImages.npm },
    css: { name: 'CSS', image: skillsImages.css },
    html: { name: 'HTML', image: skillsImages.html },
    OOP: { name: 'Object Oriented Programming', image: skillsImages.OOP },
    lodash: { name: 'Lodash', image: skillsImages.lodash },
    illustrator: { name: 'Adobe Illustrator', image: skillsImages.illustrator },
    photoshop: { name: 'Adobe Photoshop', image: skillsImages.photoshop },
  }

  const skillsArr = Object.keys(skillsObj).map((skill) => skill)

  const normalPageContainerDimensions = {
    maxWidth: '1300px',
    minWidth: '1000px',
    maxHeight: '1200px',
    minHeight: '500px',
    width: '70vw',
    height: '70vh',
  }

  const vars = {
    projectsArr,
    hamburger: { height: 50, width: 50, padding: 10 }, //ONLY CHANGE SIZES RELATED TO HAMBURGER HERE
    projectsObj,
    skillsObj,
    skillsArr,
    normalPageContainerDimensions,
  }

  const state = {
    windowHeight,
    phone: {
      isPhone,
      isPhoneLandscape,
      isPhonePotrait,
    },
    showViewButtons,
  }

  const setState = { setWindowHeight, setShowViewButtons }

  useEffect(() => {
    setWindowHeight(window.innerHeight)

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
