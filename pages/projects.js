import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

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

  function handleProjectChange() {
    console.log('project change')
  }

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
          marginRight: `${hamburger.width + hamburger.padding}px`,
        },
        viewButtons: { gridArea: '10/2/11/11', background: 'brown' },
      })
      const classes = useStyles()

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
            hamburger.padding + hamburger.height
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
        projectButton: {
          flexGrow: 1,
        },
      })
      const classes = useStyles()

      const ProjectButtons = () => {
        const projectButtons = projectsArr.map((project) => {
          return (
            <Button
              onClick={handleProjectChange}
              className={classes.projectButton}>
              {projectsObj[project].name}
            </Button>
          )
        })
        return projectButtons
      }
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header} container justifyContent="center">
            PROJECTS
          </Grid>
          <Grid className={classes.projectButtons} container>
            <ProjectButtons />
          </Grid>
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
        display: 'grid',
        gridTemplateColumns: 'repeat(10,1fr)',
        gridTemplateRows: 'auto repeat(8,1fr) auto',
      },
      detailsButton: { color: 'black', background: 'white' },
      mainContainer: {
        gridArea: '2/1/10/11',
        background: 'orange',
      },
      buttonContainer: { gridArea: '1/1/2/11', background: 'purple' },
      viewButtonsContainer: {
        gridArea: '10/1/11/11',
        background: 'brown',
      },
      headerContainer: {
        background: 'red',
      },
    })
    const classes = useStyles()

    const ProjectButtons = () => {
      const projectButtons = projectsArr.map((project) => {
        return (
          <Button
            onClick={handleProjectChange}
            className={classes.projectButton}>
            {projectsObj[project].name}
          </Button>
        )
      })
      return (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group">
          {projectButtons}
        </ButtonGroup>
      )
    }

    const DetailButtons = () => {
      return (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group">
          <Button
            onClick={console.log('basic details')}
            className={classes.detailsButton}>
            BASIC
          </Button>
          <Button
            onClick={console.log('technical details')}
            className={classes.detailsButton}>
            TECHNICAL
          </Button>
        </ButtonGroup>
      )
    }

    const ViewButtons = () => {
      return (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group">
          <Button
            onClick={console.log('VIEW GITHuB')}
            className={classes.detailsButton}>
            VIEW GITHUB
          </Button>
          <Button
            onClick={console.log('VIEW PROJECT')}
            className={classes.detailsButton}>
            VIEW PROJECT
          </Button>
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
          <Grid
            container
            // spacing={1}
            justifyContent="center"
            alignItems="center"
            className={classes.buttonContainer}
            direction="column">
            <Grid item>
              <ProjectButtons />
            </Grid>
            <Grid item>
              <DetailButtons />
            </Grid>
          </Grid>
          <Grid item className={classes.mainContainer}>
            <Grid
              container
              className={classes.headerContainer}
              justifyContent="center">
              HEADER
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.viewButtonsContainer}
            justifyContent="center">
            <ViewButtons />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid className={classesRoot.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
