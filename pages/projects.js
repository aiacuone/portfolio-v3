import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

export default function projects() {
  const { state } = useContext(UserContext)
  const { windowHeight } = state

  const useStyles = makeStyles({
    root: {
      display: 'grid',
      height: '100%',
      // height: windowHeight,
      width: '100%',
      gridTemplateColumns: 'repeat(10,1fr)',
      gridTemplateRows: '30px 50px 50px 100px repeat(10,1fr) 50px 70px',
    },
    header: {},
    projectButtons: { gridArea: '1/1/2/11', background: 'blue' },
    detailsButtons: { gridArea: '2/1/3/11', background: 'orange' },
    projectHeader: { gridArea: '3/1/4/11', background: 'grey' },
    mainContainer: { gridArea: '4/1/15/11', background: 'purple' },
    viewButtons: { gridArea: '15/1/16/11', background: 'yellow' },
    hamburgerGap: { gridArea: '16/1/17/11', background: 'lime' },
  })

  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid className={classes.header}></Grid>
      <Grid className={classes.projectButtons}></Grid>
      <Grid className={classes.detailsButtons}></Grid>
      <Grid className={classes.projectHeader}></Grid>
      <Grid className={classes.mainContainer}></Grid>
      <Grid className={classes.viewButtons}></Grid>
      <Grid className={classes.hamburgerGap}></Grid>
      {/* PROJECTS */}
    </Grid>
  )
}
