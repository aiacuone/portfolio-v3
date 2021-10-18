import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function projects() {
  const { state, vars, setState } = useContext(UserContext)
  const { isPhone, isPhoneLandscape, isPhonePortrait } = state.phone
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

  const { selections } = state
  const { setSelections } = setState

  const selection = selections['projects']
  const selectedProject = projectsObj[projectsArr[selection.project]]
  const { details, name: projectName } = selectedProject

  const useStylesRoot = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      background: 'green',
    },
    detailButtons: {
      width: '100%',
      zIndex: 3,
      height: '100%',
    },
    viewButton: {
      height: '100%',
      whiteSpace: 'nowrap',
      flexGrow: 1,
      background: 'white',
      overflow: 'hidden',
    },

    projectButton: { flexGrow: 1, zIndex: 1 },
    viewButtonContainer: { flexWrap: 'nowrap' },
    detailContainer: {
      padding: 0,
      width: isPhoneLandscape ? '100%' : '50%',
    },
    detailContainer2: { height: '100%' },
    projectButtonContainer: {
      flexGrow: 1,
    },
    projectButtonContainer2: {
      height: '100%',
    },
  })

  const classesRoot = useStylesRoot()

  const DetailButtons = () => {
    const arr = ['basic', 'technical']
    const buttons = arr.map((button, index) => {
      return (
        <Grid
          key={button + index}
          className={classesRoot.detailContainer}
          style={{ background: selection.details == index && 'blue' }}>
          <Grid
            container
            justifyContent="center"
            className={classesRoot.detailContainer2}>
            <Button
              fullWidth
              className={classesRoot.detailButtons}
              onClick={() => {
                const newSelections = { ...selections }
                newSelections['projects'].details = index
                setSelections(newSelections)
              }}>
              {button}
            </Button>
          </Grid>
        </Grid>
      )
    })
    return <Grid container>{buttons}</Grid>
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

  const projectButtons = projectsArr.map((project, index) => {
    return (
      <Grid
        key={project.name + index}
        className={classesRoot.projectButtonContainer}
        style={{ background: index == selection.project && 'orange' }}>
        <Grid container className={classesRoot.projectButtonContainer2}>
          <Button
            onClick={() => {
              const newSelections = { ...selections }
              newSelections['projects'].project = index
              setSelections(newSelections)
            }}
            className={classesRoot.projectButton}>
            {projectsObj[project].name}
          </Button>
        </Grid>
      </Grid>
    )
  })

  const mainDetails =
    selections['projects'].details === 0 ? details.basic : details.technical

  const HeaderText = () => {
    return <Typography>{projectName.toUpperCase()}</Typography>
  }

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
          <HeaderText />
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          {mainDetails}
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
          <HeaderText />
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          {mainDetails}
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
            <HeaderText />
          </Grid>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="center"
            alignItems="center">
            {mainDetails}
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
