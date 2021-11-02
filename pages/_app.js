import '../styles/globals.css'
import Layout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserContext } from '../utils/UserContext'
import { useState, useEffect } from 'react'
import { skillsObj, skillsArr } from '../utils/skillsDetails'
import { projectsObj, projectsArr } from '../utils/projectsDetails'
import { aboutMeObj, aboutMeArr } from '../utils/aboutMeDetails'
import { contactsObj, contactsArr } from '../utils/contactDetails'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

function MyApp({ Component, pageProps }) {
  const [windowHeight, setWindowHeight] = useState('100%')
  const [showViewButtons, setShowViewButtons] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [selections, setSelections] = useState({
    projects: { project: 0, details: 0 },
    skills: 0,
    aboutMe: 0,
  })

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#1c1c1c' : '#e9e9e9',
        textDark: '#3c3c3c',
        textLight: '#f5f5f5',
        detailContainer: '#1E1E1E',
      },
      primary: {
        main: '#607893',
      },
      secondary: {
        main: '#f5f5f5',
        dark: '#e9e9e9',
        contrastText: 'black',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'white',
            fontSize: '1.rem',
            fontWeight: 300,
            padding: 0,
          },
          textSecondary: {
            color: 'black',
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    shape: { borderRadius: 0 },
    typography: {
      fontFamily: 'Calibri',
    },
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

  function convertData(data) {
    const getString = () => {
      return <p>{data}</p>
    }
    const getArray = () => {
      return (
        <ul>
          {data.map((item, index) => {
            return <li key={(item, index)}>{item}</li>
          })}
        </ul>
      )
    }
    const getFunction = () => {
      return data()
    }

    var result
    switch (typeof data) {
      case 'string':
        result = getString()
        break
      case 'object':
        result = getArray()
        break
      case 'function':
        result = getFunction()
        break
    }
    return result
  }

  const mainContainerNormalStyle = {
    maxWidth: '1100px',
    minWidth: '650px',
    maxHeight: '1200px',
    minHeight: '450px',
    width: '70vw',
    height: '70vh',
  }

  const mainContentNormalStyle = {
    overflowY: 'scroll',
    padding: '70px 70px',
    height: '100%',
    width: '100%',
    flexWrap: 'nowrap',
  }

  const vars = {
    projectsArr,
    hamburger: { height: 40, width: 40, padding: 7 }, //ONLY CHANGE SIZES RELATED TO HAMBURGER HERE
    projectsObj,
    skillsObj,
    skillsArr,
    mainContainerNormalStyle,
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
    primaryColor: '#009dbc',
    mainContainerPadding: isPhone && '10px 10px',
    convertData,
    mainContentNormalStyle,
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
    darkMode,
  }

  const setState = {
    setWindowHeight,
    setShowViewButtons,
    setSelections,
    setDarkMode,
  }

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
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ state, setState, vars }}>
        <Paper style={{ width: '100%', height: '100%' }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Paper>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
