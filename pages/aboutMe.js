import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import { HobbiesIcon, WorkIcon, StoryIcon } from '../components/icons'

export default function aboutMe() {
  const theme = useTheme()
  const { state, vars, setState } = useContext(UserContext)
  const {
    hamburger,
    normalPageContainerDimensions: container,
    aboutMeObj,
    aboutMeArr,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
    headerHeightPortrait,
    secondHeaderHeightPortrait,
    mainContainerPadding,
  } = vars
  const { selections, darkMode } = state
  const { setSelections } = setState
  const { isPhone, isPhoneLandscape } = state.phone
  const selection = selections['aboutMe']
  const selectedOptionObj = aboutMeObj[aboutMeArr[selection]]
  const { getDetails, name: optionName, icon } = selectedOptionObj
  const {
    main: primaryColor,
    dark: primaryDarkColor,
    light: primaryLightColor,
  } = theme.palette.primary
  const {
    textLight: textLightBackground,
    textDark: textDarkBackground,
    paper: backgroundColor,
  } = theme.palette.background
  const { width, maxWidth, minWidth, height, maxHeight, minHeight } = container
  const mainDetails = getDetails()

  const useStylesRoot = makeStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    bottomNav: {
      display: 'flex',
      flexDirection: isPhoneLandscape && 'column',
      background: backgroundColor,
    },
    button: { flexGrow: 1, cursor: 'pointer' },
    container: { height: '100%', color: darkMode ? 'white' : 'black' },
    mainContentHeaderContainer: {
      paddingBottom: isPhone ? '10px' : '30px',
    },
    mainDetailsContainer: {},
    mainDetailsContainer2: {},
    headerText: {},
  })
  const classesRoot = useStylesRoot()

  const useStylesL = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: `${headerHeightLandscape}px ${secondHeaderHeightLandscape}px repeat(8,1fr)`,
      gridTemplateColumns: `100px repeat(8,1fr) ${
        hamburger.padding * 2 + hamburger.width
      }px`, //WIDTH OF BUTTON CONTAINER
    },
    buttonContainer: {
      gridArea: '1/1/11/2',
      background: darkMode ? primaryColor : primaryLightColor,
      minHeight: '150px',
      color: 'white',
    },
    header: {
      gridArea: '1/2/2/10',
      background: darkMode ? primaryColor : primaryLightColor,
      color: darkMode ? 'white' : 'black',
    },
    mainContainer: {
      gridArea: '2/2/11/10',

      overflowY: 'scroll',
      padding: mainContainerPadding,
      zIndex: 50,
      background: darkMode ? textDarkBackground : textLightBackground,
    },
    hamburgerGap: {
      gridArea: '1/10/11/11',
      background: darkMode ? textDarkBackground : textLightBackground,
    },
  })
  const classesL = useStylesL()

  const useStylesN = makeStyles({
    root: {
      width: '100%',
      height: '100%',
    },
    container: {
      background: 'white',
      maxWidth: maxWidth,
      width: width,
      height: height,
      minHeight: minHeight,
      minWidth: minWidth,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '100%',
      zIndex: 1,
    },

    mainContainer: {
      gridArea: '1/1/3/2',
      background: darkMode ? textDarkBackground : textLightBackground,
      padding: mainContainerPadding,
      overflowY: 'scroll',
    },
    buttonContainer: {
      gridArea: '3/1/4/2',
      background: darkMode ? primaryColor : primaryLightColor,
      zIndex: 3,
      color: 'white',
    },
    buttonContainer2: {
      maxWidth: '500px',
    },
  })
  const classesN = useStylesN()

  const useStylesP = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(16,1fr) 50px ${
        hamburger.padding * 2 + hamburger.width
      }px`,
      gridTemplateColumns: 'repeat(10,1fr)',
    },
    header: {
      gridArea: '1/1/2/11',
      background: darkMode ? primaryColor : primaryLightColor,
      color: darkMode ? 'white' : 'black',
    },
    mainContainer: {
      gridArea: '2/1/19/11',
      overflowY: 'scroll',
      padding: mainContainerPadding,
      background: darkMode ? textDarkBackground : textLightBackground,
    },
    buttonContainer: {
      gridArea: '19/1/20/11',
      background: darkMode ? primaryColor : primaryLightColor,
      color: 'white',
    },
    hamburgerGap: {
      gridArea: '20/1/21/11',
      background: darkMode ? textDarkBackground : textLightBackground,
    },
    button: { flexGrow: 1, background: 'lime' },
    container: { height: '100%' },
    button2: { background: 'grey', borderRadius: 0, height: '100%' },
  })
  const classesP = useStylesP()

  const Buttons = ({ size }) => {
    const buttons = aboutMeArr.map((item, index) => {
      const { name } = aboutMeObj[item]
      const color = darkMode ? 'white' : 'black'
      const iconObj = {
        hobbies: <HobbiesIcon size={size} color={color} />,
        work: <WorkIcon size={size} color={color} />,
        story: <StoryIcon size={size} color={color} />,
      }

      const icon = iconObj[item]

      return (
        <Grid
          key={item.name}
          onClick={() => setSelections({ ...selections, ['aboutMe']: index })}
          className={classesRoot.button}
          style={{
            background:
              index == selection && darkMode
                ? primaryDarkColor
                : index == selection && !darkMode && primaryColor,
          }}>
          <Grid
            container
            className={classesRoot.container}
            alignItems="center"
            direction="column"
            justifyContent="center">
            {icon}
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      )
    })
    return buttons
  }

  const Header = ({ variant, size }) => {
    const iconObj = {
      hobbies: <HobbiesIcon size={size} color={darkMode ? 'white' : 'black'} />,
      work: <WorkIcon size={size} color={darkMode ? 'white' : 'black'} />,
      story: <StoryIcon size={size} color={darkMode ? 'white' : 'black'} />,
    }

    const icon = iconObj[aboutMeArr[selection]]

    return (
      <Grid
        container
        className={classesRoot.mainContentHeaderContainer}
        justifyContent="center"
        alignItems="flex-end">
        <Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>{icon}</Grid>
            <Grid item>
              <Typography variant={variant} className={classesRoot.headerText}>
                {optionName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const MainDetails = () => {
    return (
      <Grid
        container
        justifyContent="center"
        className={classesRoot.mainDetailsContainer}>
        <Grid container className={classesRoot.mainDetailsContainer2}>
          <Typography>{mainDetails}</Typography>
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
          ABOUT ME
        </Grid>
        <Grid className={classesL.buttonContainer} container direction="column">
          <Buttons size={30} color="white" />
        </Grid>
        <Grid
          className={classesL.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <Grid>
            <Header variant="h5" size={40} />
            <MainDetails variant="h5" size={40} />
          </Grid>
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
          ABOUT ME
        </Grid>
        <Grid
          className={classesP.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <Grid>
            <Header variant="h5" size={40} />
            <MainDetails />
          </Grid>
        </Grid>
        <Grid className={classesP.buttonContainer} container>
          <Buttons size={25} color="white" />
        </Grid>
        <Grid className={classesP.hamburgerGap} />
      </Grid>
    )
  }

  const Phone = () => {
    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  const Normal = () => {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classesN.root}>
        <Grid container className={classesN.container}>
          <Grid className={classesN.mainContainer} container>
            <Header variant="h4" size={50} />
            <MainDetails />
          </Grid>
          <Grid
            container
            className={classesN.buttonContainer}
            justifyContent="center">
            <Grid container className={classesN.buttonContainer2}>
              <Buttons size={35} color="white" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
