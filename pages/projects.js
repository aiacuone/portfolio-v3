import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { projectHeaders, projectSummaries } from '../components/'
import { HowToRegOutlined } from '@mui/icons-material'

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
  const projectObj = projectsObj[projectsArr[selection.project]]
  const { name: projectName, isNew, details: projectDetails } = projectObj

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
    mainDetails: {
      height: '100%',
      flexWrap: 'nowrap',
      overflowY: 'scroll',
      zIndex: 3,
    },
    detailsItem: {
      background: 'red',
      width: '80%',
      padding: '20px 0',
    },
    text: {
      marginLeft: '15px', //PADDING OF TEXT FROM LEFT OF MAIN CONTAINER
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

  const MainDetails = () => {
    const { basic: basicDetails, technical: technicalDetails } = projectDetails

    const detailSelection = selections['projects'].details

    const ProjectHeader = () => {
      return projectHeaders[projectObj.internalName]
    }

    const ProjectSummary = () => {
      return projectSummaries[projectObj.internalName]
    }

    const BasicDetails = () => {
      const { lastUpdated, langLib, methods, screenshots, questions, areas } =
        basicDetails
      const { create, learn, challenges } = questions
      return (
        <Grid
          container
          spacing={1}
          className={classesRoot.mainDetailsContainer}
          direction="column">
          <Grid item>
            <Typography textAlign="center">BASIC DETAILS</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Last Updated</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <p>{lastUpdated}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Summary</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <ProjectSummary />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Methods Used</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <ul>
                  {methods.map((method) => {
                    return <li>{method}</li>
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Screenshots</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <ul>
                  {screenshots.map((screenshot) => {
                    return <li>{screenshot}</li>
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Areas</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <ul>
                  {areas.map((area) => {
                    return <li>{area}</li>
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography textAlign="center">QUESTIONS</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Why create this project?</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <p>{create}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>What was learnt?</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <p>{learn}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Biggest challenges</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <p>{challenges}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }
    const TechnicalDetails = () => {
      const {
        hooks,
        components,
        libraries: librariesObj,
        questions,
      } = technicalDetails
      const librariesArr = Object.keys(librariesObj)
      const { how, change, future } = questions

      const { libraries: selectedProjectLibrariesObj } =
        projectObj.details.technical
      const selectedProjectLibrariesArr = Object.keys(
        selectedProjectLibrariesObj
      )

      function getShowMethods() {
        var boolean

        selectedProjectLibrariesArr.forEach((item) => {
          const obj = selectedProjectLibrariesObj[item].methods
          const arr = Object.keys(obj)
          if (arr.length > 0) {
            return (boolean = true)
          }
        })

        return boolean
      }

      function getShowComponents() {
        var boolean

        selectedProjectLibrariesArr.forEach((item) => {
          const obj = selectedProjectLibrariesObj[item].components
          const arr = Object.keys(obj)
          if (arr.length > 0) {
            return (boolean = true)
          }
        })

        return boolean
      }

      const showMethods = getShowMethods()
      const showComponents = getShowComponents()

      const LibraryMethods = () => {
        const methods = selectedProjectLibrariesArr.map((item) => {
          const { methods, name } = selectedProjectLibrariesObj[item]
          const methodsArr = Object.keys(methods)
          if (methodsArr.length == 0) return

          return (
            <Grid container direction="column">
              <h4>{name}</h4>
              {methodsArr.map((item) => {
                const method = methods[item]
                const { name, why } = method
                return <p>{`${name}: ${why} `}</p>
              })}
            </Grid>
          )
        })
        return methods
      }

      const LibraryComponents = () => {
        const components = selectedProjectLibrariesArr.map((item) => {
          const { components, name } = selectedProjectLibrariesObj[item]
          const componentsArr = Object.keys(components)
          if (componentsArr.length == 0) return

          return (
            <Grid container direction="column">
              <h4>{name}</h4>

              {componentsArr.map((item) => {
                const component = components[item]
                const { name, why } = component
                return <p>{`${name}: ${why} `}</p>
              })}
            </Grid>
          )
        })
        return components
      }

      return (
        <Grid
          container
          spacing={1}
          className={classesRoot.mainDetailsContainer}
          direction="column">
          <Typography textAlign="center">TECHNICAL DETAILS</Typography>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Hooks</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <ul>
                  {hooks.map((hook) => {
                    return <li>{hook}</li>
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Components</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {Object.keys(components).map((item) => {
                  const { name, why } = components[item]
                  return <p>{`${name}: ${why}`}</p>
                })}
              </Grid>
            </Grid>
          </Grid>
          {showMethods && (
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <h4>Library Methods</h4>
                </Grid>
                <Grid item className={classesRoot.text}>
                  <LibraryMethods />
                </Grid>
              </Grid>
            </Grid>
          )}
          {showComponents && (
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <h4>Library Components</h4>
                </Grid>
                <Grid item className={classesRoot.text}>
                  <LibraryComponents />
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item>
            <Typography textAlign="center">QUESTIONS</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>How has your coding improved completing this project</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {how}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>
                  What would you change about this project and maybe implement
                  later on?
                </h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {change}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>What ideas do you have for the future of this project?</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {future}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }
    return (
      <Grid
        container
        direction="column"
        className={classesRoot.mainDetails}
        alignItems="center">
        <ProjectHeader />
        <Grid item className={classesRoot.detailsItem}>
          {detailSelection === 0 ? <BasicDetails /> : <TechnicalDetails />}
        </Grid>
      </Grid>
    )
  }

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
          <MainDetails />
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
          <MainDetails />
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
            <MainDetails />
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
