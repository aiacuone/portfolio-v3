import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { UserContext } from '../utils/UserContext'
import Link from 'next/link'
import Button from '@mui/material/Button'

export default function Layout({ children }) {
  const { state, vars, setState } = useContext(UserContext)
  const { phone, windowHeight, darkMode } = state
  const { setDarkMode } = setState
  const { isPhone, isPhoneLandscape } = phone
  const {
    height: hamburgerHeight,
    width: hamburgerWidth,
    padding: hamburgerPadding,
  } = vars.hamburger

  const useStylesRoot = makeStyles({
    root: {
      width: '100%',
      height: '100%',
    },
  })

  const classesRoot = useStylesRoot()

  const Phone = () => {
    const useStyles = makeStyles({
      root: {
        position: 'relative',
        width: '100vw',
        // height: `${windowHeight}px`,
        height: windowHeight,
        minHeight: '270px',
        minWidth: '270px',
        // background: 'red',
      },
      hamburger: {
        position: 'absolute',
        bottom: !isPhoneLandscape && hamburgerPadding, //HEIGHT OF HAMBURGER FROM BOTTOM
        right: isPhoneLandscape && hamburgerPadding, //HEIGHT OF HAMBURGER FROM RIGHT
        background: 'orange',
        height: hamburgerHeight,
        width: hamburgerWidth,
        zIndex: 100,
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
        gridTemplateRows: '40px repeat(10,1fr)', //HEADER HEIGHT
        gridTemplateColumns: 'repeat(10,1fr)',
        minHeight: '600px',
        minWidth: '600px',
      },
      header: {
        width: '100%',
        background: 'yellow',
        gridArea: '1/1/2/11',
      },
      linksHeader: { height: '100%' },
      container: {
        gridArea: '2/1/12/11',
        position: 'relative',
      },
      backgroundContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
      },
      backgroundContainer2: {
        height: '100%',
        width: '100%',
        position: 'relative',
      },
      me: {
        position: 'absolute',
        bottom: 10, //THESE VALUES SET TO 10 DUE TO PADDING/MARGIN ISSUES
        left: 10,
        height: '50px',
        width: '50px',
        background: 'red',
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

    const NavLinks = () => {
      const navArr = [
        { name: 'Home', link: '' },
        { name: 'Projects', link: 'projects' },
        { name: 'skills', link: 'skills' },
        { name: 'About Me', link: 'aboutMe' },
        { name: 'Contact Me', link: 'contactMe' },
      ]
      const navLinks = navArr.map((nav) => {
        const { name, link } = nav
        return (
          <Grid item>
            <Link href={`/${link}`}>
              <Button>{name}</Button>
            </Link>
          </Grid>
        )
      })
      return (
        <>
          <Grid item>
            <Button onClick={() => setDarkMode(!darkMode)}>DARK</Button>
          </Grid>
          {navLinks}
        </>
      )
    }

    const classes = useStyles()
    return (
      <Grid container className={classes.root}>
        <Grid className={classes.header}>
          <Grid container alignItems="center" className={classes.linksHeader}>
            <Grid
              container
              spacing={3}
              className={classes.linksHeader2}
              justifyContent="flex-end">
              <NavLinks />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.container}>
          {children}
          <Grid container className={classes.backgroundContainer}>
            <Grid className={classes.backgroundContainer2}>
              <Grid item className={classes.me}>
                me
              </Grid>
              <Grid item className={classes.links}>
                links
              </Grid>
              <Grid item className={classes.skills}>
                skills
              </Grid>
              <Grid item className={classes.london}>
                london
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid className={classesRoot.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
