export const projectsObj = {
  cheapshark: {
    name: 'Cheapshark',
    isNew: true,
    internalName: 'cheapshark',
    details: {
      basic: {
        lastUpdated: 'Last Updated',
        langLib: ['Lib 1', 'Lib 2'],
        methods: ['method one', 'method 2', 'method 3'],
        screenshots: ['One', 'Two', 'Three'],
        questions: {
          whyCreate: 'Why create?',
          whatLearn: 'What did you learn?',
          challenges: 'what challenges did you face?',
        },
      },
      technical: {
        hooks: ['hook1', 'hook2', 'hook3'],
        libarary: {
          components: {
            materialUI: {
              drawer: { name: 'Drawer', why: 'Why did I use this component?' },
            },
          },
          methods: {
            lodash: {
              debounce: {
                name: 'Debounce',
                why: 'Why did I use this Library Method?',
              },
            },
          },
        },
        questions: {
          how: 'How has your coding improved with this project?',
          change:
            'What would you change about this project and maybe implement later on?',
          future: 'What ideas do you have for the future of this project?',
        },
      },
    },
  },
  tekkenNet: {
    name: 'Tekken-Net',
    new: true,
    internalName: 'tekkenNet',
    details: {
      basic: {
        lastUpdated: 'Last Updated',
        langLib: ['Lib 1', 'Lib 2'],
        methods: ['method one', 'method 2', 'method 3'],
        screenshots: ['One', 'Two', 'Three'],
        questions: {
          whyCreate: 'Why create?',
          whatLearn: 'What did you learn?',
          challenges: 'what challenges did you face?',
        },
      },
      technical: {
        hooks: ['hook1', 'hook2', 'hook3'],

        libarary: {
          components: {
            materialUI: {
              drawer: { name: 'Drawer', why: 'Why did I use this component?' },
            },
          },
          methods: {
            lodash: {
              debounce: {
                name: 'Debounce',
                why: 'Why did I use this Library Method?',
              },
            },
          },
        },
        questions: {
          how: 'How has your coding improved with this project?',
          change:
            'What would you change about this project and maybe implement later on?',
          future: 'What ideas do you have for the future of this project?',
        },
      },
    },
  },
  noteTaker: {
    name: 'Note Taker',
    new: false,
    internalName: 'noteTaker',
    details: {
      basic: {
        lastUpdated: 'Last Updated',
        langLib: ['Lib 1', 'Lib 2'],
        methods: ['method one', 'method 2', 'method 3'],
        screenshots: ['One', 'Two', 'Three'],
        questions: {
          whyCreate: 'Why create?',
          whatLearn: 'What did you learn?',
          challenges: 'what challenges did you face?',
        },
      },
      technical: {
        hooks: ['hook1', 'hook2', 'hook3'],

        libarary: {
          components: {
            materialUI: {
              drawer: { name: 'Drawer', why: 'Why did I use this component?' },
            },
          },
          methods: {
            lodash: {
              debounce: {
                name: 'Debounce',
                why: 'Why did I use this Library Method?',
              },
            },
          },
        },
        questions: {
          how: 'How has your coding improved with this project?',
          change:
            'What would you change about this project and maybe implement later on?',
          future: 'What ideas do you have for the future of this project?',
        },
      },
    },
  },
}

export const projectsArr = Object.keys(projectsObj).map((project) => project)
