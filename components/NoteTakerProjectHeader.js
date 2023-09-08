import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import logo from '../public/images/projectHeaders/noteTakerLogo.svg'
import Image from 'next/image'
import { UserContext } from '../utils/UserContext'

export default function NoteTakerProjectHeader() {
  const { state } = useContext(UserContext)
  const { isPhone } = state.phone

  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      background: '#272727',
      padding: isPhone ? '5px' : '10px',
    },
    imageContainer: {
      position: 'relative',
      height: '100%',
    },
  })

  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}>
      <Grid className={classes.imageContainer} container>
        <Image src={logo} layout="fill" alt="Logo Image" />
      </Grid>
    </Grid>
  )
}
