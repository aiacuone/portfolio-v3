import { images as contactImages } from '../public/images/contact'

function getContactObj() {
  const { email, linkedin, phone, gitHub } = contactImages

  const obj = {
    email: { name: 'Email', image: email, link: 'mailto:aiacuone@gmail.com' },
    linkedin: {
      name: 'Linkedin',
      image: linkedin,
      link: 'https://www.linkedin.com/in/adrian-iacuone/',
    },
    phone: { name: 'Phone', image: phone, link: 'tel:07393961334' },
    gitHub: {
      name: 'GitHub',
      image: gitHub,
      link: 'https://github.com/aiacuone/',
    },
  }

  return obj
}

export const contactsObj = getContactObj()

export const contactsArr = Object.keys(contactsObj).map((contact) => contact)
