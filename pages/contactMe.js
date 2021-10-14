import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
})

export default function contactMe() {
  const classesRoot = useStylesRoot()

  const { state, vars } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone
  const { hamburger } = vars

  const Normal = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'repeat(10,1fr)',
        gridTemplateColumns: 'repeat(10,1fr)',
      },
    })
    const classes = useStyles()
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        SKILLS NORMAL
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
          gridTemplateRows: '20px  repeat(8,1fr)',
          gridTemplateColumns: `100px repeat(8,1fr) ${
            hamburger.padding * 2 + hamburger.width
          }px`, //WIDTH OF BUTTON CONTAINER
        },
        buttonContainer: {
          gridArea: '1/1/11/2',
          background: 'blue',
        },
        header: {
          gridArea: '1/2/2/11',
          background: 'orange',
        },
        mainContainer: {
          gridArea: '2/2/11/10',
          background: 'grey',
        },
        hamburgerGap: {
          gridArea: '2/10/11/11',
          background: 'lime',
        },
      })
      const classes = useStyles()
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>CONTACT ME</Grid>
          <Grid className={classes.buttonContainer}>BUTTON CONTAINER</Grid>
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
          gridTemplateRows: `20px 30px repeat(17,1fr) ${
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
          gridArea: '3/1/18/11',
          background: 'orange',
        },
        buttonContainer: {
          gridArea: '18/1/20/11',
          background: 'yellow',
        },
        hamburgerGap: {
          gridArea: '20/1/21/11',
          background: 'brown',
        },
      })
      const classes = useStyles()
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>SKILLS</Grid>
          <Grid className={classes.projectHeader}>SKILL HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.buttonContainer}>BUTTON CONTAINER</Grid>
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
