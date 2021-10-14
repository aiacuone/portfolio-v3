import '../styles/globals.css'
import Layout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserContext } from '../utils/UserContext'
import { useState, useEffect } from 'react'

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

  const vars = {
    hamburger: { height: '50px', width: '50px' },
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
