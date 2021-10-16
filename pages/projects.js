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
  },
  viewButton: { height: '100%', background: 'white' },
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
      <ButtonGroup>
        <ViewGitHubButton />
        <ViewProjectButton />
      </ButtonGroup>
    )
  }

  const Phone = () => {
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
        },

        header: { gridArea: '1/2/2/10', background: 'red' },
        projectHeader: { gridArea: '2/2/3/10', background: 'orange' },
        mainContainer: {
          gridArea: '3/2/10/10',
          background: 'grey',
          marginRight: `${hamburger.width + hamburger.padding}px`,
        },
        viewButtons: { gridArea: '10/2/11/10', background: 'brown' },
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
          gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(10,1fr) 45px 45px 45px ${
            hamburger.padding * 2 + hamburger.height
          }px`,
        },
        header: { gridArea: '1/1/2/11' },
        projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
        mainContainer: { gridArea: '3/1/14/11', background: 'grey' },
        projectButtons: { gridArea: '14/1/15/11', background: 'yellow' },
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
          <Grid
            className={classes.header}
            container
            justifyContent="center"
            alignItems="center">
            PROJECTS
          </Grid>
          <Grid className={classes.projectButtons} container>
            <ProjectButtons />
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
        gridTemplateRows: 'auto auto repeat(7,1fr) auto',
      },
      detailsButton: { color: 'black', background: 'white' },
      mainContainer: {
        gridArea: '3/1/10/11',
        background: 'orange',
      },
      buttonContainer: { gridArea: '1/1/2/11', background: 'purple' },
      viewButtonsContainer: {
        gridArea: '10/1/11/11',
        background: 'brown',
      },
      headerContainer: {
        gridArea: '2/1/3/11',
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
