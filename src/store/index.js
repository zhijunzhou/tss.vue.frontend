import Vue from 'vue'
import Vuex from 'vuex'
import opportunity from '@/store/section-mapping'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'The Solution Source',
    showWokingDialog: false,
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
            link: '/reports'
          },
          amap: {
            title: 'Amap',
            link: '/amap'
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
          },
          managePermission: {
            title: 'Manage Permission',
            link: '/permission/definition'
          }
        }
      }
    },
    options: {
      pursuitCatalogs: [
        {
          text: 'A',
          value: 'A'
        }, {
          text: 'B',
          value: 'B'
        }, {
          text: 'C',
          value: 'C'
        }, {
          text: 'D',
          value: 'D'
        }
      ],
      salesStages: [
        {
          text: '01 Understand the Client',
          value: '01'
        }, {
          text: '02 Validate Opportunity',
          value: '02'
        }, {
          text: '03 Qualify Opportunity',
          value: '03'
        }, {
          text: '04 Develop and Propose Solution',
          value: '04'
        }, {
          text: '05 Negotiate and Close',
          value: '05'
        }, {
          text: '06 Won and Deploy',
          value: '06'
        }
      ],
      dxcSolnPaths: [
        {
          text: 'CSC-CSC',
          value: 'csc_csc'
        }, {
          text: 'CSC-ES',
          value: 'csc_es'
        }, {
          text: 'ES-ES',
          value: 'es_es'
        }, {
          text: 'ES-CSC',
          value: 'es_csc'
        }
      ],
      OfferingFamilies: [
        {
          text: 'Analytics',
          value: 'analytics'
        }, {
          text: 'Application Services',
          value: 'appSvc'
        }, {
          text: 'Business Process Services',
          value: 'bizProcessSvc'
        }, {
          text: 'Cloud, Workload Platforms, and ITO',
          value: 'cloudWorkloadIto'
        }, {
          text: 'Consulting',
          value: 'consulting'
        }, {
          text: 'Cross Offering Solutions',
          value: 'crossOfferingSoln'
        }, {
          text: 'Enterprise and Cloud Apps',
          value: 'entCloudApps'
        }, {
          text: 'IS&S Banking',
          value: 'isnsBaking'
        }, {
          text: 'IS&S Healthcare',
          value: 'isnsHealthcare'
        }, {
          text: 'IS&S Insurance',
          value: 'isnsInsurance'
        }, {
          text: 'IS&S Travel and Transportation',
          value: 'isnsTravelTransportation'
        }, {
          text: 'Security',
          value: 'security'
        }, {
          text: 'Workplace and Mobility',
          value: 'workplaceMobility'
        }
      ],
      roles: [
        {
          text: 'ABO Lead (uncheck)',
          value: 'aboLead'
        }, {
          text: 'ESS Delivery Lead (uncheck)',
          value: 'essDeliveryLead'
        }, {
          text: 'Delivery Project Lead (uncheck)',
          value: 'deliveryProjectLead'
        }, {
          text: 'Delivery Run Lead (uncheck)',
          value: 'deliveryRunLead'
        }, {
          text: 'SM&I Delivery Lead (uncheck)',
          value: 'smiDeliveryLead'
        }, {
          text: 'Delivery Manage Lead (uncheck)',
          value: 'deliveryOwner'
        }, {
          text: 'Transformation Program Lead (uncheck)',
          value: 'tntLead'
        }, {
          text: 'Delivery SME Contributor (uncheck)',
          value: 'deliverySMEContributor'
        }, {
          text: 'Delivery Design Lead (uncheck)',
          value: 'leadEngineer'
        }, {
          text: 'Delivery SME Contributor Contact (uncheck)',
          value: 'smeContributorContact'
        }, {
          text: 'Validator Approver Contact (uncheck)',
          value: 'validatorApproverContact'
        }, {
          text: 'FAM Lead (uncheck)',
          value: 'famLead'
        }, {
          text: 'Bid Coordinator (uncheck)',
          value: 'bidCoordinator'
        }, {
          text: 'Pursuit Engagement Manager (uncheck)',
          value: 'pursuitEngagementMgr'
        }, {
          text: 'Proposal Manager (uncheck)',
          value: 'proposalMgr'
        }, {
          text: 'Capability Approvers (uncheck)',
          value: 'capabilityApprovers'
        }, {
          text: 'Account Executive',
          value: 'acctExecutive'
        }, {
          text: 'Bid Manager',
          value: 'bidMgr'
        }, {
          text: 'Deal Analyst',
          value: 'dealAnalyst'
        }, {
          text: 'Hr Lead',
          value: 'hrLead'
        }, {
          text: 'Legal Contract Management Lead',
          value: 'legalContractMgmtLead'
        }, {
          text: 'Opportunity Consultant',
          value: 'opptyConsultant'
        }, {
          text: 'Sales Executive',
          value: 'salesExecutive'
        }, {
          text: 'Solution Consultant',
          value: 'solnConsultant'
        }, {
          text: 'Strategic Pursuit Lead',
          value: 'strategicPursuitLead'
        }, {
          text: 'Transformation Practice Architect',
          value: 'transformationPracticeArch'
        }, {
          text: 'Deal Intake',
          value: 'dealIntake'
        }, {
          text: 'Due Diligence Leader',
          value: 'dueDiligenceLead'
        }, {
          text: 'Other Internal Business Partners',
          value: 'otherIntlBizPartner'
        }, {
          text: 'Practice Architects (excluding TPA)',
          value: 'practiceArch'
        }, {
          text: 'Proposal Support',
          value: 'proposalSupport'
        }, {
          text: 'Other',
          value: 'other'
        }, {
          text: 'Delivery Intake',
          value: 'deliveryIntake'
        }, {
          text: 'Delivery Readiness Lead (DRL)',
          value: 'deliveryReadinessLead',
          isNew: true
        }, {
          text: 'Lead Offering Design Engineer ',
          value: 'leadOfferingDesignEngineer',
          isNew: true
        }, {
          text: 'Offering Design Engineer(s) (ODEs), Other ',
          value: 'otherOfferingDesignEngineer',
          isNew: true
        }, {
          text: 'Offering Onboarding Manager (OOM) ',
          value: 'offeringOnboardingMgr',
          isNew: true
        }
      ],
      permissions: [
        {
          text: 'write',
          value: 'write'
        }, {
          text: 'read',
          value: 'read'
        }, {
          text: 'none',
          value: 'none'
        }
      ],
      groups: [],
      opportunity: opportunity
    }
  }
})

export default store
