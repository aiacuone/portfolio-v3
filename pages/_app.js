import '../styles/globals.css'
import Layout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserContext } from '../utils/UserContext'
import { useState, useEffect } from 'react'
import { skillsObj, skillsArr } from '../utils/skillsDetails'
import { projectsObj, projectsArr } from '../utils/projectsDetails'
import { aboutMeObj, aboutMeArr } from '../utils/aboutMeDetails'
import { contactsObj, contactsArr } from '../utils/contactDetails'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { borderRadius } from '@mui/system'
import Paper from '@mui/material/Paper'

function MyApp({ Component, pageProps }) {
  const [windowHeight, setWindowHeight] = useState('100%')
  const [showViewButtons, setShowViewButtons] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [selections, setSelections] = useState({
    projects: { project: 0, details: 0 },
    skills: 0,
    aboutMe: 0,
  })

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: { paper: darkMode ? '#1c1c1c' : '#f5f5f5' },
      primary: {
        main: '#607893',
      },
      secondary: {
        main: '#f5f5f5',
        dark: '#d9d9d9',
        contrastText: 'black',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // color: darkMode ? 'white' : '#000000', //BUTTON TEXT COLOR
            color: 'white',
            fontSize: '1.1rem',
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
      MuiButton: {
        color: 'red',
      },
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
    // handleScroll,
    primaryColor: '#009dbc',
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
