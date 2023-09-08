import { useState } from 'react'
import Head from 'next/head'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import NextLink from 'next/link'
import { UserContext } from '../utils/UserContext'
import { useContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { selfie } from '../public/images/home'
import Image from 'next/image'
import { LondonIcon, NextIcon } from '../components/icons'
import { useTheme } from '@mui/material/styles'
import { PortfolioComponent } from '../public/images/misc/home'
import ReactResizeDetector from 'react-resize-detector'
import { Link } from '@mui/material'

export default function Home() {
  const { state, setState, vars } = useContext(UserContext)
  const { isPhone, isPhonePortrait, isPhoneLandscape } = state.phone
  const { darkMode } = state
  const { setDarkMode } = setState
  const { contactsArr, contactsObj, skillsObj } = vars
  const theme = useTheme()
  const { light: primaryLight, main: primaryMain } = theme.palette.primary

  const useStylesRoot = makeStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    linkContainer: { zIndex: 2 },
    link: { padding: '10px 0', textAlign: 'center', cursor: 'pointer' },
    normalContainer: {},
  })

  const classesRoot = useStylesRoot()

  const Hero = () => {
    const height = isPhone ? 250 : 250
    const width = isPhone ? 150 : 180
    const gap = 5
    const borderRadius = 20
    const fontSize = isPhone ? 15 : 17
    const useStyles = makeStyles({
      root: {
        width: `${width}px`,
        height: `${height}px`,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
      },
      portfolioContainer: {
        position: 'relative',
        gridArea: '1/1/2/2',
        marginBottom: `${gap}px`,
      },
      container: {
        position: 'relative',
        height: '100%',
        background: 'orange',
        width: '100%',
      },
      nameContainer: {
        position: 'relative',
        gridArea: '3/1/4/2',
        marginTop: `${gap}px`,
      },
      nameContainer2: {
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      buttonContainer: {},
      button: {
        gridArea: '2/1/3/2',
        flexGrow: 1,
        padding: `${gap}px 0`,
        cursor: 'pointer',
        zIndex: 1,
      },
      buttonContainer2: {
        background: darkMode ? primaryMain : primaryLight,
        height: '100%',
        width: '100%',
        fontSize: `${fontSize}px`,
      },
    })

    const classes = useStyles()

    const Buttons = () => {
      const obj = {
        Projects: { link: '/projects' },
        Skills: { link: '/skills' },
        'About Me': { link: '/aboutMe' },
        'Contact Me': { link: '/contactMe' },
        darkMode: { link: '/skills' },
      }
      const arr = Object.keys(obj)
      const buttons = arr.map((button, index) => {
        const { link } = obj[button]
        const style = {
          borderTopRightRadius: index == 0 && `${borderRadius}px`,
          borderTopLeftRadius: index == 0 && `${borderRadius}px`,
          borderBottomLeftRadius:
            index == arr.length - 1 && `${borderRadius}px`,
          borderBottomRightRadius:
            index == arr.length - 1 && `${borderRadius}px`,
        }

        if (button == 'darkMode') {
          return (
            <Grid
              key={button + index}
              item
              className={classes.button}
              onClick={() => setDarkMode(!darkMode)}>
              <Grid
                container
                style={style}
                className={classes.buttonContainer2}
                justifyContent="center"
                alignItems="center">
                <Brightness4Icon fontSize="small" />
              </Grid>
            </Grid>
          )
        }

        return (
          <NextLink href={link} key={button + index}>
            <Link
              item
              className={classes.button}
              sx={{ textDecoration: 'none', color: 'black' }}>
              <Grid
                container
                style={style}
                className={classes.buttonContainer2}
                justifyContent="center"
                alignItems="center">
                {button}
              </Grid>
            </Link>
          </NextLink>
        )
      })
      return (
        <Grid container direction="column">
          {buttons}
        </Grid>
      )
    }
    return (
      <Grid className={classes.root} container>
        <ReactResizeDetector handleWidth handleHeight>
          {({ width, height }) => {
            return (
              <Grid container className={classes.portfolioContainer}>
                <PortfolioComponent
                  width={width}
                  height={height}
                  color={darkMode ? 'white' : 'black'}
                />
              </Grid>
            )
          }}
        </ReactResizeDetector>
        <Grid container className={classes.buttonContainer}>
          <Buttons />
        </Grid>
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
          <Image responsive src={selfie} alt="Self Image" />
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
          <NextLink href={link}>
            <a target="_blank">
              <Icon size={size} color="grey" />
            </a>
          </NextLink>
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
            <Image
              height={size}
              width={size}
              layout="fixed"
              src={src}
              alt="Skills Image"
            />
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
        className={classesRoot.normalContainer}>
        <Hero />
      </Grid>
    )
  }

  const Phone = () => {
    const useStyles = makeStyles({
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
        left: isPhonePortrait ? -70 : -160,
        top: 10,
      },
    })
    const classes = useStyles()
    return (
      <Grid
        container
        className={classes.phoneContainer}
        justifyContent="center"
        alignItems="center">
        <Grid className={classes.skills}>
          <SkillsButtons size={30} />
        </Grid>
        <Grid className={classes.london}>
          <Grid container className={classes.londonContainer}>
            <p className={classes.londonText}>London, UK</p>
            <LondonIcon height={isPhonePortrait ? 180 : 110} color="grey" />
          </Grid>
        </Grid>
        <Grid className={classes.me}>
          <Selfie width={isPhonePortrait ? 300 : 250} />
        </Grid>
        <Grid className={classes.links}>
          <ContactButtons size={35} />
        </Grid>
        <Hero />
      </Grid>
    )
  }

  return (
    <Grid container className={classesRoot.root}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isPhone ? <Phone /> : <Normal />}
    </Grid>
  )
}
