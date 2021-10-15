import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'
import email from '../public/images/email.svg'
import linkedin from '../public/images/linkedin.svg'
import phone from '../public/images/phone.svg'
import gitHub from '../public/images/gitHub.svg'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
})

export default function contactMe() {
  const classesRoot = useStylesRoot()

  const buttonColor = 'white'
  const buttonsObj = {
    phone: { name: 'Phone', image: phone },
    linkedIn: { name: 'Linkedin', image: linkedin },
    github: { name: 'GitHub', image: gitHub },

    email: { name: 'Email', image: email },
  }

  const buttonsArr = Object.keys(buttonsObj).map((button) => {
    return button
  })

  const { state, vars } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone
  const { hamburger } = vars

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
        CONTACT ME NORMAL
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
          gridTemplateRows: '30px  repeat(8,1fr)',
          gridTemplateColumns: `80px repeat(8,1fr) ${
            hamburger.padding * 2 + hamburger.width
          }px`, //WIDTH OF BUTTON CONTAINER
        },
        buttonContainer: {
          gridArea: '1/1/11/2',
          background: 'blue',
        },
        header: {
          gridArea: '1/2/2/11',
          background: 'orange',
        },
        mainContainer: {
          gridArea: '2/2/11/10',
          background: 'grey',
        },
        hamburgerGap: {
          gridArea: '2/10/11/11',
          background: 'lime',
        },
        button: {},
      })
      const classes = useStyles()

      const buttons = buttonsArr.map((button) => {
        return (
          <Image
            className={classes.button}
            src={buttonsObj[button].image}
            // src={icon}
            layout="fixed"
            width={40}
            height={40}
            alt=""
          />
        )
      })
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>CONTACT ME</Grid>
          <Grid
            justifyContent="space-around"
            alignItems="center"
            className={classes.buttonContainer}
            container
            direction="column">
            {buttons}
          </Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid className={classes.hamburgerGap}></Grid>
        </Grid>
      )
    }

    const Portrait = () => {
      const useStyles = makeStyles({
        root: {
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: `20px 30px repeat(16,1fr) 70px ${
            hamburger.padding * 2 + hamburger.width
          }px `,
          gridTemplateColumns: 'repeat(10,1fr)',
        },
        header: {
          gridArea: '1/1/2/11',
          background: 'blue',
        },
        mainContainer: {
          gridArea: '2/1/19/11',
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
      })
      const classes = useStyles()

      const buttons = buttonsArr.map((button) => {
        return (
          <Image
            className={classes.button}
            src={buttonsObj[button].image}
            layout="fixed"
            width={40}
            height={40}
            alt=""
          />
        )
      })
      return (
        <Grid className={classes.root}>
          <Grid className={classes.header}>CONTACT ME</Grid>
          <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
          <Grid
            className={classes.buttonContainer}
            container
            justifyContent="space-around"
            alignItems="center">
            {buttons}
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
