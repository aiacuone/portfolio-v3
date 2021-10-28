import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'

export default function contactMe() {
  const theme = useTheme()
  const { state, vars } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone
  const { darkMode } = state
  const {
    main: primaryColor,
    dark: primaryDarkColor,
    paper: backgroundColor,
    light: primaryLightColor,
  } = theme.palette.primary
  const { textLight: textLightBackground, textDark: textDarkBackground } =
    theme.palette.background
  const { hamburger, contactsArr, contactsObj, secondHeaderHeightPortrait } =
    vars

  const useStylesRoot = makeStyles({
    root: { height: '100%', width: '100%', backgroundColor },
    button: {},
    mainContentContainer: {},
  })
  const classesRoot = useStylesRoot()

  const Buttons = ({ size }) => {
    return contactsArr.map((item, index) => {
      const { image: Image, link } = contactsObj[item]
      if (!isPhone && item == 'phone') return

      return (
        <Grid item className={classesRoot.button}>
          <Link href={link}>
            <a target="_blank">
              <Image size={size} color={darkMode ? 'white' : 'black'} />
            </a>
          </Link>
        </Grid>
      )
    })
  }

  const MainContent = () => {
    return (
      <Grid
        className={classesRoot.mainContentContainer}
        container
        justifyContent="center"
        alignItems="center">
        <Grid>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <p>
                <b>Name: </b>Adrian Iacuone
              </p>
            </Grid>
            <Grid item>
              <p>
                <b>Email: </b>aiacuone@gmail.com
              </p>
            </Grid>
            <Grid item>
              <p>
                <b>Location: </b>Balham, London
              </p>
            </Grid>
            <Grid item>
              <p>
                <b>Phone: </b>07393 961 334
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Normal = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
      },
      container: {
        height: '400px',
        width: '400px',
        background: 'white',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '100%',
      },
      mainContainer: {
        gridArea: '2/1/3/2',
        background: darkMode ? textDarkBackground : textLightBackground,
      },
      buttonContainer: {
        gridArea: '3/1/4/2',
        background: darkMode ? primaryColor : primaryLightColor,
        padding: '10px 0',
      },
      header: {
        gridArea: '1/1/2/2',
        background: darkMode ? primaryColor : primaryLightColor,
        color: darkMode ? 'white' : 'black',
      },
    })
    const classes = useStyles()

    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <Grid container className={classes.container}>
          <Grid
            container
            className={classes.header}
            justifyContent="center"
            alignItems="center">
            CONTACT ME
          </Grid>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="center"
            alignItems="center">
            <MainContent />
          </Grid>
          <Grid
            container
            className={classes.buttonContainer}
            justifyContent="space-around">
            <Buttons size={40} />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: `${secondHeaderHeightPortrait}px  repeat(8,1fr)`,
        gridTemplateColumns: `80px repeat(8,1fr) ${
          hamburger.padding * 2 + hamburger.width
        }px`, //WIDTH OF BUTTON CONTAINER
      },
      buttonContainer: {
        gridArea: '1/1/11/2',
        background: primaryColor,
      },
      header: {
        gridArea: '1/2/2/10',
        background: primaryColor,
        color: darkMode ? 'white' : 'black',
      },
      mainContainer: {
        gridArea: '2/2/11/10',
        background: darkMode ? textDarkBackground : textLightBackground,
      },
      hamburgerGap: {
        gridArea: '2/10/11/11',
        // background: 'lime',
      },
      button: {},
    })
    const classes = useStyles()

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          CONTACT ME
        </Grid>
        <Grid
          justifyContent="space-around"
          alignItems="center"
          className={classes.buttonContainer}
          container
          direction="column">
          <Buttons size={40} />
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <MainContent />
        </Grid>
        <Grid className={classes.hamburgerGap}></Grid>
      </Grid>
    )
  }

  const Portrait = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: `${secondHeaderHeightPortrait}px 30px repeat(16,1fr) auto ${
          hamburger.padding * 2 + hamburger.width
        }px `,
        gridTemplateColumns: 'repeat(10,1fr)',
      },
      header: {
        gridArea: '1/1/2/11',
        background: primaryColor,
        color: darkMode ? 'white' : 'black',
      },
      mainContainer: {
        gridArea: '2/1/19/11',
        background: darkMode ? textDarkBackground : textLightBackground,
      },
      buttonContainer: {
        gridArea: '19/1/20/11',
        background: primaryColor,
        padding: '5px',
      },
      hamburgerGap: {
        gridArea: '20/1/21/11',
        // background: textDarkBackground,
      },
    })
    const classes = useStyles()

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          CONTACT ME
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <MainContent />
        </Grid>
        <Grid
          className={classes.buttonContainer}
          container
          justifyContent="space-around"
          // alignItems="center"
        >
          <Buttons size={40} />
        </Grid>
        <Grid className={classes.hamburgerGap} />
      </Grid>
    )
  }

  const Phone = () => {
    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
