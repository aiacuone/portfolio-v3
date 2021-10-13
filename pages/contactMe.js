import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'

const useStyles = makeStyles({})
const useStylesM = makeStyles({})

export default function contactMe() {
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

  return <Grid>CONTACT ME</Grid>
}
