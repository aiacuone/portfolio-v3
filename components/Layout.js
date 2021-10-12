import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { UserContext } from '../utils/UserContext'

export default function Layout({ children }) {
  const { state } = useContext(UserContext)
  const { isPhone } = state

  const useStyles = makeStyles({
    root: {
      background: isPhone ? 'green' : 'blue',
      // height: '100%',
    },
  })

  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}>
      test
      {children}
    </Grid>
  )
}
