import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
})

export default function aboutMe() {
  const classesRoot = useStylesRoot()

  const { state, vars } = useContext(UserContext)
  const { hamburger, normalPageContainerDimensions: container } = vars
  const { isPhone, isPhoneLandscape } = state.phone

  const aboutMeObj = {
    hobbies: { name: 'Hobbies' },
    work: { name: 'Work' },
    myStory: { name: 'My Story' },
  }

  const aboutMeArr = Object.keys(aboutMeObj).map((item) => item)

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
      },
    })
    const classes = useStyles()
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <Grid
          container
          className={classes.container}
          justifyContent="center"
          alignItems="center">
          ABOUT ME NORMAL
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
