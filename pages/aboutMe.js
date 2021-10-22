import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export default function aboutMe() {
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
  } = vars
  const { selections } = state
  const { setSelections } = setState
  const { isPhone, isPhoneLandscape } = state.phone
  const selection = selections['aboutMe']
  const selectedOptionObj = aboutMeObj[aboutMeArr[selection]]
  const { getDetails, name: optionName, icon } = selectedOptionObj
  const mainDetails = getDetails()

  const useStylesRoot = makeStyles({
    root: { height: '100%', width: '100%' },
    bottomNav: {
      display: 'flex',
      flexDirection: isPhoneLandscape && 'column',
      background: 'brown',
    },
    button: { flexGrow: 1, cursor: 'pointer' },
    container: { height: '100%' },
    mainContentHeaderContainer: {
      // background: 'blue',
      paddingBottom: '30px',
    },
    mainDetailsContainer: {
      // width: '80%',
      // background: 'orange',
    },
    mainDetailsContainer2: {
      width: '80%',
      // background: 'green',
    },
  })

  const HeaderText = () => {
    return <Typography>{optionName.toUpperCase()}</Typography>
  }

  const Buttons = ({ size }) => {
    const buttons = aboutMeArr.map((item, index) => {
      const { name, icon } = aboutMeObj[item]
      return (
        <Grid
          key={item.name}
          onClick={() => setSelections({ ...selections, ['aboutMe']: index })}
          className={classesRoot.button}
          style={{ background: index == selection && 'purple' }}>
          <Grid
            container
            className={classesRoot.container}
            alignItems="center"
            direction="column"
            justifyContent="center">
            <Image src={icon} layout="fixed" width={size} height={size} />
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      )
    })
    return buttons
  }

  const Header = () => {
    return (
      <Grid container className={classesRoot.mainContentHeaderContainer}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Image src={icon} layout="fixed" height={80} width={80} />
          </Grid>
          <Grid item>
            <Typography variant="h4">{optionName}</Typography>
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
    const useStyles = makeStyles({
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
        gridArea: '3/1/11/2',
        background: 'blue',
        minHeight: '150px',
      },
      header: {
        gridArea: '1/2/2/10',
        background: 'orange',
      },
      aboutMeHeader: {
        gridArea: '2/2/3/10',
        background: 'purple',
      },
      mainContainer: {
        gridArea: '3/2/11/10',
        background: 'grey',
      },
      hamburgerGap: {
        gridArea: '3/10/11/11',
        background: 'lime',
      },
    })
    const classes = useStyles()

    return (
      <Grid className={classes.root}>
        <Grid className={classes.header} container justifyContent="center">
          ABOUT ME
        </Grid>
        <Grid
          className={classes.aboutMeHeader}
          container
          justifyContent="center"
          alignItems="center">
          <HeaderText />
        </Grid>
        <Grid className={classes.buttonContainer} container direction="column">
          <Buttons size={30} />
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <Header />
          {mainDetails}
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
        gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(16,1fr) 50px ${
          hamburger.padding * 2 + hamburger.width
        }px`,
        gridTemplateColumns: 'repeat(10,1fr)',
      },
      header: {
        gridArea: '1/1/2/11',
        background: 'blue',
      },
      projectHeader: {
        gridArea: '2/1/3/11',
        background: 'purple',
      },
      mainContainer: {
        gridArea: '3/1/19/11',
        background: 'orange',
      },
      buttonContainer: {
        gridArea: '19/1/20/11',
        background: 'yellow',
      },
      hamburgerGap: {
        gridArea: '20/1/21/11',
        background: 'brown',
      },
      button: { flexGrow: 1, background: 'lime' },
      container: { height: '100%' },
      button2: { background: 'grey', borderRadius: 0, height: '100%' },
    })
    const classes = useStyles()

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          ABOUT ME
        </Grid>
        <Grid
          className={classes.projectHeader}
          container
          justifyContent="center"
          alignItems="center">
          <HeaderText />
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <Header />
          {mainDetails}
        </Grid>
        <Grid className={classes.buttonContainer} container>
          <Buttons size={30} />
        </Grid>
        <Grid className={classes.hamburgerGap} />
      </Grid>
    )
  }

  const Phone = () => {
    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  const Normal = () => {
    const { width, maxWidth, minWidth, height, maxHeight, minHeight } =
      container

    const useStyles = makeStyles({
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
      },
      header: {
        gridArea: '1/1/2/2',
        background: 'red',
      },
      mainContainer: {
        gridArea: '2/1/3/2',
        background: 'green',
      },
      buttonContainer: {
        gridArea: '3/1/4/2',
        background: 'orange',
        zIndex: 3,
      },
      buttonContainer2: {
        maxWidth: '500px',
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
          <Grid container className={classes.header} justifyContent="center">
            <HeaderText />
          </Grid>
          <Grid className={classes.mainContainer} container alignItems="center">
            <Grid container>
              <Header />
              <MainDetails />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.buttonContainer}
            justifyContent="center">
            <Grid container className={classes.buttonContainer2}>
              <Buttons size={35} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const classesRoot = useStylesRoot()
  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
