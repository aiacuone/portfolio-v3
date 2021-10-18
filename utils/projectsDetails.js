export const projectsObj = {
  cheapshark: {
    name: 'Cheapshark',
    new: true,
    details: {
      basic: () => <p> CHEAPSHARK BASIC DETAILS</p>,
      technical: () => <p> 'CHEAPSHARK TECHNICAL DETAILS</p>,
    },
  },
  TekkenNet: {
    name: 'Tekken-Net',
    new: true,
    details: {
      basic: () => <p> TEKKEN NET BASIC DETAILS</p>,
      technical: () => <p> TEKKEN NET TECHNICAL DETAILS</p>,
    },
  },
  noteTaker: {
    name: 'Note Taker',
    new: false,
    details: {
      basic: () => <p> NOTE TAKER BASIC DETAILS</p>,
      technical: () => <p> NOTE TAKER TECHNICAL DETAILS</p>,
    },
  },
}

export const projectsArr = Object.keys(projectsObj).map((project) => project)
