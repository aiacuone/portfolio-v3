import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { UserContext } from '../utils/UserContext'

const useStyles = makeStyles({
  root: {},
  phoneContainer: {},
})
const useStylesP = makeStyles({ phoneContainer: {} })

export default function aboutMe() {
  const { state } = useContext(UserContext)
  const { isPhone } = state.phone

  const classesP = useStylesP()
  const classes = useStyles()

  const Normal = () => {
    return <Grid className={classes.normalContainer}>ABOUT ME NORMAL</Grid>
  }

  const Phone = () => {
    return <Grid className={classesP.phoneContainer}>ABOUT ME PHONE</Grid>
  }

  return (
    <Grid className={classes.root}> {isPhone ? <Phone /> : <Normal />}</Grid>
  )
}
