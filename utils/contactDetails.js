import { images as contactImages } from '../public/images/contact'

function getContactObj() {
  const { email, linkedin, phone, gitHub } = contactImages

  const obj = {
    email: { name: 'Email', image: email },
    linkedin: { name: 'Linkedin', image: linkedin },
    phone: { name: 'Phone', image: phone },
    gitHub: { name: 'GitHub', image: gitHub },
  }

  return obj
}

export const contactsObj = getContactObj()

export const contactsArr = Object.keys(contactsObj).map((contact) => contact)
