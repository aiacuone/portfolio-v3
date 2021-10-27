import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { projectHeaders, projectSummaries } from '../components/'
import Image from 'next/image'
import { skillsObj } from '../utils/skillsDetails'
import { images as skillsImages } from '../public/images/skills'
import { InsertEmoticonOutlined } from '@material-ui/icons'
// import { screenshots } from '../public/images/screenshots'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'

export default function projects() {
  const theme = useTheme()
  const { state, vars, setState } = useContext(UserContext)
  const { isPhone, isPhoneLandscape, isPhonePortrait } = state.phone
  const {
    hamburger,
    projectsArr,
    projectsObj,
    normalPageContainerDimensions: container,
    headerHeightPortrait,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
    handleScroll,
  } = vars

  const { selections, darkMode } = state
  const { setSelections } = setState
  const { main: primaryColor, dark: primaryDarkColor } = theme.palette.primary
  const { main: secondaryColor, dark: secondaryColorDark } =
    theme.palette.secondary

  const selection = selections['projects']
  const projectObj = projectsObj[projectsArr[selection.project]]
  const {
    name: projectName,
    isNew,
    details: projectDetails,
    projectLink,
    projectGitHubLink,
  } = projectObj

  const useStylesRoot = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      // background: 'green',
    },
    detailButtons: {
      width: isPhonePortrait && '50%',
      zIndex: 3,
      flexGrow: 1,
      maxWidth: '300px',
      height: isPhoneLandscape ? '100%' : isPhonePortrait ? '40px' : '30px', //HEIGHT OF DETAIL BUTTONS
    },
    viewButton: {
      // height: isPhoneLandscape ? '25px' : isPhonePortrait ? '100%' : '30px', //HEIGHT OF VIEW BUTTONS
      height: '100%',
      whiteSpace: 'nowrap',
      flexGrow: 1,
      background: 'white',
      overflow: 'hidden',
      maxWidth: '300px',
      margin: '0px 10px',
      color: 'black',
    },

    projectButton: {
      flexGrow: 1,
      zIndex: 1,
      height: isPhoneLandscape ? '100%' : isPhonePortrait ? '40px' : '30px',
      maxWidth: '300px',
    },
    viewButtonContainer: {
      flexWrap: 'nowrap',
      zIndex: 3,
      paddingTop: isPhone && '20px',
    },
    detailContainer: {
      padding: 0,
      width: isPhoneLandscape ? '100%' : '50%',
    },
    detailContainer2: { height: '100%' },
    projectButtonContainer: {
      // flexGrow: 1,
    },
    projectButtonContainer2: {
      height: '100%',
    },
    mainDetailsContainer2: {
      height: '100%',
      // flexWrap: 'nowrap',
      overflowY: 'scroll',
      zIndex: 3,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: `${isPhone ? '70px' : '120px'} 1fr`, //HEIGHT OF PROJECT CONTAINER
    },
    projectHeaderContainer: {
      background: 'white',
      // height: isPhone ? '50px' : '120px',
      gridArea: '1/1/2/3',
    },
    detailsContainer: {
      background: darkMode ? '#3c3c3c' : '#dedede', //DARK MODE COLOURS MAIN CONTAINER
      padding: isPhone ? '0 5px' : '20px 70px',
      gridArea: '2/1/3/2',
    },
    text: {
      marginLeft: '15px', //PADDING OF TEXT FROM LEFT OF MAIN CONTAINER
    },
    langLib: {
      padding: isPhone ? '5px 5px' : '5px 15px', //PADDING AROUND LANGUAGE/LIBRARY/APP SYMBOLS
      minWidth: '65px',
    },
    symbol: {},
    mainDetailsContainer: {},
    paddingGap: { height: '30px' },
    screenshotContainer: {
      padding: '20px',
    },
  })

  const classesRoot = useStylesRoot()

  const DetailButtons = () => {
    const arr = ['basic', 'technical']
    const buttonsLandscape = arr.map((button, index) => {
      return (
        <Grid
          key={button + index}
          className={classesRoot.detailContainer}
          // style={{ background: selection.details == index && 'blue' }}
        >
          <Grid
            container
            justifyContent="center"
            className={classesRoot.detailContainer2}>
            <Button
              fullWidth
              color="secondary"
              variant="text"
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

    const buttons = arr.map((button, index) => {
      return (
        <Button
          color="secondary"
          variant="text"
          style={{
            background: selection.details == index && secondaryColorDark,
          }}
          className={classesRoot.detailButtons}
          onClick={() => {
            const newSelections = { ...selections }
            newSelections['projects'].details = index
            setSelections(newSelections)
          }}>
          {button}
        </Button>
      )
    })
    return (
      <Grid container justifyContent="center">
        {isPhoneLandscape ? buttonsLandscape : buttons}
      </Grid>
    )
  }

  const ViewGitHubButton = () => {
    return (
      <Grid className={classesRoot.viewButton}>
        <Link href={projectGitHubLink}>
          <a target="_blank">
            <Button fullWidth color="secondary" variant="text">
              View GitHub
            </Button>
          </a>
        </Link>
      </Grid>
    )
  }

  const ViewProjectButton = () => {
    return (
      <Grid className={classesRoot.viewButton} item>
        <Link href={projectLink}>
          <a target="_blank">
            <Button fullWidth color="secondary" variant="text">
              View Project
            </Button>
            {/* <Typography textAlign="center">VIEW PROJECT</Typography> */}
          </a>
        </Link>
      </Grid>
    )
  }

  const ViewButtons = () => {
    return (
      <Grid
        container
        className={classesRoot.viewButtonContainer}
        justifyContent="center">
        <ViewProjectButton />
        <ViewGitHubButton />
      </Grid>
    )
  }

  const ProjectButtons = () => {
    const projectButtonsLandscape = projectsArr.map((project, index) => {
      return (
        <Grid
          container
          justifyContent="center"
          key={project.name + index}
          className={classesRoot.projectButtonContainer}
          style={{
            background: index == selection.project && primaryDarkColor,
          }}>
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

    const projectButtons = projectsArr.map((project, index) => {
      return (
        <Button
          style={{ background: index == selection.project && primaryDarkColor }}
          onClick={() => {
            const newSelections = { ...selections }
            newSelections['projects'].project = index
            setSelections(newSelections)
          }}
          className={classesRoot.projectButton}>
          {projectsObj[project].name}
        </Button>
      )
    })

    return isPhoneLandscape ? projectButtonsLandscape : projectButtons
  }

  const MainDetails = () => {
    const { basic: basicDetails, technical: technicalDetails } = projectDetails

    const detailSelection = selections['projects'].details

    const ProjectSummary = () => {
      return projectSummaries[projectObj.internalName]
    }

    const BasicDetails = () => {
      const { lastUpdated, langLib, methods, screenshots, questions } =
        basicDetails
      const { create, learn, challenges } = questions
      return (
        <Grid
          container
          spacing={1} //SPACING BETWEEN ITEMS OF MAIN CONTAINER
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
                <h4>Languages/Libraries/Applications</h4>
              </Grid>
              <Grid container>
                {langLib.map((item) => {
                  return (
                    <Grid item className={classesRoot.langLib}>
                      <Grid
                        className={classesRoot.symbol}
                        container
                        alignItems="center"
                        direction="column">
                        <Image
                          src={`/images/skills/${item}.svg`}
                          layout="fixed"
                          height={isPhone ? 30 : 40}
                          width={isPhone ? 30 : 40}
                        />
                        <Typography textAlign="center">
                          {skillsObj[item].name}
                        </Typography>
                      </Grid>
                    </Grid>
                  )
                })}
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
                <Grid
                  container
                  justifyContent="center"
                  spacing={1}
                  className={classesRoot.screenshotContainer}>
                  {screenshots.map((screenshot) => {
                    return (
                      <Grid item className={classesRoot.screenshot}>
                        <Image
                          src={screenshot}
                          layout="fixed"
                          height={100}
                          width={300}
                        />
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography textAlign="center">Key Points</Typography>
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
                <h4>Lessons</h4>
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

      function getShowLibraryMethods() {
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

      function getShowLibraryComponents() {
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

      const showLibraryMethods = getShowLibraryMethods()
      const showLibraryComponents = getShowLibraryComponents()

      const LibraryMethods = () => {
        const methods = selectedProjectLibrariesArr.map((item) => {
          const { methods, name } = selectedProjectLibrariesObj[item]
          const methodsArr = Object.keys(methods)
          if (methodsArr.length == 0) return
          const image = skillsImages[item]

          return (
            <Grid container direction="column">
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Image src={image} layout="fixed" width={20} height={20} />
                </Grid>
                <Grid item>
                  <h4>{name}</h4>
                </Grid>
                {methodsArr.map((item) => {
                  const method = methods[item]
                  const { name, why } = method
                  return (
                    <Grid item>
                      <p>
                        <b>{`${name}:`}</b> {`${why}`}
                      </p>
                    </Grid>
                  )
                })}
              </Grid>
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
          const image = skillsImages[item]

          return (
            <Grid container direction="column">
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Image src={image} layout="fixed" width={20} height={20} />
                </Grid>
                <Grid item>
                  <h4>{name}</h4>
                </Grid>
                {componentsArr.map((item) => {
                  const component = components[item]
                  const { name, why } = component
                  return (
                    <Grid item>
                      <p>
                        <b>{`${name}:`}</b> {`${why} `}
                      </p>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          )
        })
        return components
      }

      const getShowComponents = () => {
        var boolean
        if (Object.keys(components).length > 0) {
          boolean = true
        }
        return boolean
      }

      const showComponents = getShowComponents()

      return (
        <Grid
          container
          spacing={1}
          className={classesRoot.mainDetailsContainer}
          direction="column">
          <Grid item>
            <Typography textAlign="center">
              <b>TECHNICAL DETAILS</b>
            </Typography>
          </Grid>
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
          {showComponents && (
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
          )}
          {showLibraryMethods && (
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography>
                    <b>Library Methods</b>
                  </Typography>
                </Grid>
                <Grid item className={classesRoot.text}>
                  <LibraryMethods />
                </Grid>
              </Grid>
            </Grid>
          )}
          {showLibraryComponents && (
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography>
                    <b>Library Components</b>
                  </Typography>
                </Grid>
                <Grid item className={classesRoot.text}>
                  <LibraryComponents />
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item>
            <Typography textAlign="center">Questions</Typography>
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
        onScroll={handleScroll}
        container
        direction="column"
        className={classesRoot.mainDetailsContainer2}>
        <Grid
          container
          className={classesRoot.projectHeaderContainer}
          justifyContent="center"
          alignItems="center">
          <ProjectHeader />
        </Grid>
        <Grid container className={classesRoot.detailsContainer}>
          {detailSelection === 0 ? <BasicDetails /> : <TechnicalDetails />}
          {isPhone && <ViewButtons />}
          <Grid container className={classesRoot.paddingGap} />
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    const useStyles = makeStyles({
      root: {
        display: 'grid',
        height: '100%',
        width: '100%',
        gridTemplateRows: `${headerHeightLandscape}px ${secondHeaderHeightLandscape}px repeat(7,1fr) auto`,
        gridTemplateColumns: `120px repeat(8,1fr) ${
          hamburger.width + hamburger.padding * 2
        }px`, //WIDTH OF BUTTONS CONTAINER
      },
      buttonContainer: {
        background: 'yellow',
        gridArea: '1/1/11/2',
        zIndex: 2,
      },

      header: { gridArea: '1/2/2/10', background: 'brown' },
      mainContainer: {
        gridArea: '2/2/10/10',
        // background: 'grey',
        marginRight: `${hamburger.width + hamburger.padding}px`,
      },
      // viewButtons: { gridArea: '10/2/11/10', background: 'brown' },
      viewButtons: { background: 'brown' },
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
          {/* {projectButtons} */}
          <ProjectButtons />
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
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <MainDetails />
        </Grid>

        <Grid className={classes.hamburgerGap} />
      </Grid>
    )
  }

  const ProjectHeader = () => {
    return projectHeaders[projectObj.internalName]
  }

  const Portrait = () => {
    const useStyles = makeStyles({
      root: {
        display: 'grid',
        height: '100%',
        width: '100%',
        gridTemplateColumns: 'repeat(10,1fr)',
        gridTemplateRows: `${headerHeightPortrait}px repeat(12,1fr)  auto auto ${
          hamburger.padding * 2 + hamburger.height
        }px`,
      },
      header: { gridArea: '1/1/2/11' },
      mainContainer: { gridArea: '2/1/14/11', background: 'grey' },
      projectButtons: {
        gridArea: '14/1/15/11',
        background: 'yellow',
        minWidth: '340px',
      },
      detailsButtons: {
        gridArea: '15/1/16/11',
        background: 'orange',
      },
      hamburgerGap: { gridArea: '16/1/17/11', background: 'blue' },
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
          <ProjectButtons />
        </Grid>
        <Grid className={classes.detailsButtons} container>
          <DetailButtons />
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
            <Grid className={classes.hamburger} />
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
        // background: 'white',
        maxWidth: maxWidth,
        width: width,
        height: height,
        minHeight: minHeight,
        minWidth: minWidth,
        display: 'grid',
        gridTemplateColumns: 'repeat(10,1fr)',
        gridTemplateRows: 'auto auto auto repeat(6,1fr) auto',
      },
      detailsButton: { color: 'black', flexGrow: 1 },
      projectButtonContainer: {
        gridArea: '1/1/2/11',
        background: primaryColor,
      },
      detailsButtonContainer: { gridArea: '2/1/3/11', background: 'white' },
      mainContainer: {
        gridArea: '3/1/10/11',
      },
      viewButtonsContainer: {
        gridArea: '10/1/11/11',
        background: primaryColor,
        padding: '5px',
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
            <Grid container justifyContent="center">
              <ProjectButtons />
            </Grid>
          </Grid>
          <Grid container className={classes.detailsButtonContainer}>
            <DetailButtons />
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
