import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStylesRoot = makeStyles({
  root: { height: '100%', width: '100%' },
})

export default function contactMe() {
  const classesRoot = useStylesRoot()

  const { state } = useContext(UserContext)
  const { isPhone, isPhoneLandscape } = state.phone

  const Normal = () => {
    const useStyles = makeStyles({
      root: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'repeat(10,1fr)',
        gridTemplateColumns: 'repeat(10,1fr)',
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
          gridTemplateRows: 'repeat(10,1fr)',
          gridTemplateColumns: 'repeat(10,1fr)',
        },
      })
      const classes = useStyles()
      return <Grid className={classes.root}>Phone Landscape</Grid>
    }

    const Portrait = () => {
      const useStyles = makeStyles({
        root: {
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: 'repeat(10,1fr)',
          gridTemplateColumns: 'repeat(10,1fr)',
        },
      })
      const classes = useStyles()
      return <Grid className={classes.root}>Phone Portrait</Grid>
    }

    return isPhoneLandscape ? <Landscape /> : <Portrait />
  }

  return (
    <Grid container className={classesRoot.root}>
      CONTACT ME
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
