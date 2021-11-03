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
import NewBanner from '../components/icons/NewBannerIcon'
import { newBanner } from '../public/images/misc'

export default function Projects() {
  const theme = useTheme()
  const { state, vars, setState } = useContext(UserContext)
  const { isPhone, isPhoneLandscape, isPhonePortrait } = state.phone
  const {
    hamburger,
    projectsArr,
    projectsObj,
    mainContainerNormalStyle,
    headerHeightPortrait,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
    handleScroll,
    convertData,
    mainContentNormalStyle,
  } = vars

  const { selections, darkMode } = state
  const { setSelections } = setState
  const {
    main: primaryColor,
    dark: primaryDarkColor,
    light: primaryLightColor,
  } = theme.palette.primary
  const { main: secondaryColor, dark: secondaryColorDark } =
    theme.palette.secondary
  const {
    textLight: textLightBackground,
    textDark: textDarkBackground,
    default: backgroundColor,
    paper,
    detailContainer,
  } = theme.palette.background
  const selection = selections['projects']
  const projectObj = projectsObj[projectsArr[selection.project]]
  const {
    name: projectName,
    isNew,
    details: projectDetails,
    projectLink,
    projectGitHubLink,
  } = projectObj
  const { grey } = theme.palette

  const useStylesRoot = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      color: darkMode ? 'white' : 'black',
    },
    detailButtons: {
      width: isPhonePortrait && '50%',
      zIndex: 3,
      flexGrow: 1,
      maxWidth: '300px',
      height: isPhoneLandscape ? '100%' : isPhonePortrait ? '40px' : '30px', //HEIGHT OF DETAIL BUTTONS
      fontSize: isPhone && '.8rem',
      color: darkMode ? 'white' : 'black',
    },

    projectButton: {
      flexGrow: 1,
      zIndex: 1,
      height: isPhoneLandscape ? '100%' : isPhonePortrait ? '40px' : '30px',
      maxWidth: '300px',
      fontSize: isPhone && '.8rem',
      color: darkMode ? 'white' : 'black',
      position: 'relative',
    },
    viewButtonContainer: {
      flexWrap: 'nowrap',
      zIndex: 3,
      paddingTop: isPhone && '20px',
    },
    viewButtonContainer2: {
      height: '100%',
      whiteSpace: 'nowrap',
      flexGrow: 1,
      background: 'white',
      overflow: 'hidden',
      maxWidth: '300px',
      margin: '0px 10px',
      color: 'black',
    },
    viewButton: {
      height: isPhone ? '40px' : '30px', //HEIGHT OF BUTTONS
    },
    detailContainer: {
      width: isPhoneLandscape ? '100%' : '50%',
    },
    detailContainer2: { height: '100%' },
    projectButtonContainer: {
      background: darkMode ? primaryColor : primaryLightColor,
    },
    projectButtonContainer2: {
      height: '100%',
      position: 'relative',
    },
    mainDetailsContainer2: {
      height: '100%',
      overflowY: 'scroll',
      zIndex: 3,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: `${isPhone ? '70px' : '120px'} 1fr`, //HEIGHT OF PROJECT CONTAINER
    },
    projectHeaderContainer: {
      background: 'white',
      gridArea: '1/1/2/3',
    },
    detailsContainer: {
      background: darkMode ? textDarkBackground : textLightBackground, //DARK MODE COLOURS MAIN CONTAINER
      padding: `${isPhone ? '10px' : '20px'} ${
        isPhone ? '10px' : mainContentNormalStyle.padding.substring(5, 11)
      } `,

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
    newBanner: {
      position: 'absolute',
      top: isPhonePortrait ? -5 : 0,
      left: 0,
      filter: 'opacity(20%)',
    },
  })
  const classesRoot = useStylesRoot()
  const DetailButtons = () => {
    const arr = ['basic', 'technical']

    const selectedColor =
      darkMode && !isPhone
        ? '#333333'
        : !darkMode && !isPhone
        ? grey[300]
        : !darkMode && isPhone
        ? textLightBackground
        : darkMode && isPhone
        ? textDarkBackground
        : null

    const getStyle = (index) => {
      return {
        background: selection.details == index && selectedColor,
      }
    }

    const Landscape = () => {
      return arr.map((button, index) => {
        const style = getStyle(index)
        return (
          <Grid
            key={button + index}
            className={classesRoot.detailContainer}
            style={style}>
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
    }

    const Other = () => {
      return arr.map((button, index) => {
        const style = getStyle(index)
        return (
          <Button
            key={`button1${button + index}`}
            color="secondary"
            variant="text"
            style={style}
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
    }

    return (
      <Grid container justifyContent="center">
        {isPhoneLandscape ? <Landscape /> : <Other />}
      </Grid>
    )
  }

  const ViewGitHubButton = () => {
    return (
      <Grid className={classesRoot.viewButtonContainer2}>
        <Link href={projectGitHubLink}>
          <a target="_blank">
            <Button
              className={classesRoot.viewButton}
              fullWidth
              color="secondary"
              variant="text"
              style={{ fontSize: isPhone && '.8rem' }}>
              View GitHub
            </Button>
          </a>
        </Link>
      </Grid>
    )
  }

  const ViewProjectButton = () => {
    return (
      <Grid className={classesRoot.viewButtonContainer2} item>
        <Link href={projectLink}>
          <a target="_blank">
            <Button
              className={classesRoot.viewButton}
              fullWidth
              color="secondary"
              variant="text"
              style={{
                fontSize: isPhone && '.8rem',
              }}>
              View Project
            </Button>
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
    const getStyle = ({ index, project }) => {
      return {
        background:
          index == selection.project && darkMode
            ? primaryDarkColor
            : index == selection.project && !darkMode
            ? primaryColor
            : 'null',
      }
    }

    const Landscape = () => {
      return projectsArr.map((project, index) => {
        const { name, isNew } = projectsObj[project]
        const style = getStyle({ project, index })
        return (
          <Grid
            container
            justifyContent="center"
            key={project.name + index}
            className={classesRoot.projectButtonContainer}
            style={{ ...style }}>
            <Grid container className={classesRoot.projectButtonContainer2}>
              <Button
                onClick={() => {
                  const newSelections = { ...selections }
                  newSelections['projects'].project = index
                  setSelections(newSelections)
                }}
                className={classesRoot.projectButton}>
                {isNew && (
                  <>
                    <Grid className={classesRoot.newBanner}>
                      <NewBanner width={isPhone ? 60 : 70} color="white" />
                    </Grid>
                    <p
                      style={{
                        position: 'absolute',
                        top: isPhone ? -3 : -2,
                        left: 9,
                        fontSize: isPhone ? '.7rem' : '.75rem',
                      }}>
                      NEW
                    </p>
                  </>
                )}
                {name}
              </Button>
            </Grid>
          </Grid>
        )
      })
    }

    const Other = () => {
      return projectsArr.map((project, index) => {
        const { name, isNew } = projectsObj[project]
        const style = getStyle({ project, index })
        return (
          <Button
            key={`project${project + index}`}
            style={{
              ...style,
              paddingTop: isPhone && '5px',
            }}
            onClick={() => {
              const newSelections = { ...selections }
              newSelections['projects'].project = index
              setSelections(newSelections)
            }}
            className={classesRoot.projectButton}>
            {isNew && (
              <>
                <Grid className={classesRoot.newBanner}>
                  <NewBanner
                    height={isPhone && 25}
                    width={isPhone ? 45 : 60}
                    color="white"
                  />
                </Grid>
                <p
                  style={{
                    position: 'absolute',
                    top: isPhone ? -1 : -4,
                    left: isPhone ? 8 : 10,
                    fontSize: isPhone ? '.5rem' : '.75rem',
                  }}>
                  NEW
                </p>
              </>
            )}
            {name}
          </Button>
        )
      })
    }

    return isPhoneLandscape ? <Landscape /> : <Other />
  }

  const MainDetails = () => {
    const { basic: basicDetails, technical: technicalDetails } = projectDetails

    const detailSelection = selections['projects'].details

    const BasicDetails = () => {
      const { lastUpdated, langLib, screenshots, questions, summary } =
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
                {convertData(lastUpdated)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Summary</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(summary)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Languages/Libraries/Applications</h4>
              </Grid>
              <Grid container>
                {langLib.map((item, index) => {
                  return (
                    <Grid
                      item
                      key={`langLib${item + index}`}
                      className={classesRoot.langLib}>
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
                <h4>Screenshots</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <Grid
                  container
                  justifyContent="center"
                  spacing={1}
                  className={classesRoot.screenshotContainer}>
                  {screenshots.map((screenshot, index) => {
                    return (
                      <Grid
                        key={`screenshot${screenshot + index}`}
                        item
                        className={classesRoot.screenshot}>
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
                {convertData(create)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Lessons Learnt</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(learn)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Biggest challenges</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(challenges)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }

    const TechnicalDetails = () => {
      const {
        hooks,
        methods,
        dependencies: dependenciesObj,
        questions,
        other,
      } = technicalDetails
      const { improved, change, future } = questions

      const Dependencies = () => {
        const dependencyArr = Object.keys(dependenciesObj)

        return dependencyArr.map((dependency, index) => {
          const dependencyObj = dependenciesObj[dependency]
          const dependencyArr = Object.keys(dependencyObj)
          const imageProps =
            dependency == 'next'
              ? { height: 30, width: 40 }
              : { height: 25, width: 25 }
          return (
            <Grid item key={dependency + index}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Grid container alignItems="center">
                    <h4>
                      {skillsObj[dependency]
                        ? skillsObj[dependency].name
                        : dependency}
                    </h4>
                  </Grid>
                </Grid>
                {skillsObj[dependency] && (
                  <Grid item>
                    <Image
                      layout="fixed"
                      {...imageProps}
                      src={skillsObj[dependency].image}
                    />
                  </Grid>
                )}
              </Grid>
              {dependencyArr.map((item, index) => {
                const { why } = dependencyObj
                const { why: subWhy } = dependencyObj[item]
                return (
                  <Grid key={`dependency1${(item, index)}`}>
                    {dependencyArr.length > 0 && item !== 'why' && (
                      <p>{`${item !== 'why' && item}${subWhy && ' - '}${
                        subWhy && subWhy
                      }`}</p>
                    )}
                    <p>{why && why}</p>
                  </Grid>
                )
              })}
            </Grid>
          )
        })
      }

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
                <h4>Dependencies</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                <Grid container direction="column" spacing={1}>
                  <Dependencies />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Methods</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(methods)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Hooks</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(hooks)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>Other</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(other)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography textAlign="center">Questions</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>
                  What areas of development have improved with this project?
                </h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(improved)}
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
                {convertData(change)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h4>What ideas do you have for the future of this project?</h4>
              </Grid>
              <Grid item className={classesRoot.text}>
                {convertData(future)}
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
        gridArea: '1/1/11/2',
        zIndex: 2,
        background: darkMode ? grey[700] : 'white',
      },

      header: {
        gridArea: '1/2/2/10',
        background: darkMode ? primaryColor : primaryLightColor,
      },
      mainContainer: {
        gridArea: '2/2/10/10',
        marginRight: `${hamburger.width + hamburger.padding}px`,
      },
      viewButtons: { background: 'brown' },
      hamburgerGap: {
        gridArea: '1/10/11/11',
        background: darkMode ? textDarkBackground : textLightBackground,
        zIndex: 1,
      },
    })
    const classes = useStyles()
    const Buttons = () => {
      return (
        <Grid className={classes.buttonContainer} container>
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
      header: {
        gridArea: '1/1/2/11',
        background: darkMode ? primaryColor : primaryLightColor,
      },
      mainContainer: { gridArea: '2/1/14/11' },
      projectButtons: {
        gridArea: '15/1/16/11',
        background: darkMode ? primaryColor : primaryLightColor,
        minWidth: '340px',
      },
      detailsButtons: {
        gridArea: '14/1/15/11',
        background: darkMode ? grey[700] : 'white',
      },
      hamburgerGap: {
        gridArea: '16/1/17/11',
      },
      hamburger: {
        gridArea: '1/2/3/3',
      },
      container: {
        height: '100%',
        width: '100%',
        background: darkMode ? textDarkBackground : backgroundColor,
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
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
      },
      container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(10,1fr)',
        gridTemplateRows: 'auto auto auto repeat(6,1fr) auto',
        zIndex: 1,
        ...mainContainerNormalStyle,
      },
      detailsButton: { color: 'black', flexGrow: 1 },
      projectButtonContainer: {
        gridArea: '1/1/2/11',
        background: darkMode ? primaryColor : primaryLightColor,
      },
      detailsButtonContainer: {
        gridArea: '2/1/3/11',
        background: darkMode ? textDarkBackground : 'white',
      },
      mainContainer: {
        gridArea: '3/1/10/11',
      },
      viewButtonsContainer: {
        gridArea: '10/1/11/11',
        background: darkMode ? primaryColor : primaryLightColor,
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
