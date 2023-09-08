import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

export default function Skills() {
  const theme = useTheme()
  const { state, vars, setState } = useContext(UserContext)
  const {
    hamburger,
    skillsObj,
    skillsArr,
    mainContainerNormalStyle,
    headerHeightPortrait,
    secondHeaderHeightPortrait,
    headerHeightLandscape,
    secondHeaderHeightLandscape,
    mainContainerPadding,
    mainContentNormalStyle,
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
  const mainDetails = getDetails({ darkMode })

  const Buttons = ({ size }) => {
    const SkillsButton = ({ src, index }) => {
      const props = { height: size, width: size }
      return (
        <Grid
          onClick={() => setSelections({ ...selections, skills: index })}
          sx={{
            flexGrow: 1,
            cursor: 'pointer',
            height: '100%',
          }}
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
            sx={{ height: '100%' }}>
            <Image
              sx={{ zIndex: 1 }}
              src={src}
              layout="fixed"
              alt="Skill Button"
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
          <Grid container sx={{ height: '50%' }} justifyContent="space-around">
            {buttons1}
          </Grid>
          <Grid container sx={{ height: '50%' }} justifyContent="space-around">
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
          sx={{ padding: mainContainerPadding }}>
          <Typography>{mainDetails}</Typography>
        </Grid>
      </Grid>
    )
  }

  const Header = () => {
    return (
      <Grid container alignItems="center" spacing={1} justifyContent="center">
        <Grid item>
          <Image
            src={image}
            layout="fixed"
            height={70}
            width={70}
            alt="Header Image"
          />
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
        sx={{ width: '100%', height: '100%' }}>
        <Grid
          sx={{
            background: 'white',
            display: 'grid',
            gridTemplateColumns: 'repeat(10,1fr)',
            gridTemplateRows: 'auto repeat(8,1fr) 65px',
            zIndex: 1,
            ...mainContainerNormalStyle,
          }}>
          <Grid
            container
            sx={{
              background: darkMode ? textBackgroundDark : textBackgroundLight,
              gridArea: '1/1/10/11',
            }}
            justifyContent="center"
            alignItems="center">
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ ...mainContentNormalStyle }}>
              <Grid item sx={{ marginTop: '50px' }}>
                <Header />
              </Grid>

              <Grid item style={{ paddingTop: '20px' }}>
                <MainDetails />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              background: darkMode ? primaryColor : primaryLightColor,
              gridArea: '10/1/11/11',
            }}
            justifyContent="center">
            <Grid sx={{ maxWidth: '800px' }} container>
              <Buttons size={40} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    return (
      <Grid
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: `${headerHeightLandscape}px ${secondHeaderHeightLandscape}px repeat(7,1fr) 12px`,
          gridTemplateColumns: `repeat(9,1fr) ${
            hamburger.padding * 2 + hamburger.width
          }px`,
          background: darkMode ? textBackgroundDark : textBackgroundLight,
        }}>
        <Grid
          sx={{
            gridArea: '1/1/2/10',
            background: darkMode ? primaryColor : primaryLightColor,
          }}
          container
          justifyContent="center"
          alignItems="center">
          SKILLS
        </Grid>
        <Grid
          sx={{
            gridArea: '2/1/9/10',
            background: darkMode ? textBackgroundDark : textBackgroundLight,
            overflowY: 'scroll',
            padding: '20px',
          }}
          container
          justifyContent="center"
          alignItems="center">
          <MainDetails />
        </Grid>
        <Grid
          sx={{
            gridArea: '9/1/11/10',
            background: darkMode ? primaryColor : primaryLightColor,
            minWidth: '600px',
            flexWrap: 'nowrap',
          }}
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
      <Grid
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: `${headerHeightPortrait}px ${secondHeaderHeightPortrait}px repeat(16,1fr) 110px ${
            hamburger.padding * 2 + hamburger.width
          }px`,
          gridTemplateColumns: 'repeat(10,1fr)',
        }}>
        <Grid
          sx={{
            gridArea: '1/1/2/11',
            background: darkMode ? primaryColor : primaryLightColor,
          }}
          container
          justifyContent="center"
          alignItems="center">
          SKILLS
        </Grid>
        <Grid
          sx={{
            gridArea: '2/1/19/11',
            background: darkMode ? textBackgroundDark : textBackgroundLight,
            overflowY: 'scroll',
            padding: '10px',
          }}
          container
          justifyContent="center"
          alignItems="center">
          <MainDetails />
        </Grid>
        <Grid
          sx={{
            gridArea: '19/1/20/11',
            background: darkMode ? primaryColor : primaryLightColor,
            minWidth: '250px',
          }}
          container
          justifyContent="space-around"
          alignItems="center">
          <Buttons size={35} />
        </Grid>
        <Grid
          sx={{
            gridArea: '20/1/21/11',
            background: darkMode ? textBackgroundDark : textBackgroundLight,
          }}
        />
      </Grid>
    )
  }

  const Phone = () => {
    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid
      container
      sx={{
        height: '100%',
        width: '100%',
        color: darkMode ? 'white' : 'black',
      }}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
