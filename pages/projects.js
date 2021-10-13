import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStylesMobile = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
  mobileContainer: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: 'repeat(10,1fr)',
    gridTemplateRows: '25px 50px repeat(10,1fr) 45px 45px 45px 60px',
  },
  header: { gridArea: '1/1/2/11' },
  projectHeader: { gridArea: '2/1/3/11', background: 'orange' },
  mainContainer: { gridArea: '3/1/13/11', background: 'grey' },
  projectButtons: { gridArea: '13/1/14/11', background: 'purple' },
  detailsButtons: { gridArea: '14/1/15/11', background: 'yellow' },
  viewButtons: { gridArea: '15/1/16/11', background: 'brown' },
  hamburgerGap: { gridArea: '16/1/17/11', background: 'blue' },
})

const useStylesM = makeStyles({})

export default function projects() {
  const { state } = useContext(UserContext)
  const { isPhone } = state.phone

  const classesM = useStylesMobile()

  const Phone = () => {
    return (
      <Grid className={classesM.mobileContainer}>
        <Grid className={classesM.header} container justifyContent="center">
          PROJECTS
        </Grid>
        <Grid className={classesM.projectButtons}>PROJECT BUTTONS</Grid>
        <Grid className={classesM.detailsButtons}>DETAIL BUTTONS</Grid>
        <Grid className={classesM.projectHeader}>PROJECT HEADER</Grid>
        <Grid className={classesM.mainContainer}>MAIN CONTAINER</Grid>
        <Grid className={classesM.viewButtons}>VIEW BUTTONS</Grid>
        <Grid className={classesM.hamburgerGap}></Grid>
      </Grid>
    )
  }

  const Normal = () => {
    return <Grid></Grid>
  }

  return (
    <Grid className={classesM.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
