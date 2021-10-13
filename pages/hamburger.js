import React from 'react'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {},
  link: { padding: '10px 0', textAlign: 'center' },
})

export default function hamburger() {
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Link href="/">
          <h3 className={classes.link}>HOME</h3>
        </Link>
      </Grid>
      <Grid item>
        <Link href="projects">
          <h3 className={classes.link}>PROJECTS</h3>
        </Link>
      </Grid>
      <Grid item>
        <Link href="skills">
          <h3 className={classes.link}>SKILLS</h3>
        </Link>
      </Grid>
      <Grid item>
        <Link href="aboutMe">
          <h3 className={classes.link}>ABOUT ME</h3>
        </Link>
      </Grid>
      <Grid item>
        <Link href="contactMe">
          <h3 className={classes.link}>CONTACT ME</h3>
        </Link>
      </Grid>
    </Grid>
  )
}
