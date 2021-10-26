import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import { UserContext } from '../utils/UserContext'
import logo from '../public/images/projectHeaders/cheapsharkLogo.svg'
import diver from '../public/images/projectHeaders/diver.svg'
import fish from '../public/images/projectHeaders/fish.svg'

export default function CheapsharkProjectHeader() {
  const { state } = useContext(UserContext)
  const { isPhone, isPhonePortrait, isPhoneLandscape } = state.phone

  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(0deg, rgba(24,71,116,1) 0%, rgba(0,128,255,1) 100%)',

      padding: isPhone ? '5px' : '10px',
      position: 'relative',
    },
    diverContainer: {
      position: 'absolute',
      right: isPhonePortrait ? 30 : isPhoneLandscape ? 50 : '5%',
      top: isPhonePortrait ? 0 : isPhoneLandscape ? 0 : 10,
      // background: 'green',
    },
    fishContainer: {
      position: 'absolute',
      left: isPhonePortrait ? 20 : isPhoneLandscape ? 50 : '5%',
      top: isPhonePortrait ? 0 : isPhoneLandscape ? 0 : 0,
    },
  })
  const classes = useStyles()

  const getLogoProps = () => {
    const phone = { height: 60, width: 180 }
    const normal = { height: 90, width: 270 }

    return isPhone ? phone : normal
  }

  const logoProps = getLogoProps()

  const getDiverProps = () => {
    const portrait = { height: 50, width: 60 }
    const landscape = { height: 50, width: 80 }
    const normal = { height: 60, width: 150 }

    return isPhonePortrait ? portrait : isPhoneLandscape ? landscape : normal
  }

  const diverProps = getDiverProps()

  const getFishProps = () => {
    const portrait = { height: 50, width: 60 }
    const landscape = { height: 50, width: 80 }
    const normal = { height: 100, width: 150 }

    return isPhonePortrait ? portrait : isPhoneLandscape ? landscape : normal
  }

  const fishProps = getFishProps()

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}>
      <Grid className={classes.imageContainer}>
        <Image src={logo} layout="fixed" {...logoProps} />
      </Grid>
      <Grid className={classes.diverContainer}>
        <Image src={diver} layout="fixed" {...diverProps} />
      </Grid>
      <Grid className={classes.fishContainer}>
        <Image src={fish} layout="fixed" {...fishProps} />
      </Grid>
    </Grid>
  )
}
