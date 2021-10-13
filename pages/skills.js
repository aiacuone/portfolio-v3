import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'

export default function skills() {
  const useStyles = makeStyles({
    root: { height: '100%', width: '100%', background: 'red' },
    header: {},
    projectsButtons: {},
    detailsButtons: {},
    mainContainer: {},
    viewButtons: {},
    hamburger: {},
  })
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      SKILLS
    </Grid>
  )
}
