import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import { UserContext } from '../utils/UserContext'
import character from '../public/images/projectHeaders/tekkenProjectHeader.svg'
import logo from '../public/images/projectHeaders/tekkenNetLogo.svg'
import { makeStyles } from '@mui/styles'

export default function TekkenNetProjectHeader() {
  const { state } = useContext(UserContext)
  const { isPhone, isPhonePortrait, isPhoneLandscape } = state.phone

  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      background: '#272727',
      padding: isPhone ? '5px' : '10px',
      position: 'relative',
      overflow: 'hidden',
    },
    characterContainer: {
      height: '100%',
      position: 'absolute',
      right: isPhonePortrait ? -200 : isPhoneLandscape ? -50 : 150,
      top: isPhonePortrait ? -10 : isPhoneLandscape ? -10 : -10,
    },
    logoContainer: {
      position: 'absolute',
      // left: 50,
      // top: 0,
      marginRight: 120,
    },
  })

  const classes = useStyles()
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}>
      <Grid className={classes.characterContainer}>
        <Image
          src={character}
          layout="fixed"
          height={isPhone ? 400 : 600}
          width={600}
        />
      </Grid>
      <Grid className={classes.logoContainer}>
        <Image
          src={logo}
          layout="fixed"
          width={isPhone ? 200 : 350}
          height={50}
        />
      </Grid>
    </Grid>
  )
}
