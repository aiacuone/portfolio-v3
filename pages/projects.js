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
  detailButtons: {
    flexGrow: 1,
    // overflow: 'hidden',
  },
  viewButton: {
    height: '100%',
    whiteSpace: 'nowrap',
    flexGrow: 1,
    background: 'white',
    overflow: 'hidden',
  },

  projectButton: { flexGrow: 1 },
  viewButtonContainer: { flexWrap: 'nowrap' },
})

export default function projects() {
  const { state, vars } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone
  const {
    hamburger,
    projectsArr,
    projectsObj,
    normalPageContainerDimensions: container,
    headerHeightPortrait,
    secondHeaderHeightPortrait,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
  } = vars

  const classesRoot = useStylesRoot()

  function handleProjectChange() {
    console.log('project change')
  }

  const DetailButtons = () => {
    return (
      <Grid container>
        <Button
          onClick={console.log('basic details')}
          className={classesRoot.detailButtons}>
          BASIC
        </Button>
        <Button
          onClick={console.log('technical details')}
          className={classesRoot.detailButtons}>
          TECHNICAL
        </Button>
      </Grid>
    )
  }

  const ViewGitHubButton = () => {
    return <Button className={classesRoot.viewButton}>View GitHub</Button>
  }

  const ViewProjectButton = () => {
    return <Button className={classesRoot.viewButton}>View Project</Button>
  }

  const ViewButtons = () => {
    return (
      <Grid container className={classesRoot.viewButtonContainer}>
        <ViewGitHubButton />
        <ViewProjectButton />
      </Grid>
    )
  }

  const projectButtons = projectsArr.map((project) => {
    return (
      <Button
        onClick={handleProjectChange}
        className={classesRoot.projectButton}>
        {projectsObj[project].name}
      </Button>
    )
  })

  const Landscape = () => {
    const useStyles = makeStyles({
      root: {
        display: 'grid',
        height: '100%',
        width: '100%',
        gridTemplateRows: `${headerHeightLandscape}px ${secondHeaderHeightLandscape}px repeat(8,1fr)`,
        gridTemplateColumns: `120px repeat(8,1fr) ${
          hamburger.width + hamburger.padding * 2
        }px`, //WIDTH OF BUTTONS CONTAINER
      },
      buttonContainer: {
        background: 'yellow',
        gridArea: '1/1/11/2',
        zIndex: 2,
      },

      header: { gridArea: '1/2/2/10', background: 'red' },
      projectHeader: { gridArea: '2/2/3/10', background: 'orange' },
      mainContainer: {
        gridArea: '3/2/10/10',
        background: 'grey',
        marginRight: `${hamburger.width + hamburger.padding}px`,
      },
      viewButtons: { gridArea: '10/2/11/10', background: 'brown' },
      hamburgerGap: {
        gridArea: '1/10/11/11',
        background: 'purple',
        zIndex: 1,
      },
    })
    const classes = useStyles()

    const Buttons = () => {
      return (
        <Grid className={classes.buttonContainer} container>
          {projectButtons}
          <DetailButtons />
        </Grid>
      )
    }

    return (
      <Grid className={classes.root} alignItems="stretch">
        <Buttons />

        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          PROJECTS
        </Grid>
        <Grid
          className={classes.projectHeader}
          container
          justifyContent="center"
          alignItems="center">
          PROJECT HEADER
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          MAIN CONTAINER
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.viewButtons}
          justifyContent="center">
          <ViewButtons />
        </Grid>
        <Grid className={classes.hamburgerGap} />
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
        gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(10,1fr) 45px 45px 45px ${
          hamburger.padding * 2 + hamburger.height
        }px`,
      },
      header: { gridArea: '1/1/2/11' },
      projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
      mainContainer: { gridArea: '3/1/14/11', background: 'grey' },
      projectButtons: {
        gridArea: '14/1/15/11',
        background: 'yellow',
        minWidth: '340px',
      },
      detailsButtons: { gridArea: '15/1/16/11', background: 'brown' },
      hamburgerGap: { gridArea: '16/1/17/11', background: 'blue' },
      github: {
        gridArea: '1/1/2/2',
        background: 'grey',
      },
      project: { gridArea: '1/3/2/3', background: 'black' },
      hamburger: {
        gridArea: '1/2/3/3',
        background: 'red',
      },
      container: {
        height: '100%',
        width: '100%',
        background: 'purple',
        display: 'grid',
        gridTemplateColumns: `1fr ${
          hamburger.width + hamburger.padding * 2
        }px 1fr`,
        gridTemplateRows: `1fr ${hamburger.padding}px`,
      },
      projectButton: {
        flexGrow: 1,
      },
      viewButton: {
        height: '100%',
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
          PROJECTS
        </Grid>
        <Grid className={classes.projectButtons} container>
          {projectButtons}
        </Grid>
        <Grid className={classes.detailsButtons} container>
          <DetailButtons />
        </Grid>
        <Grid
          className={classes.projectHeader}
          container
          justifyContent="center"
          alignItems="center">
          PROJECT HEADER
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          MAIN CONTAINER
        </Grid>
        <Grid className={classes.hamburgerGap}>
          <Grid className={classes.container}>
            <Grid
              className={classes.github}
              container
              justifyContent="center"
              alignItems="center">
              <ViewGitHubButton />
            </Grid>
            <Grid className={classes.hamburger} />
            <Grid
              className={classes.project}
              container
              justifyContent="center"
              alignItems="center">
              <ViewProjectButton />
            </Grid>
          </Grid>
        </Grid>
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
        // maxHeight: maxHeight,
        minHeight: minHeight,
        minWidth: minWidth,
        display: 'grid',
        gridTemplateColumns: 'repeat(10,1fr)',
        gridTemplateRows: 'auto auto auto repeat(6,1fr) auto',
      },
      detailsButton: { color: 'black', background: 'white', flexGrow: 1 },
      headerContainer: {
        gridArea: '1/1/2/11',
        background: 'red',
      },
      detailsButtonContainer: { gridArea: '2/1/3/11', background: 'grey' },
      projectButtonContainer: { gridArea: '3/1/4/11', background: 'purple' },
      mainContainer: {
        gridArea: '4/1/10/11',
        background: 'orange',
      },
      viewButtonsContainer: {
        gridArea: '10/1/11/11',
        background: 'brown',
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
            justifyContent="center"
            alignItems="center"
            className={classes.projectButtonContainer}
            direction="column">
            <Grid container>{projectButtons}</Grid>
          </Grid>
          <Grid container className={classes.detailsButtonContainer}>
            <DetailButtons />
          </Grid>
          <Grid
            container
            className={classes.headerContainer}
            justifyContent="center">
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
