import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'

const useStylesRoot = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    background: 'green',
  },
})

export default function projects() {
  const { state, vars } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone
  const {
    hamburger,
    projectsArr,
    projectsObj,
    normalPageContainerDimensions: container,
  } = vars

  const classesRoot = useStylesRoot()

  const Phone = () => {
    const Landscape = () => {
      const useStyles = makeStyles({
        root: {
          display: 'grid',
          height: '100%',
          width: '100%',
          gridTemplateRows: '20px repeat(9,1fr)',
          gridTemplateColumns: '120px repeat(9,1fr)', //WIDTH OF BUTTONS CONTAINER
        },
        buttonContainer: {
          background: 'yellow',
          gridArea: '1/1/11/2',
        },

        header: { gridArea: '1/2/2/11', background: 'red' },
        projectHeader: { gridArea: '2/2/3/11', background: 'orange' },
        mainContainer: {
          gridArea: '3/2/10/11',
          background: 'grey',
          marginRight: `${hamburger.width + hamburger.padding * 2}px`,
        },
        viewButtons: { gridArea: '10/2/11/11', background: 'brown' },
      })
      const classes = useStyles()

      function handleProjectChange() {
        console.log('project change')
      }

      const Buttons = () => {
        const projectButtons = projectsArr.map((project) => {
          return (
            <Button onClick={handleProjectChange}>
              {projectsObj[project].name}
            </Button>
          )
        })
        return (
          <Grid className={classes.buttonContainer} container>
            {projectButtons}
            <Button onClick={console.log('basic details')}>BASIC</Button>
            <Button onClick={console.log('technical details')}>
              TECHNICAL
            </Button>
          </Grid>
        )
      }

      return (
        <Grid className={classes.root} alignItems="stretch">
          <Buttons />

          <Grid className={classes.header} container justifyContent="center">
            PROJECTS
          </Grid>
          <Grid className={classes.projectHeader}>PROJECT HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.viewButtons}>VIEW BUTTONS</Grid>
          <Grid className={classes.hamburgerGap}></Grid>
        </Grid>
      )
    }

    const Portrait = () => {
      const useStyles = makeStyles({
        root: {
          display: 'grid',
          height: '100%',
          width: '100%',
          gridTemplateColumns: 'repeat(10,1fr)',
          gridTemplateRows: `25px 40px repeat(10,1fr) 45px 45px 45px ${
            hamburger.padding * 2 + hamburger.height
          }px`,
        },
        header: { gridArea: '1/1/2/11' },
        projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
        mainContainer: { gridArea: '3/1/14/11', background: 'grey' },
        detailsButtons: { gridArea: '14/1/15/11', background: 'yellow' },
        projectButtons: { gridArea: '15/1/16/11', background: 'brown' },
        hamburgerGap: { gridArea: '16/1/17/11', background: 'blue' },
        github: {
          height: '100%',
          flexGrow: 1,
          background: 'lime',
        },
        project: { height: '100%', flexGrow: 1, background: 'green' },
        hamburger: {
          width: hamburger.width,
          height: hamburger.height,
          margin: `0px ${hamburger.padding}px`,
        },
        container: {
          height: '100%',
          width: '100%',
          background: 'red',
          display: 'flex',
        },
      })
      const classes = useStyles()
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header} container justifyContent="center">
            PROJECTS
          </Grid>
          <Grid className={classes.projectButtons}>PROJECT BUTTONS</Grid>
          <Grid className={classes.detailsButtons}>DETAIL BUTTONS</Grid>
          <Grid className={classes.projectHeader}>PROJECT HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.hamburgerGap}>
            <Grid
              container
              className={classes.container}
              justifyContent="center"
              alignItems="center">
              <Grid className={classes.github}>Github</Grid>
              <Grid className={classes.hamburger} />
              <Grid className={classes.project}>Project</Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }

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
          PROJECTS NORMAL
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid className={classesRoot.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
