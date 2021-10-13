import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStyles = makeStyles({
  root: { height: '100%', width: '100%' },
  normalContainer: { height: '100%', width: '100%' },
})

const useStylesP = makeStyles({
  phoneContainer: { height: '100%', width: '100%' },
})

export default function skills() {
  const classes = useStyles()
  const classesP = useStylesP()

  const { state } = useContext(UserContext)
  const { isPhone } = state.phone

  const Normal = () => {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.normalContainer}>
        SKILLS NORMAL
      </Grid>
    )
  }

  const Phone = () => {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classesP.phoneContainer}>
        SKILLS PHONE
      </Grid>
    )
  }

  return (
    <Grid container className={classes.root}>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
