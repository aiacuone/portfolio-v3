import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'
import Image from 'next/image'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
  // button: { margin: '10px 0', background: 'red' },
})

export default function contactMe() {
  const classesRoot = useStylesRoot()

  const { state, vars } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone
  const { hamburger, contactsArr, contactsObj, secondHeaderHeightPortrait } =
    vars

  const Buttons = ({ size }) => {
    const props = { height: size, width: size }
    return contactsArr.map((item) => {
      const { image } = contactsObj[item]
      return (
        <Image
          className={classesRoot.button}
          src={image}
          layout="fixed"
          {...props}
        />
      )
    })
  }

  const Normal = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
      },
      container: {
        height: '400px',
        width: '400px',
        background: 'white',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '100%',
      },
      mainContainer: { gridArea: '2/1/3/2', background: 'grey' },
      buttonContainer: {
        gridArea: '3/1/4/2',
        background: 'orange',
        padding: '10px 0',
      },
      header: {
        gridArea: '1/1/2/2',
        background: 'purple',
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
            className={classes.header}
            justifyContent="center"
            alignItems="center">
            CONTACT ME
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
            className={classes.buttonContainer}
            justifyContent="space-around">
            <Buttons size={40} />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const Landscape = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: `${secondHeaderHeightPortrait}px  repeat(8,1fr)`,
        gridTemplateColumns: `80px repeat(8,1fr) ${
          hamburger.padding * 2 + hamburger.width
        }px`, //WIDTH OF BUTTON CONTAINER
      },
      buttonContainer: {
        gridArea: '1/1/11/2',
        background: 'blue',
      },
      header: {
        gridArea: '1/2/2/10',
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

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          CONTACT ME
        </Grid>
        <Grid
          justifyContent="space-around"
          alignItems="center"
          className={classes.buttonContainer}
          container
          direction="column">
          <Buttons size={35} />
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          MAIN CONTAINER
        </Grid>
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
        gridTemplateRows: `${secondHeaderHeightPortrait}px 30px repeat(16,1fr) 45px ${
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

    return (
      <Grid className={classes.root}>
        <Grid
          className={classes.header}
          container
          justifyContent="center"
          alignItems="center">
          CONTACT ME
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="center"
          alignItems="center">
          MAIN CONTAINER
        </Grid>
        <Grid
          className={classes.buttonContainer}
          container
          justifyContent="space-around"
          alignItems="center">
          <Buttons size={30} />
        </Grid>
        <Grid className={classes.hamburgerGap} />
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
