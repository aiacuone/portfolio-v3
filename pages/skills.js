import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'

const useStyles = makeStyles({
  root: { height: '100%', width: '100%', background: 'red' },
  header: {},
  projectsButtons: {},
  detailsButtons: {},
  mainContainer: {},
  viewButtons: {},
  hamburger: {},
})

const useStylesM = makeStyles({})

export default function skills() {
  const classes = useStyles()

  const { state } = useContext(UserContext)
  const { isPhone } = state.phone

  const classesM = useStylesM()
  const classes = useStyles()

  const Mobile = () => {
    return <Grid></Grid>
  }

  const Phone = () => {
    return <Grid></Grid>
  }

  {
    isPhone ? <Phone /> : <Normal />
  }

  return (
    <Grid container className={classes.root}>
      SKILLS
    </Grid>
  )
}
