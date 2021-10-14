import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { UserContext } from '../utils/UserContext'
import Link from 'next/link'
// import MenuIcon from '@mui/icons-material/Menu'

export default function Layout({ children }) {
  const { state, vars } = useContext(UserContext)
  const { phone, windowHeight } = state
  const { isPhone, isPhoneLandscape } = phone
  const {
    height: hamburgerHeight,
    width: hamburgerWidth,
    padding: hamburgerPadding,
  } = vars.hamburger

  const useStylesRoot = makeStyles({
    root: {
      // background: isPhone ? 'green' : 'blue',
      width: '100vw',
      height: windowHeight,
    },
  })

  const classesRoot = useStylesRoot()

  const Phone = () => {
    const useStyles = makeStyles({
      root: {
        position: 'relative',
        width: '100%',
        height: '100%',
      },
      hamburger: {
        position: 'absolute',
        bottom: !isPhoneLandscape && hamburgerPadding, //HEIGHT OF HAMBURGER FROM BOTTOM
        right: isPhoneLandscape && hamburgerPadding, //HEIGHT OF HAMBURGER FROM RIGHT
        background: 'orange',
        height: hamburgerHeight,
        width: hamburgerWidth,
        zIndex: 1,
      },
    })

    const classes = useStyles()

    return (
      <Grid
        container
        className={classes.root}
        justifyContent="center"
        alignItems="center">
        <Link href="/hamburger">
          <Grid className={classes.hamburger}></Grid>
        </Link>
        {children}
      </Grid>
    )
  }

  const Normal = () => {
    const useStyles = makeStyles({
      root: {
        height: '100%',
        width: '100%',
        display: 'grid',
        background: 'red',
        gridTemplateRows: '40px repeat(10,1fr)', //HEADER HEIGHT
        gridTemplateColumns: 'repeat(10,1fr)',
      },
      header: {
        width: '100%',
        background: 'yellow',
        gridArea: '1/1/2/11',
      },
      linksHeader: { height: '100%' },
    })

    const classes = useStyles()
    return (
      <Grid container className={classes.root}>
        <Grid className={classes.header}>
          <Grid
            container
            // justifyContent="flexEnd"
            alignItems="center"
            className={classes.linksHeader}>
            <Grid
              container
              spacing={3}
              className={classes.linksHeader2}
              justifyContent="flex-end">
              <Grid item>
                <Link href="/">Home</Link>
              </Grid>
              <Grid item>
                <Link href="projects">Projects</Link>
              </Grid>
              <Grid item>
                <Link href="skills">Skills</Link>
              </Grid>
              <Grid item>
                <Link href="aboutMe">About Me</Link>
              </Grid>
              <Grid item>
                <Link href="contactMe">Contact Me</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
    <Grid className={classesRoot.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
