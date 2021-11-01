import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'

export default function ContactMe() {
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
  const {
    hamburger,
    contactsArr,
    contactsObj,
    secondHeaderHeightPortrait,
    headerHeightPortrait,
  } = vars

  const useStylesRoot = makeStyles({
    root: { height: '100%', width: '100%', backgroundColor, zIndex: 1 },
    button: {},
    mainContentContainer: {},
  })
  const classesRoot = useStylesRoot()

  const useStylesN = makeStyles({
    root: {
      width: '100%',
      height: '100%',
    },
    container: {
      height: '400px',
      width: '400px',
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
  const classesN = useStylesN()

  const useStylesP = makeStyles({
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
      background: darkMode ? textDarkBackground : textLightBackground,
    },
  })
  const classesP = useStylesP()

  const useStylesL = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: `${headerHeightPortrait}px  repeat(8,1fr)`,
      gridTemplateColumns: `80px repeat(8,1fr) ${
        hamburger.padding * 2 + hamburger.width
      }px`, //WIDTH OF BUTTON CONTAINER
    },
    buttonContainer: {
      gridArea: '1/1/11/2',
      background: primaryColor,
    },
    header: {
      gridArea: '1/2/2/11',
      background: primaryColor,
      color: darkMode ? 'white' : 'black',
    },
    mainContainer: {
      gridArea: '2/2/11/10',
      background: darkMode ? textDarkBackground : textLightBackground,
    },
    hamburgerGap: {
      gridArea: '2/10/11/11',
      background: darkMode ? textDarkBackground : textLightBackground,
    },
    button: {},
  })
  const classesL = useStylesL()

  const Buttons = ({ size }) => {
    return contactsArr.map((item, index) => {
      const { image: Image, link } = contactsObj[item]
      if (!isPhone && item == 'phone') return

      return (
        <Grid item className={classesRoot.button} key={item + index}>
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
              <Link href="mailto:aiacuone@gmail.com">
                <a target="_blank">
                  <p>
                    <b>Email: </b>aiacuone@gmail.com
                  </p>
                </a>
              </Link>
            </Grid>
            <Grid item>
              <p>
                <b>Location: </b>Balham, London
              </p>
            </Grid>
            <Grid item>
              {isPhone ? (
                <Link href={'tel:07393961334'}>
                  <a target="_blank">
                    <p>
                      <b>Phone: </b>07393 961 334
                    </p>
                  </a>
                </Link>
              ) : (
                <p>
                  <b>Phone: </b>07393 961 334
                </p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Normal = () => {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classesN.root}>
        <Grid container className={classesN.container}>
          <Grid
            container
            className={classesN.header}
            justifyContent="center"
            alignItems="center">
            CONTACT ME
          </Grid>
          <Grid
            container
            className={classesN.mainContainer}
            justifyContent="center"
            alignItems="center">
            <MainContent />
          </Grid>
          <Grid
            container
            className={classesN.buttonContainer}
            justifyContent="space-around">
            <Buttons size={40} />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    return (
      <Grid className={classesL.root}>
        <Grid
          className={classesL.header}
          container
          justifyContent="center"
          alignItems="center">
          CONTACT ME
        </Grid>
        <Grid
          justifyContent="space-around"
          alignItems="center"
          className={classesL.buttonContainer}
          container
          direction="column">
          <Buttons size={40} />
        </Grid>
        <Grid
          className={classesL.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <MainContent />
        </Grid>
        <Grid className={classesL.hamburgerGap}></Grid>
      </Grid>
    )
  }

  const Portrait = () => {
    return (
      <Grid className={classesP.root}>
        <Grid
          className={classesP.header}
          container
          justifyContent="center"
          alignItems="center">
          CONTACT ME
        </Grid>
        <Grid
          className={classesP.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <MainContent />
        </Grid>
        <Grid
          className={classesP.buttonContainer}
          container
          justifyContent="space-around"
          // alignItems="center"
        >
          <Buttons size={40} />
        </Grid>
        <Grid className={classesP.hamburgerGap} />
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
