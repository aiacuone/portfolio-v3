import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import { UserContext } from '../utils/UserContext'
import { useContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { selfie } from '../public/images/home'
import Image from 'next/image'
import { LondonIcon, NextIcon } from '../components/icons'
import { useTheme } from '@mui/material/styles'

export default function Home() {
  const { state, setState, vars } = useContext(UserContext)
  const { isPhone, isPhonePortrait, isPhoneLandscape } = state.phone
  const { darkMode } = state
  const { setDarkMode } = setState
  const { contactsArr, contactsObj, skillsObj } = vars
  const theme = useTheme()

  const useStyles = makeStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    normalContainer: {},
  })

  const useStylesP = makeStyles({
    me: {
      position: 'absolute',
      bottom: 0, //THESE VALUES SET TO 10 DUE TO PADDING/MARGIN ISSUES
      left: isPhonePortrait ? -145 : -120,
    },
    london: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    links: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    skills: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    linkContainer: { zIndex: 2 },
    link: { padding: '10px 0', textAlign: 'center', cursor: 'pointer' },

    phoneContainer: {
      height: '100%',
      width: '100%',
    },
    normalContainer: {
      height: '100%',
      width: '100%',
    },
    londonContainer: {
      position: 'relative',
    },
    londonText: {
      position: 'absolute',
      whiteSpace: 'nowrap',
      left: isPhonePortrait ? -100 : -110,
      top: 5,
    },
  })

  const classes = useStyles()
  const classesP = useStylesP()

  const Links = () => {
    return (
      <Grid
        className={classesP.linkContainer}
        alignItems="center"
        direction="column">
        <Grid item>
          <Link href="projects">
            <h3 className={classesP.link}>PROJECTS</h3>
          </Link>
        </Grid>
        <Grid item>
          <Link href="skills">
            <h3 className={classesP.link}>SKILLS</h3>
          </Link>
        </Grid>
        <Grid item>
          <Link href="aboutMe">
            <h3 className={classesP.link}>ABOUT ME</h3>
          </Link>
        </Grid>
        <Grid item>
          <Link href="contactMe">
            <h3 className={classesP.link}>CONTACT ME</h3>
          </Link>
        </Grid>
        <DarkMode />
      </Grid>
    )
  }

  const DarkMode = () => {
    return (
      <Grid container justifyContent="center">
        <Brightness4Icon
          fontSize="large"
          style={{ cursor: 'pointer', margin: '10px' }}
          onClick={() => setDarkMode(!darkMode)}
        />
      </Grid>
    )
  }

  const Selfie = ({ width }) => {
    const style = {
      width: width,
      filter: `brightness(${darkMode ? '50%' : '100%'})`,
      height: '100%',
    }

    return (
      <Grid style={{ position: 'relative' }} item>
        <p
          style={{
            position: 'absolute',
            bottom: 55,
            right: isPhonePortrait ? 10 : -15,
            zIndex: 2,
          }}>
          Adrian Iacuone
        </p>
        <Grid container alignItems="flex-end" style={style}>
          <Image responsive src={selfie} />
        </Grid>
      </Grid>
    )
  }

  const ContactButtons = ({ size }) => {
    const icons = contactsArr.map((contact, index) => {
      const { image, link } = contactsObj[contact]
      const Icon = image
      return (
        <Grid item key={`contactButton${contact + index} `}>
          <Link href={link}>
            <a target="_blank">
              <Icon size={size} color="grey" />
            </a>
          </Link>
        </Grid>
      )
    })

    return (
      <Grid
        container
        spacing={3}
        direction={isPhoneLandscape ? 'row' : 'column'}>
        {icons}
      </Grid>
    )
  }

  const SkillsButtons = ({ size }) => {
    const arr = ['react', 'javaScript', 'next', 'material', 'git']
    const icons = arr.map((skill, index) => {
      const src = skillsObj[skill].image

      return (
        <Grid item key={`skillButton${skill + index}`}>
          {skill == 'next' ? (
            <NextIcon size={size} color={darkMode ? 'white' : 'black'} />
          ) : (
            <Image height={size} width={size} layout="fixed" src={src} />
          )}
        </Grid>
      )
    })

    return (
      <Grid
        container
        spacing={2}
        direction={isPhoneLandscape ? 'row' : 'column'}>
        {icons}
      </Grid>
    )
  }

  const Normal = () => {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.normalContainer}>
        <Links />
      </Grid>
    )
  }

  const Phone = () => {
    return (
      <Grid
        container
        className={classesP.phoneContainer}
        justifyContent="center"
        alignItems="center">
        <Grid className={classesP.skills}>
          <SkillsButtons size={30} />
        </Grid>
        <Grid className={classesP.london}>
          <Grid container className={classesP.londonContainer}>
            <p className={classesP.londonText}>South London, UK</p>
            <LondonIcon height={isPhonePortrait ? 180 : 110} color="grey" />
          </Grid>
        </Grid>
        <Grid className={classesP.me}>
          <Selfie width={isPhonePortrait ? 300 : 250} />
        </Grid>
        <Grid className={classesP.links}>
          <ContactButtons size={35} />
        </Grid>
        <Links />
      </Grid>
    )
  }

  return (
    <Grid container className={classes.root}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
