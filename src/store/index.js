import Vue from 'vue'
import Vuex from 'vuex'
// import oppties from './modules/oppties'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'The Solution Source',
    homelinks: {
      cs: {
        title: 'Client Solution',
        items: {
          myOppty: {
            title: 'My Opportunities',
            link: '/oppties/my'
          },
          allOppty: {
            title: 'All Opportunities',
            link: '/opptyies/all'
          }
        }
      },
      reusableArtifacts: {
        title: 'Reusable Artifacts',
        items: {
          wws: {
            title: 'What We Solution',
            link: ''
          },
          sg: {
            title: 'Solution Guides',
            link: ''
          },
          sst: {
            title: 'SOW/SLA Templates',
            link: ''
          },
          pal: {
            title: 'PSM Artifact Library',
            link: ''
          },
          grs: {
            title: 'GRS',
            link: ''
          }
        }
      },
      configCosting: {
        title: 'Configuration & Costing',
        items: {
          sdt: {
            title: 'SDT Estimation-Configuration',
            link: ''
          },
          icm: {
            title: 'Integrated Configuration Model',
            link: ''
          },
          otherCostModel: {
            title: 'Other Cost Models',
            link: ''
          }
        }
      },
      pricing: {
        title: 'Pricing',
        items: {
          dealShaper: {
            title: 'Deal Shaper',
            link: ''
          },
          e3t: {
            title: 'E3T',
            link: ''
          }
        }
      },
      solnPurProcess: {
        title: 'Solution & Pursuit Processes',
        items: {
          psm: {
            title: 'Pursuit Support Model (PSM)',
            link: ''
          },
          solnLessonsLearned: {
            title: 'Solution Lessons Learned',
            link: ''
          }
        }
      },
      leaderSolnMgt: {
        title: 'Leader Solution Management',
        items: {
          solnStatusReport: {
            title: 'Solution Status Reports',
            link: ''
          },
          oar: {
            title: 'Opportunity Activity Report',
            link: ''
          },
          tssReports: {
            title: 'TSS Reports',
            link: ''
          }
        }
      }
    },
    menus: {
      helpRef: {
        title: 'Help & Reference',
        items: {
          faq: {
            title: 'FAQ',
            link: ''
          },
          training: {
            title: 'Training',
            link: ''
          },
          reports: {
            title: 'Reports',
            link: ''
          }
        }
      },
      oppties: {
        title: 'Opportunities',
        items: {
          myOppty: {
            title: 'My Opportunities',
            link: '/oppties/my'
          },
          allOppty: {
            title: 'All Opportunities',
            link: '/oppties/all'
          }
        }
      }
    }
  }
})

export default store
