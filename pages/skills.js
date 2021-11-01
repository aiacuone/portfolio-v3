import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

export default function skills() {
  const theme = useTheme()
  const { state, vars, setState } = useContext(UserContext)
  const {
    hamburger,
    skillsObj,
    skillsArr,
    normalPageContainerDimensions: container,
    headerHeightPortrait,
    secondHeaderHeightPortrait,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
    mainContainerPadding,
  } = vars
  const { isPhone, isPhoneLandscape, isPhonePortrait } = state.phone
  const { selections, darkMode } = state
  const { setSelections } = setState
  const {
    textLight: textBackgroundLight,
    textDark: textBackgroundDark,
    paper: defaultBackground,
  } = theme.palette.background
  const selection = selections['skills']
  const selectedSkillObj = skillsObj[skillsArr[selection]]
  const { getDetails, image, name } = selectedSkillObj
  const {
    main: primaryColor,
    dark: primaryDarkColor,
    light: primaryLightColor,
  } = theme.palette.primary
  const { width, maxWidth, minWidth, height, maxHeight, minHeight } = container
  const mainDetails = getDetails()

  const useStylesRoot = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      color: darkMode ? 'white' : 'black',
    },
    buttonContainer: { height: '50%' },
    buttonContainer2: {},
    button: { zIndex: 1 },
    imageContainer: {
      flexGrow: 1,
      cursor: 'pointer',
      height: '100%',
      // zIndex: 1,
    },
    imageContainer2: {
      height: '100%',
    },
    mainDetailsContainer: {
      padding: mainContainerPadding,
      // fontSize: '20px',
    },
  })

  const classesRoot = useStylesRoot()

  const useStylesN = makeStyles({
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
      gridTemplateRows: 'auto repeat(8,1fr) 65px',
      zIndex: 1,
    },
    mainContainer: {
      background: darkMode ? textBackgroundDark : textBackgroundLight,
      gridArea: '1/1/10/11',
    },
    buttonContainer: {
      background: darkMode ? primaryColor : primaryLightColor,
      gridArea: '10/1/11/11',
    },
    buttonContainer2: {
      maxWidth: '800px', //WIDTH OF BUTTON CONTAINER
    },
  })
  const classesN = useStylesN()

  const useStylesL = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: `${headerHeightLandscape}px ${secondHeaderHeightLandscape}px repeat(7,1fr) 12px`,
      gridTemplateColumns: `repeat(9,1fr) ${
        hamburger.padding * 2 + hamburger.width
      }px`,
      background: darkMode ? textBackgroundDark : textBackgroundLight,
    },
    header: {
      gridArea: '1/1/2/10',
      background: darkMode ? primaryColor : primaryLightColor,
    },
    buttonContainer: {
      gridArea: '9/1/11/10',
      background: darkMode ? primaryColor : primaryLightColor,
      minWidth: '600px',
      flexWrap: 'nowrap',
    },
    container: {
      gridArea: '2/1/9/10',
      background: darkMode ? textBackgroundDark : textBackgroundLight,
      overflowY: 'scroll',
      padding: '20px',
    },
  })
  const classesL = useStylesL()

  const useStylesP = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(16,1fr) 110px ${
        hamburger.padding * 2 + hamburger.width
      }px`,
      gridTemplateColumns: 'repeat(10,1fr)',
    },
    header: {
      gridArea: '1/1/2/11',
      background: darkMode ? primaryColor : primaryLightColor,
    },
    mainContainer: {
      gridArea: '2/1/19/11',
      background: darkMode ? textBackgroundDark : textBackgroundLight,
    },
    buttonContainer: {
      gridArea: '19/1/20/11',
      background: darkMode ? primaryColor : primaryLightColor,
      minWidth: '250px',
    },
    hamburgerGap: {
      gridArea: '20/1/21/11',
      background: darkMode ? textBackgroundDark : textBackgroundLight,
    },
  })
  const classesP = useStylesP()

  const Buttons = ({ size }) => {
    const SkillsButton = ({ src, index }) => {
      const props = { height: size, width: size }
      return (
        <Grid
          onClick={() => setSelections({ ...selections, skills: index })}
          s
          className={classesRoot.imageContainer}
          style={{
            background:
              index == selection && darkMode
                ? primaryDarkColor
                : index == selection && !darkMode
                ? primaryColor
                : 'null',
          }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classesRoot.imageContainer2}>
            <Image
              className={classesRoot.button}
              src={src}
              layout="fixed"
              {...props}
            />
          </Grid>
        </Grid>
      )
    }

    const Portrait = () => {
      const buttons1 = skillsArr.map((skill, index) => {
        const { image, name } = skillsObj[skill]
        if (index >= skillsArr.length / 2) return
        return <SkillsButton index={index} src={image} key={name + index} />
      })

      const buttons2 = skillsArr.map((skill, index) => {
        const { image, name } = skillsObj[skill]
        if (index < skillsArr.length / 2) return
        return <SkillsButton index={index} src={image} key={name + index} />
      })

      return (
        <>
          <Grid
            container
            className={classesRoot.buttonContainer}
            justifyContent="space-around">
            {buttons1}
          </Grid>
          <Grid
            container
            className={classesRoot.buttonContainer}
            justifyContent="space-around">
            {buttons2}
          </Grid>
        </>
      )
    }
    const Other = () => {
      return skillsArr.map((skill, index) => {
        const { image, name } = skillsObj[skill]
        return (
          <SkillsButton index={index} src={image} key={name + index + index} />
        )
      })
    }
    return isPhonePortrait ? <Portrait /> : <Other />
  }

  const MainDetails = () => {
    return (
      <Grid container justifyContent="center">
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {isPhone && <Header />}
        </Grid>
        <Grid
          container
          justifyContent="center"
          className={classesRoot.mainDetailsContainer}>
          <Typography>{mainDetails}</Typography>
        </Grid>
      </Grid>
    )
  }

  const Header = () => {
    return (
      <Grid container alignItems="center" spacing={1} justifyContent="center">
        <Grid item>
          <Image src={image} layout="fixed" height={70} width={70} />
        </Grid>
        <Grid item>
          <Typography variant="h5">{name}</Typography>
        </Grid>
      </Grid>
    )
  }

  const Normal = () => {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classesN.root}>
        <Grid className={classesN.container}>
          <Grid
            container
            className={classesN.mainContainer}
            justifyContent="center"
            alignItems="center">
            <Grid container alignItems="center" justifyContent="center">
              <Header />
              <MainDetails />
            </Grid>
          </Grid>
          <Grid
            container
            className={classesN.buttonContainer}
            justifyContent="center">
            <Grid className={classesN.buttonContainer2} container>
              <Buttons size={40} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    return (
      <Grid className={classesL.root}>
        <Grid
          className={classesL.header}
          container
          justifyContent="center"
          alignItems="center">
          SKILLS
        </Grid>
        <Grid
          className={classesL.container}
          container
          justifyContent="center"
          alignItems="center">
          <MainDetails />
        </Grid>
        <Grid
          className={classesL.buttonContainer}
          container
          justifyContent="space-around"
          alignItems="center">
          <Buttons size={35} />
        </Grid>
      </Grid>
    )
  }

  const Portrait = () => {
    return (
      <Grid className={classesP.root}>
        <Grid
          className={classesP.header}
          container
          justifyContent="center"
          alignItems="center">
          SKILLS
        </Grid>
        <Grid
          className={classesP.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          <MainDetails />
        </Grid>
        <Grid
          className={classesP.buttonContainer}
          container
          justifyContent="space-around"
          alignItems="center">
          <Buttons size={35} />
        </Grid>
        <Grid className={classesP.hamburgerGap} />
      </Grid>
    )
  }

  const Phone = () => {
    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
