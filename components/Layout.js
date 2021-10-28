import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { UserContext } from '../utils/UserContext'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const theme = useTheme()
  const { state, vars, setState } = useContext(UserContext)
  const { phone, windowHeight, darkMode } = state
  const { setDarkMode } = setState
  const { isPhone, isPhoneLandscape } = phone
  const {
    height: hamburgerHeight,
    width: hamburgerWidth,
    padding: hamburgerPadding,
  } = vars.hamburger
  const {
    main: primaryColor,
    dark: darkPrimaryColor,
    light: lightPrimaryColor,
  } = theme.palette.primary
  const router = useRouter()

  const useStylesRoot = makeStyles({
    root: {
      width: '100%',
      height: '100%',
    },
  })

  const classesRoot = useStylesRoot()

  const Hamburger = () => {
    return (
      <svg
        height={hamburgerHeight}
        width={hamburgerWidth}
        onClick={handleClick}
        enable-background="new 0 0 32 32"
        id="Filled_Line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <line
          fill={darkMode ? 'white' : 'black'}
          id="XMLID_837_"
          stroke={darkMode ? 'white' : 'black'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="7"
          x2="25"
          y1="16"
          y2="16"
        />
        <line
          id="XMLID_836_"
          stroke={darkMode ? 'white' : 'black'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="7"
          x2="25"
          y1="25"
          y2="25"
        />
        <line
          id="XMLID_835_"
          stroke={darkMode ? 'white' : 'black'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="7"
          x2="25"
          y1="7"
          y2="7"
        />
      </svg>
    )
  }

  function handleClick() {
    if (router.pathname == '/') {
      return router.back()
    }
    return router.push('/')
  }

  const Phone = () => {
    const useStyles = makeStyles({
      root: {
        position: 'relative',
        width: '100vw',
        height: windowHeight,
        minHeight: '270px',
        minWidth: '270px',
        fontSize: '.9rem',
      },
      hamburger: {
        position: 'absolute',
        bottom: !isPhoneLandscape && hamburgerPadding, //HEIGHT OF HAMBURGER FROM BOTTOM
        right: isPhoneLandscape && hamburgerPadding, //HEIGHT OF HAMBURGER FROM RIGHT
        height: hamburgerHeight,
        width: hamburgerWidth,
        zIndex: 100,
        cursor: 'pointer',
      },
    })

    const classes = useStyles()

    return (
      <Grid
        container
        className={classes.root}
        justifyContent="center"
        alignItems="center">
        <Grid className={classes.hamburger}>
          <Hamburger />
        </Grid>
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
        background: darkMode ? darkPrimaryColor : lightPrimaryColor,
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
      navLink: {
        fontSize: '.9rem',
        textTransform: 'none',
        color: darkMode ? 'white' : 'black',
        // background: 'red',
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
              <Button className={classes.navLink}>{name}</Button>
            </Link>
          </Grid>
        )
      })
      return (
        <>
          {navLinks}
          <Grid item style={{ paddingRight: '30px', cursor: 'pointer' }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ height: '100%' }}>
              <Brightness4Icon
                color={!darkMode ? 'inherit' : 'secondary'}
                onClick={() => setDarkMode(!darkMode)}
              />
            </Grid>
          </Grid>
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
              spacing={1}
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
