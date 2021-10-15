import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
})

export default function skills() {
  const classesRoot = useStylesRoot()

  const { state, vars } = useContext(UserContext)
  const { hamburger, skillsObj, skillsArr } = vars
  const { isPhone, isPhoneLandscape } = state.phone

  const Normal = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
      },
    })
    const classes = useStyles()
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        SKILLS NORMAL
      </Grid>
    )
  }

  const Phone = () => {
    const Landscape = () => {
      const useStyles = makeStyles({
        root: {
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: '20px 30px repeat(8,1fr)',
          gridTemplateColumns: 'repeat(10,1fr)',
        },
        header: {
          gridArea: '1/1/2/11',
          background: 'red',
        },
        projectHeader: {
          gridArea: '2/1/3/11',
          background: 'purple',
        },
        buttonContainer: {
          gridArea: '9/1/11/11',
          background: 'blue',
        },
      })
      const classes = useStyles()

      const buttons = skillsArr.map((skill) => {
        const skillObj = skillsObj[skill]
        return (
          <Image src={skillObj.image} layout="fixed" height={35} width={35} />
        )
      })
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>SKILLS</Grid>
          <Grid className={classes.projectHeader}>SKILL HEADER</Grid>
          <Grid
            className={classes.buttonContainer}
            container
            justifyContent="space-around"
            alignItems="center">
            {buttons}
          </Grid>
        </Grid>
      )
    }

    const Portrait = () => {
      const useStyles = makeStyles({
        root: {
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: `20px 30px repeat(16,1fr) 110px ${
            hamburger.padding * 2 + hamburger.width
          }px`,
          gridTemplateColumns: 'repeat(10,1fr)',
        },
        header: {
          gridArea: '1/1/2/11',
          background: 'blue',
        },
        projectHeader: {
          gridArea: '2/1/3/11',
          background: 'purple',
        },
        mainContainer: {
          gridArea: '3/1/19/11',
          background: 'orange',
        },
        buttonContainer: {
          gridArea: '19/1/20/11',
          background: 'yellow',
        },
        hamburgerGap: {
          gridArea: '20/1/21/11',
          background: 'brown',
        },
        buttonContainer1: {},
        buttonContainer2: {},
      })
      const classes = useStyles()

      const Buttons = () => {
        const buttons1 = skillsArr.map((skill, index) => {
          const skillObj = skillsObj[skill]
          if (index >= skillsArr.length / 2) return
          return (
            <Image src={skillObj.image} layout="fixed" height={35} width={35} />
          )
        })

        const buttons2 = skillsArr.map((skill, index) => {
          const skillObj = skillsObj[skill]
          if (index < skillsArr.length / 2) return
          return (
            <Image src={skillObj.image} layout="fixed" height={35} width={35} />
          )
        })

        return (
          <>
            <Grid
              container
              className={classes.buttonContainer1}
              justifyContent="space-around">
              {buttons1}
            </Grid>
            <Grid
              container
              className={classes.buttonContainer2}
              justifyContent="space-around">
              {buttons2}
            </Grid>
          </>
        )
      }
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>SKILLS</Grid>
          <Grid className={classes.projectHeader}>SKILL HEADER</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid
            className={classes.buttonContainer}
            container
            justifyContent="space-around"
            alignItems="center">
            <Buttons />
          </Grid>
          <Grid className={classes.hamburgerGap} />
        </Grid>
      )
    }

    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid container className={classesRoot.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
