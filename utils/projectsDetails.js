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
          'material',
          'next',
          'lodash',
          'illustrator',
          'html',
          'css',
          'git',
        ],
        methods: ['method one', 'method 2', 'method 3'],
        screenshots: [cheapshark1, cheapshark2],
        areas: ['area1', 'area2', 'area3'],
        questions: {
          create: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
          learn: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.`,
          challenges: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu felis a sem rutrum suscipit. Etiam facilisis imperdiet dui sed aliquet. Morbi convallis, ipsum sit amet iaculis cursus, neque ante sodales dui, molestie ultrices diam diam sollicitudin dolor. Pellentesque elementum quis purus ut euismod. Pellentesque maximus ipsum nec molestie feugiat. Donec id ipsum eu metus eleifend varius ut a purus. Ut lacinia pellentesque ex in maximus.

          Phasellus pretium nisi a sem bibendum maximus. Nulla convallis eros sit amet ex consectetur sodales. Morbi fermentum ex risus, a pharetra tortor viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
        },
      },
      technical: {
        hooks: ['hook1', 'hook2', 'hook3'],
        components: {
          resizeDetector: {
            name: 'React Resize Detector',
            why: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non elementum magna, vitae dapibus ex. Nulla mauris ligula, euismod ac massa ac, porta tristique elit.`,
          },
        },
        libraries: {
          materialUI: {
            name: 'Material UI',
            components: {
              drawer: {
                name: 'Drawer',
                why: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non elementum magna, vitae dapibus ex. Nulla mauris ligula, euismod ac massa ac, porta tristique elit.`,
              },
              grid: {
                name: 'Grid',
                why: 'Basic structure and layout of Application',
              },
            },
            methods: {},
          },
          lodash: {
            name: 'Lodash',
            methods: {
              debounce: {
                name: 'Debounce',
                why: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non elementum magna, vitae dapibus ex. Nulla mauris ligula, euismod ac massa ac, porta tristique elit.`,
              },
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
