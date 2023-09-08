import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import { UserContext } from '../utils/UserContext'
import image from '../public/images/projectHeaders/tekkenProjectHeader.svg'
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
    imageContainer: {
      height: '100%',
      position: 'absolute',
      top: isPhonePortrait ? -10 : isPhoneLandscape ? -20 : -10,
    },
    logoContainer: {
      position: 'absolute',
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
      <Grid className={classes.imageContainer}>
        <Image
          src={image}
          layout="fixed"
          height={isPhonePortrait ? 300 : isPhoneLandscape ? 400 : 500}
          width={600}
          alt="Tekken Net Image"
        />
      </Grid>
    </Grid>
  )
}
