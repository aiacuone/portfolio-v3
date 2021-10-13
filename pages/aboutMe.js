import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'

const useStylesM = makeStyles({})
const useStyles = makeStyles({})

export default function aboutMe() {
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

  return <Grid>ABOUT ME</Grid>
}
