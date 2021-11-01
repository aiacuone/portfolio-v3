import { screenshots } from '../public/images/screenshots'
const {
  cheapshark1,
  cheapshark2,
  noteTaker1,
  noteTaker2,
  tekkenNet1,
  tekkenNet2,
} = screenshots

export const projectsObj = {
  cheapshark: {
    name: 'Cheapshark',
    isNew: true,
    internalName: 'cheapshark',
    projectLink: 'https://aiacuone-cheapshark-api.netlify.app/',
    projectGitHubLink: 'https://github.com/aiacuone/Cheapshark',
    details: {
      basic: {
        lastUpdated: 'October, 2021',
        summary:
          'Uses an API to get the latest deals for online games across multiple online stores.',
        langLib: [
          'react',
          'javaScript',
          'next',
          'material',
          'git',
          'gitHub',
          'css',
          'html',
          'OOP',
          'lodash',
          'illustrator',
        ],
        screenshots: [cheapshark1, cheapshark2],
        areas: ['area1', 'area2', 'area3'],
        questions: {
          create: 'To get experience and understanding of APIs.',
          learn: [
            'Asynchronous coding can be very important when dealing with APIs',
            'It can be difficult resizing react components from Front-End libraries, the React Resize Detector component can help',
            `APIs are not always versatile`,
          ],

          challenges:
            'Ideally the API would fetch all the data at once and the required data is filtered, however the API used within the application is restricted in a way where you can only fetch a single page at a time. To overcome this problem, asynchronous functions are automatically called when results are below a certain threshold, and additional pages are fetched.',
        },
      },
      technical: {
        methods: [
          'Map',
          'ForEach',
          'Join',
          'Push',
          'Slice',
          'CharAt',
          'Math.ceil',
          'Math.round',
          'Object.keys',
        ],
        hooks: ['useState', 'useRef', 'useEffect', 'useContext', 'useCallback'],
        dependencies: {
          material: {
            useTheme: { why: '' },
            useMediaQuery: { why: 'Control layout based on size of window' },
            Grid: { why: '' },
            Drawer: {
              why: 'To save space and have data appear offset from the main screen',
            },
            Button: { why: '' },
            Slider: { why: '' },
            Typography: { why: '' },
            Paper: { why: '' },
            MaterialIcon: { why: '' },
            Table: { why: '' },
          },
          next: { Image: { why: '' }, Router: { why: '' } },
          lodash: {
            Debounce: {
              why: 'To restrict the amount of times data is fetched from the API',
            },
            Find: { why: '' },
          },
          'React Resize Detector': {
            why: 'To resize Material UI table based on window size',
          },
        },
        other: [
          'Event handlers',
          'Spread Operator',
          'Destructuring',
          'Asynchronous Functions',
          'Fetching and using data from an API',
          'Timestamps',
          'Ternary Operator',
        ],
        questions: {
          improved: [
            'Fetching from an API',
            'Using data from an API',
            'Local and API filtering',
            'Asynchronous functions',
            'Resizing Library components using a resize detector',
            'Dynamic sized components',
            'Scaling to phone',
            'Visual appeal',
          ],

          change: [
            'I now consider the Material UI drawer component to be too much and would consider something more simple',
            'I want to incorporate a table that is easier to use for mobile size',
          ],
          future: `To create my own API and design it in a way where I'm not restricted to fetching single pages at a time`,
        },
      },
    },
  },
  tekkenNet: {
    name: 'Tekken-Net',
    isNew: true,
    internalName: 'tekkenNet',
    projectLink: 'https://aiacuone-tekkenet.netlify.app/',
    projectGitHubLink: 'https://github.com/aiacuone/tekken-net',
    details: {
      basic: {
        lastUpdated: 'September, 2021',
        summary: () => {
          return (
            <p>
              Search and filters Tekken character moves. Originally the data
              required manually searching through excel spreadsheet like
              formats, but this application allows for a fast and easy to use
              filtering system.
            </p>
          )
        },
        langLib: [
          'react',
          'javaScript',
          'next',
          'material',
          'git',
          'gitHub',
          'npm',
          'css',
          'html',
          'OOP',
          'lodash',
          'illustrator',
        ],

        screenshots: [tekkenNet1, tekkenNet2],
        questions: {
          create: () => {
            return (
              <p>
                At this point, the Tekken community is solely reliant on a 3rd
                party website called https://rbnorway.org/t7-frame-data/ to
                access the Tekken character information. All the information is
                in a excel spreadsheet like format and is a very manually
                process to search for the information you need.
              </p>
            )
          },
          learn: [
            'The data requires reformatting from an excel spreadsheet to a javaScript object',
            'Importing and exporting data from external files',
          ],
          challenges: [
            'Due to the data coming from a 3rd party website, the data lacks consistency. I found that there were times where there would be characters within the data that would create errors',
            'Creating a filtering functions for each filter option',
          ],
        },
      },
      technical: {
        methods: ['Map', 'IndexOf', 'Filter', 'Replace', 'Substring'],
        hooks: ['useState', 'useEffect'],
        dependencies: {
          material: {
            'Material Icons': { why: '' },
            useMediaQuery: {
              why: 'To control the layout between phone and regular screens',
            },
            useStyles: { why: '' },
            Typography: { why: '' },
            Button: { why: '' },
            Stepper: {
              why: 'To create steps for instructions in introduction page',
            },
            Paper: { why: '' },
            Grid: { why: '' },
          },
          next: { Image: { why: '' }, Link: { why: '' }, Head: { why: '' } },
        },
        other: ['Spread Operator', 'Destructuring', 'Spread Operator', 'regex'],
        questions: {
          improved: [
            'Seperating database information to the logic of the application, then import or exporting where needed',
            'Regex',
            'Using filter method',
            'Resizing library components based on screen size',
          ],
          change: [
            'The layout needs improvement on the mobile sized window',
            'The table needs to be easier to use on the phone sized window',
          ],
          future: [
            'Eventually the plan is to compare a Tekken move to another Tekken move and give the user can rate how it how well it works, then the rating goes onto a database',
          ],
        },
      },
    },
  },
  noteTaker: {
    name: 'Note Taker',
    isNew: false,
    internalName: 'noteTaker',
    projectLink: 'https://aiacuone-note-taker.netlify.app/',
    projectGitHubLink: 'https://github.com/aiacuone/Note-Taker',
    details: {
      basic: {
        lastUpdated: 'May, 2021',
        summary:
          'An application with the same concept as Google Drive or Evernote, but with ideas that I would like to see implemented.',
        langLib: [
          'react',
          'javaScript',
          'next',
          'git',
          'gitHub',
          'npm',
          'css',
          'html',
          'OOP',
          'lodash',
          'illustrator',
        ],
        screenshots: [noteTaker1, noteTaker2],
        questions: {
          create: `To create an application based on the CRUD (create, read, update, delete) system. Note applications such as One Note, Google Drive and Evernote still have time till they perfect themselves, Note Taker is implementing ideas that I would like to see in any of those applications.`,
          learn: [
            `Although not used within this application, 'React Router' or 'Next Router' is the better option to change pages comparing to using state.`,
            'Creating a class or id for each division within the application is too time consuming',
            'The ideal way to implement the CRUD system is to incorporate an API',
            'Creating all visuals without a Front-end library is not efficient',
          ],
          challenges: [
            'Object Oriented Programming and Destructuring. Note Taker is takes advantage of the perks of Object Oriented Programming, and pushed my skills at the time.',
            'Creating all visuals without a library. Without a front-end library, all visuals were created manually, and required focus towards layout and spacing.',
          ],
        },
      },
      technical: {
        methods: [
          'Map',
          'Join',
          'Splice',
          'Object.keys',
          'Push',
          'Sort',
          'Reverse',
          'Pop',
        ],
        hooks: ['useState', 'useEffect', 'useRef', 'useCallback'],
        components: {},
        dependencies: {
          lodash: {
            Set: {
              why: 'To designate where to make updates within the database',
            },
          },
          'Sun Editor': {
            why: 'Allow for user to input text into application',
          },
          'React HTML Parser': {
            why: 'To parse the output from the Sun Editor component',
          },
        },
        other: [
          'Constructors used to create folders',
          'Event handlers',
          'Spread Operator',
          'Ternary Operator',
          'Custom Hook',
          'SetTimeout',
        ],
        questions: {
          improved: [
            'Object Oriented Programming and destructuring',
            'Understanding the basics of layouts',
            'State, all page pages and menu pop ups were created using state',
          ],
          change:
            'I want to implement YouTube clips similar to how Evernote implements YouTube videos, but I want the final product to be similar to a gif.',
          future:
            'I want to implement YouTube clips similar to how Evernote implements YouTube videos, but I want the final product to be similar to a gif.',
        },
      },
    },
  },
}

export const projectsArr = Object.keys(projectsObj).map((project) => project)

// const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

// Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`
