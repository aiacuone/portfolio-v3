import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { images } from '../public/images/aboutMe'

const { hobbies, work, details, story } = images

export const aboutMeObj = {
  hobbies: {
    name: 'Hobbies',
    icon: hobbies,
    getDetails: () => {
      return <p>HOBBIES MAIN DETAILS</p>
    },
  },
  work: {
    name: 'Work',
    icon: work,
    getDetails: () => {
      return <p>WORK MAIN DETAILS</p>
    },
  },
  details: {
    name: 'Details',
    icon: details,
    getDetails: () => {
      return <p>DETAILS MAIN DETAILS</p>
    },
  },
  story: {
    name: 'Story',
    icon: story,
    getDetails: () => {
      return <p>STORY MAIN DETAILS</p>
    },
  },
}

export const aboutMeArr = Object.keys(aboutMeObj).map((item) => item)
