import { images as contactImages } from '../public/images/contact'
import {
  GitHubIcon,
  LinkedinIcon,
  EmailIcon,
  PhoneIcon,
} from '../components/icons'

function getContactObj() {
  const { email, linkedin, phone, gitHub } = contactImages

  const obj = {
    email: {
      name: 'Email',
      image: EmailIcon,
      link: 'mailto:aiacuone@gmail.com',
    },
    linkedin: {
      name: 'Linkedin',
      image: LinkedinIcon,
      link: 'https://www.linkedin.com/in/adrian-iacuone/',
    },
    phone: {
      name: 'Phone',
      image: PhoneIcon,
      link: 'tel:07393961334',
    },
    gitHub: {
      name: 'GitHub',
      image: GitHubIcon,
      link: 'https://github.com/aiacuone/',
    },
  }

  return obj
}

export const contactsObj = getContactObj()

export const contactsArr = Object.keys(contactsObj).map((contact) => contact)
