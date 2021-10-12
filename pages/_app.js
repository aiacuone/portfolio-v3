import '../styles/globals.css'
import SiteLayout from '../components/Layout'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import { UserContext } from '../utils/UserContext'

function MyApp({ Component, pageProps }) {
  const isPhoneWidthPortrait = useMediaQuery('(max-width:430px)')
  const isPhoneHeightPortrait = useMediaQuery('(max-height:850px)')
  const isPhoneWidthLandscape = useMediaQuery('(max-width:850px')
  const isPhoneHeightLandscape = useMediaQuery('(max-height:430px')
  const isPhonePotrait =
    isPhoneWidthPortrait && isPhoneHeightPortrait ? true : false
  const isPhoneLandscape =
    isPhoneWidthLandscape && isPhoneHeightLandscape ? true : false
  const isPhone = isPhonePotrait || isPhoneLandscape ? true : false

  const state = {
    phone: {
      isPhone,
      isPhoneLandscape,
      isPhonePotrait,
    },
  }

  return (
    <UserContext.Provider value={{ state }}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </UserContext.Provider>
  )
}

export default MyApp
