import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { UserContext } from '../utils/UserContext'
import Link from 'next/link'

export default function Layout({ children }) {
  const { state } = useContext(UserContext)
  const { phone, windowHeight } = state
  const { isPhone, isPhoneLandscape } = phone

  const useStyles = makeStyles({
    root: {
      // background: isPhone ? 'green' : 'blue',
      width: '100vw',
      height: windowHeight,
    },
    header: {
      width: '100%',
      background: 'yellow',
      gridArea: '1/1/2/11',
    },
    hamburger: {
      position: 'absolute',
      bottom: !isPhoneLandscape && 5, //HEIGHT OF HAMBURGER FROM BOTTOM
      right: isPhoneLandscape && 10, //HEIGHT OF HAMBURGER FROM RIGHT
      background: 'orange',
      height: '50px',
      zIndex: 1,
    },

    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    backgroundContainer: {
      position: 'absolute',
      // background: 'orange',
      height: '100%',
    },
    normContainer: {
      height: '100%',
      width: '100%',
      display: 'grid',
      background: 'red',
      gridTemplateRows: '40px repeat(10,1fr)', //HEADER HEIGHT
      gridTemplateColumns: 'repeat(10,1fr)',
    },
    normContainer2: {
      width: '100%',
      height: '100%',
      gridArea: '2/1/12/11',
      // background: 'blue',
      position: 'relative',
    },
    me: {
      position: 'absolute',
      bottom: 10, //THESE VALUES SET TO 10 DUE TO PADDING/MARGIN ISSUES
      left: 10,
      height: '50px',
      width: '50px',
      background: 'orange',
    },
    london: {
      position: 'absolute',
      top: 10,
      right: 10,
      height: '50px',
      width: '50px',
      background: 'lime',
    },
    links: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      background: 'green',
      height: '50px',
      width: '50px',
      background: 'yellow',
    },
    skills: {
      position: 'absolute',
      top: 10,
      left: 10,
      height: '50px',
      width: '50px',
      background: 'purple',
    },
  })

  const classes = useStyles()

  const Phone = () => {
    return (
      <Grid
        container
        className={classes.container}
        justifyContent="center"
        alignItems="center">
        <Link href="/hamburger">
          <Grid className={classes.hamburger}>Hamburger</Grid>
        </Link>
        {children}
      </Grid>
    )
  }

  const Normal = () => {
    return (
      <Grid container className={classes.normContainer}>
        <Grid className={classes.header}>Header</Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.normContainer2}>
          {children}
          <Grid
            container
            className={classes.backgroundContainer}
            justifyContent="center">
            <Grid className={classes.skills}>skills</Grid>
            <Grid className={classes.london}>london</Grid>
            <Grid className={classes.me}>me</Grid>
            <Grid className={classes.links}>links</Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid className={classes.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
