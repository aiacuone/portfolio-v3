import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'
import MenuBookIcon from '@mui/icons-material/MenuBook'

export const aboutMeObj = {
  hobbies: {
    name: 'Hobbies',
    icon: SportsEsportsIcon,
    getDetails: () => {
      return <p>HOBBIES MAIN DETAILS</p>
    },
  },
  work: {
    name: 'Work',
    icon: WorkIcon,
    getDetails: () => {
      return <p>WORK MAIN DETAILS</p>
    },
  },
  details: {
    name: 'Details',
    icon: PersonIcon,
    getDetails: () => {
      return <p>DETAILS MAIN DETAILS</p>
    },
  },
  story: {
    name: 'Story',
    icon: MenuBookIcon,
    getDetails: () => {
      return <p>STORY MAIN DETAILS</p>
    },
  },
}

export const aboutMeArr = Object.keys(aboutMeObj).map((item) => item)
