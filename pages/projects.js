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
      gridTemplateRows: '25px 50px repeat(10,1fr) 45px 45px 45px 60px',
    },
    header: { gridArea: '1/1/2/11', background: 'blue' },
    projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
    mainContainer: { gridArea: '3/1/13/11', background: 'grey' },
    projectButtons: { gridArea: '13/1/14/11', background: 'purple' },
    detailsButtons: { gridArea: '14/1/15/11', background: 'yellow' },
    viewButtons: { gridArea: '15/1/16/11', background: 'brown' },
    hamburgerGap: { gridArea: '16/1/17/11', background: 'lime' },
  })

  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid className={classes.header}>HEADER</Grid>
      <Grid className={classes.projectButtons}>PROJECT BUTTONS</Grid>
      <Grid className={classes.detailsButtons}>DETAIL BUTTONS</Grid>
      <Grid className={classes.projectHeader}>PROJECT HEADER</Grid>
      <Grid className={classes.mainContainer}>MAIN CONTAINER</Grid>
      <Grid className={classes.viewButtons}>VIEW BUTTONS</Grid>
      <Grid className={classes.hamburgerGap}></Grid>
      {/* PROJECTS */}
    </Grid>
  )
}
