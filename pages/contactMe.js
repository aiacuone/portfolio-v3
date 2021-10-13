import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStyles = makeStyles({
  root: {},
  normalContainer: {},
})
const useStylesP = makeStyles({
  phoneContainer: {},
})

export default function contactMe() {
  const { state } = useContext(UserContext)
  const { isPhone } = state.phone
  const classesP = useStylesP()
  const classes = useStyles()

  const Normal = () => {
    return <Grid className={classes.normalContainer}>CONTACT ME NORMAL</Grid>
  }

  const Phone = () => {
    return <Grid className={classesP.phoneContainer}>CONTACT ME PHONE</Grid>
  }

  return (
    <Grid className={classes.root}>{isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
