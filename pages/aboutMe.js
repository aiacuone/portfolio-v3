import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
})

export default function aboutMe() {
  const classesRoot = useStylesRoot()

  const { state, vars } = useContext(UserContext)
  const {
    hamburger,
    normalPageContainerDimensions: container,
    aboutMeObj,
    aboutMeArr,
  } = vars
  const { isPhone, isPhoneLandscape } = state.phone

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
        // maxHeight: maxHeight,
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
        background: 'grey',
      },
      buttonContainer: {
        gridArea: '3/1/4/2',
        background: 'orange',
      },
    })
    const classes = useStyles()

    const Buttons = () => {
      const buttons = aboutMeArr.map((item) => {
        return <Button>{aboutMeObj[item].name}</Button>
      })

      return (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group">
          {buttons}
        </ButtonGroup>
      )
    }

    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <Grid container className={classes.container}>
          <Grid container className={classes.header} justifyContent="center">
            HEADER
          </Grid>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="center"
            alignItems="center">
            MAIN CONTAINER
          </Grid>
          <Grid
            container
            className={classes.buttonContainer}
            justifyContent="center">
            <Buttons />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Phone = () => {
    const Landscape = () => {
      const useStyles = makeStyles({
        root: {
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: '20px 30px repeat(8,1fr)',
          gridTemplateColumns: `100px repeat(8,1fr) ${
            hamburger.padding + hamburger.width
          }px`, //WIDTH OF BUTTON CONTAINER
        },
        buttonContainer: {
          gridArea: '3/1/11/2',
          background: 'blue',
          minHeight: '150px',
        },
        header: {
          gridArea: '1/1/2/11',
          background: 'orange',
        },
        aboutMeHeader: {
          gridArea: '2/1/3/11',
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
        button: {
          background: 'red',
        },
      })
      const classes = useStyles()

      const buttons = aboutMeArr.map((item) => {
        return (
          <Grid
            container
            className={classes.button}
            alignItems="center"
            justifyContent="center">
            {aboutMeObj[item].name.toUpperCase()}
          </Grid>
        )
      })
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>ABOUT ME</Grid>
          <Grid className={classes.aboutMeHeader}>ABOUT ME HEADER</Grid>
          <Grid className={classes.buttonContainer} container>
            {buttons}
          </Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
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
          gridTemplateRows: `20px 30px repeat(16,1fr) 50px ${
            hamburger.padding + hamburger.width
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

      const buttons = aboutMeArr.map((item) => {
        return (
          <Grid item className={classes.button}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={classes.container}>
              {aboutMeObj[item].name.toUpperCase()}
            </Grid>
          </Grid>
        )
      })
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>SKILLS</Grid>
          <Grid className={classes.projectHeader}>SKILL HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.buttonContainer} container>
            {buttons}
          </Grid>
          <Grid className={classes.hamburgerGap} />
        </Grid>
      )
    }

    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
