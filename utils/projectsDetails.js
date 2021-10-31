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
            'It can be difficult resizing react components from Front-End libraries',
            'React Resize detector can help with that APIs can be restrictive',
          ],

          challenges:
            'Ideally the API would fetch all the data at once and the required data is filtered, however the API used within the application is restricted in a way where you can only fetch a single page at a time. To overcome this problem, asynchronous functions are automatically called when results are below a certain threshold, and additional pages are fetched.',
        },
      },
      technical: {
        methods: [
          'map',
          'forEach',
          'join',
          'push',
          'slice',
          'charAt',
          'Math.ceil',
          'Math.round',
          'Object.keys',
        ],
        hooks: ['useState', 'useRef', 'useEffect', 'useContext', 'useCallback'],
        dependencies: {
          'Material UI': {
            useTheme: {},
            useMediaQuery: { why: 'Control layout based on size of window' },
            Grid: {},
            Drawer: {
              why: 'To save space and have data appear offset from the main screen',
            },
            Button: {},
            Slider: {},
            Typography: {},
            Paper: {},
            MaterialIcon: {},
            Table: {},
          },
          next: { Image: {}, Router: {} },
          Lodash: {
            debounce: {
              why: 'To restrict the amount of times data is fetched from the API',
            },
            find: { why: '' },
          },
          'React Resize Detector': {
            why: 'To resize Material UI table based on window size',
          },
        },
        Other: [
          'Event handlers',
          'Spread Operator',
          'Destructuring',
          'Asynchronous Functions',
          'Fetching and using data from an API',
          'Timestamps',
          'Ternary Operator',
        ],
        questions: {
          how: [
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
        lastUpdated: 'Last Updated TEKKEN NET',
        langLib: ['react', 'material', 'next'],
        methods: ['method one', 'method 2', 'method 3'],
        screenshots: [tekkenNet1, tekkenNet2],
        areas: ['area1', 'area2', 'area3'],
        questions: {
          create: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          learn: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          challenges: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
        },
      },
      technical: {
        hooks: ['hook1', 'hook2', 'hook3'],
        components: {},
        libraries: {
          materialUI: {
            name: 'Material UI',
            components: {
              drawer: { name: 'Drawer', why: 'Why did I use this component?' },
            },
            methods: {},
          },
          lodash: {
            name: 'Lodash',
            methods: {
              debounce: {
                name: 'Debounce',
                why: 'Why did I use this Library Method?',
              },
            },
            components: {},
          },
        },
        questions: {
          how: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          change: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.`,
          future: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
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
        lastUpdated: 'Last Updated NOTE TAKER',
        langLib: [
          'react',
          'material',
          'next',
          'lodash',
          'illustrator',
          'html',
          'css',
          'git',
        ],
        methods: ['method one', 'method 2', 'method 3'],
        screenshots: [noteTaker1, noteTaker2],
        areas: ['area1', 'area2', 'area3'],
        questions: {
          create: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          learn: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          challenges: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
        },
      },
      technical: {
        hooks: ['hook1', 'hook2', 'hook3'],
        components: {},
        libraries: {
          materialUI: {
            name: 'Material UI',
            components: {
              drawer: { name: 'Drawer', why: 'Why did I use this component?' },
            },
            methods: {},
          },
          lodash: {
            name: 'Lodash',
            methods: {
              // debounce: {
              //   name: 'Debounce',
              //   why: 'Why did I use this Library Method?',
              // },
            },
            components: {},
          },
        },
        questions: {
          how: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          change: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          future: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
        },
      },
    },
  },
}

export const projectsArr = Object.keys(projectsObj).map((project) => project)

// const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

// Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`
