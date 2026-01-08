// ============ COMPREHENSIVE FRAMEWORKS DATA ============
export const frameworksData = {
  'TNFD': {
    fullName: 'Taskforce on Nature-related Financial Disclosures',
    category: 'Disclosure Framework',
    status: 'Final recommendations published September 2023',
    description: 'Voluntary framework for organisations to report and act on nature-related dependencies, impacts, risks and opportunities.',
    background: 'The TNFD was established in 2021, modelled on the successful TCFD (climate disclosure) framework. It provides a risk management and disclosure framework for organisations to report and act on evolving nature-related risks. The final recommendations were published in September 2023 after extensive consultation and piloting with over 200 organisations.',
    keyComponents: ['LEAP Approach', '14 Recommended Disclosures', 'Sector-specific Guidance', 'Core Global Metrics', 'Additional Disclosure Metrics'],
    relevantTo: ['Corporates', 'Financial Institutions', 'Investors', 'Asset Managers', 'Banks', 'Insurance Companies'],
    fourPillars: {
      'Governance': 'Disclose the organisation\'s governance around nature-related dependencies, impacts, risks and opportunities',
      'Strategy': 'Disclose the actual and potential impacts of nature-related risks and opportunities on the organisation\'s businesses, strategy and financial planning',
      'Risk & Impact Management': 'Disclose how the organisation identifies, assesses, prioritises and manages nature-related dependencies, impacts, risks and opportunities',
      'Metrics & Targets': 'Disclose the metrics and targets used to assess and manage relevant nature-related risks and opportunities'
    },
    leapDetails: {
      'L - Locate': {
        description: 'Identify where the organisation interfaces with nature across direct operations, upstream, and downstream value chain',
        keyQuestions: ['Where are our direct operations located?', 'Where are our upstream supply chain activities?', 'Where are our downstream activities and products used?', 'Which locations interface with sensitive or important ecosystems?'],
        tools: ['IBAT', 'WWF Risk Filter', 'ENCORE', 'Global Forest Watch']
      },
      'E - Evaluate': {
        description: 'Assess dependencies on ecosystem services and impacts on nature (positive and negative)',
        keyQuestions: ['What are our dependencies on ecosystem services?', 'What are our impacts on nature?', 'How do these vary across our value chain?', 'Which dependencies and impacts are most material?'],
        tools: ['ENCORE', 'Natural Capital Protocol', 'SBTN Materiality Tool']
      },
      'A - Assess': {
        description: 'Identify material nature-related risks (physical, transition, systemic) and opportunities',
        keyQuestions: ['What physical risks arise from nature degradation?', 'What transition risks from policy changes?', 'What systemic risks from ecosystem collapse?', 'What opportunities exist from nature-positive action?'],
        riskTypes: { 'Physical': 'Acute (floods, fires) and chronic (soil degradation, water scarcity)', 'Transition': 'Policy/legal, technology, market, reputation', 'Systemic': 'Ecosystem collapse, tipping points' }
      },
      'P - Prepare': {
        description: 'Develop strategy, set targets, and prepare disclosures aligned with TNFD recommendations',
        keyQuestions: ['What is our strategy to address material risks?', 'What targets are we setting?', 'How will we report and disclose?']
      }
    },
    coreMetrics: [
      { metric: 'Land/water/ocean use change', category: 'Impact Driver' },
      { metric: 'Ecosystem extent by type', category: 'State of Nature' },
      { metric: 'Ecosystem condition', category: 'State of Nature' },
      { metric: 'High-risk natural commodities sourced', category: 'Dependencies' },
      { metric: 'Revenue from nature-positive products', category: 'Opportunities' }
    ],
    adoptionTimeline: { '2024': 'Early adopters begin voluntary disclosure', '2025': 'Expected integration with ISSB', '2026-27': 'Potential mandatory requirements', '2030': 'Widespread adoption expected' },
    zuluRelevance: 'Critical for corporate clients seeking to understand their nature dependencies before investing in restoration. Zulu helps clients in the "P - Prepare" phase by providing nature-positive investment opportunities.',
    linkedConcepts: ['Natural Capital Protocol', 'SBTN', 'Double Materiality', 'CSRD'],
    resources: [
      { name: 'TNFD Recommendations', url: 'https://tnfd.global/recommendations-of-the-tnfd/' },
      { name: 'LEAP Guidance', url: 'https://tnfd.global/publication/additional-guidance-on-the-leap-approach/' },
      { name: 'Sector Guidance', url: 'https://tnfd.global/publication/sector-guidance/' },
      { name: 'Getting Started Guide', url: 'https://tnfd.global/publication/getting-started/' }
    ]
  },

  'SBTN': {
    fullName: 'Science Based Targets Network',
    category: 'Target-setting Framework',
    status: 'Land and freshwater targets launched 2023',
    description: 'Provides companies with science-based targets for nature, enabling alignment with Earth\'s limits and societal goals.',
    background: 'SBTN extends the science-based targets approach from climate to nature. It provides companies with methods to set measurable, actionable, and time-bound objectives aligned with the best available science and global policy goals like the Global Biodiversity Framework.',
    keyComponents: ['AR3T Framework', 'Freshwater Targets', 'Land Targets', 'Step 1-5 Process', 'Materiality Screening'],
    relevantTo: ['Corporates', 'Supply Chain Managers', 'Sustainability Teams', 'Investors'],
    fiveSteps: {
      'Step 1 - Assess': 'Conduct materiality assessment across value chain to identify priority impact drivers and locations',
      'Step 2 - Interpret': 'Use state of nature data to understand where action is most needed',
      'Step 3 - Measure & Set': 'Establish baseline, set targets using SBTN methods, publicly commit',
      'Step 4 - Act': 'Implement AR3T actions to achieve targets',
      'Step 5 - Track': 'Monitor progress, report annually, update as science evolves'
    },
    ar3tDetails: {
      'Avoid': { description: 'Prevent negative impacts before they occur', examples: ['Site selection away from sensitive areas', 'Not converting natural ecosystems', 'Timing activities to avoid breeding seasons'], priority: 'Highest - always first' },
      'Reduce': { description: 'Minimise unavoidable impacts', examples: ['Precision agriculture', 'Sustainable sourcing policies', 'Pollution control'], priority: 'Second' },
      'Regenerate': { description: 'Restore and regenerate ecosystems', examples: ['On-site habitat restoration', 'Watershed restoration', 'Soil health improvement'], priority: 'Third' },
      'Transform': { description: 'Systemic change across value chains', examples: ['Industry coalitions', 'Policy advocacy', 'Business model transformation'], priority: 'Fourth' }
    },
    targetCategories: {
      'Land': { status: 'Released 2023', targets: ['No conversion of natural ecosystems', 'Land footprint reduction', 'Landscape engagement'] },
      'Freshwater': { status: 'Released 2023', targets: ['Water quantity in priority basins', 'Water quality targets', 'Watershed health'] },
      'Ocean': { status: 'In development', targets: ['Sustainable sourcing', 'Pollution reduction'] },
      'Biodiversity': { status: 'In development', targets: ['Species protection', 'Ecosystem integrity'] }
    },
    zuluRelevance: 'Zulu\'s restoration projects directly deliver against the "Regenerate" pillar. Woodland creation, peatland restoration, and Lost Woods all contribute to corporate land targets.',
    linkedConcepts: ['TNFD', 'Mitigation Hierarchy', 'Biodiversity Net Gain', 'GBF'],
    resources: [
      { name: 'SBTN Methods', url: 'https://sciencebasedtargetsnetwork.org/resources/' },
      { name: 'Initial Guidance', url: 'https://sciencebasedtargetsnetwork.org/how-it-works/the-first-science-based-targets-for-nature/' }
    ]
  },

  'Natural Capital Protocol': {
    fullName: 'Natural Capital Protocol',
    category: 'Valuation Framework',
    status: 'Published 2016, widely adopted',
    description: 'Standardised framework for identifying, measuring and valuing organisational impacts and dependencies on natural capital.',
    background: 'Developed through collaboration of over 50 organisations, the Protocol provides a standardised framework to help businesses identify, measure, and value their impacts and dependencies on natural capital.',
    keyComponents: ['Frame Stage', 'Scope Stage', 'Measure & Value Stage', 'Apply Stage', '9 Steps', 'Sector Guides'],
    relevantTo: ['Corporates', 'Consultants', 'Investors', 'Decision-makers'],
    stages: {
      'Frame (Steps 1-2)': { purpose: 'Define objective and scope', step1: 'Get started - why are you doing this?', step2: 'Define the objective - what decision will this inform?' },
      'Scope (Steps 3-4)': { purpose: 'Determine what to measure', step3: 'Scope the assessment - what boundaries?', step4: 'Determine impacts and dependencies - which are relevant?' },
      'Measure & Value (Steps 5-7)': { purpose: 'Collect data and determine value', step5: 'Measure drivers and dependencies', step6: 'Measure changes in natural capital', step7: 'Value impacts and dependencies' },
      'Apply (Steps 8-9)': { purpose: 'Use results to inform decisions', step8: 'Interpret and test results', step9: 'Take action' }
    },
    valuationMethods: {
      'Market-based': ['Market prices', 'Production function'],
      'Cost-based': ['Replacement cost', 'Avoided cost', 'Restoration cost'],
      'Revealed preference': ['Travel cost', 'Hedonic pricing'],
      'Stated preference': ['Contingent valuation', 'Choice modelling']
    },
    zuluRelevance: 'Provides the conceptual foundation for how ecosystem service values are calculated in restoration projects. Essential for demonstrating ROI to corporate clients.',
    linkedConcepts: ['SEEA-EA', 'Ecosystem Services', 'TEV', 'CICES'],
    resources: [
      { name: 'Protocol Document', url: 'https://capitalscoalition.org/capitals-approach/natural-capital-protocol/' },
      { name: 'Sector Guides', url: 'https://capitalscoalition.org/capitals-approach/sector-guides/' }
    ]
  },

  'Woodland Carbon Code': {
    fullName: 'UK Woodland Carbon Code',
    category: 'Carbon Standard',
    status: 'Operational since 2011, Version 2.2 current',
    description: 'The UK\'s voluntary quality assurance standard for woodland creation projects. Government-backed and independently verified.',
    background: 'Launched in 2011 by the Forestry Commission, the WCC provides assurance that woodland carbon projects are well-managed and deliver genuine carbon benefits. Over 2,000 projects registered covering 40,000+ hectares.',
    keyComponents: ['Project Registration', 'Validation', 'Verification', 'PIU/WCU Issuance', 'Additionality Tests', 'Buffer Pool'],
    relevantTo: ['Landowners', 'Carbon Buyers', 'Project Developers', 'Corporates'],
    projectLifecycle: {
      'Pre-registration': { activities: ['Site assessment', 'Species selection', 'Carbon estimation', 'Additionality test'], timeline: '3-6 months before planting' },
      'Registration': { activities: ['Submit documents', 'Pay fee', 'Project on registry'], timeline: 'Before planting' },
      'Validation': { activities: ['Independent desk validation', 'Confirm requirements met', 'PIUs issued'], timeline: 'Within 5 years' },
      'Verification': { activities: ['Independent site verification', 'Confirm sequestration', 'PIUs convert to WCUs'], timeline: 'Years 5, 15, 25, 35, 50, 75, 100' }
    },
    unitTypes: {
      'PIU': { description: 'Pending Issuance Unit - future projected sequestration', tradeable: true, price: '£15-25/tCO2e', risk: 'Buyer accepts delivery risk' },
      'WCU': { description: 'Woodland Carbon Unit - verified sequestration', tradeable: true, price: '£30-50/tCO2e', risk: 'Delivered and verified' },
      'Buffer': { description: 'Insurance pool against reversal', percentage: '15-20%', purpose: 'Collective risk management' }
    },
    projectTypes: {
      'New Native Woodland': { description: 'Planting native species on unwooded land', carbonYield: '150-400 tCO2e/ha over 100 years', eligibility: 'Not wooded for 25+ years' },
      'Natural Regeneration': { description: 'Allowing natural establishment', carbonYield: '100-300 tCO2e/ha over 100 years', eligibility: 'Evidence of seed source' },
      'Ancient Woodland Restoration': { description: 'Lost Woods - restoring remnants with <20% cover', carbonYield: '80-200 tCO2e/ha over 100 years', eligibility: 'Historic evidence, current <20% cover' }
    },
    additionalityTests: ['Financial - would it happen without carbon finance?', 'Legal - is it required by law?', 'Barrier - what barriers does carbon finance overcome?', 'Common practice - is this standard in the area?'],
    zuluRelevance: 'Core revenue mechanism for Zulu woodland projects. Zulu pioneered the Lost Woods methodology enabling ancient woodland remnants to access WCC credits.',
    linkedConcepts: ['Peatland Code', 'Carbon Credits', 'MRV', 'UK Land Carbon Registry'],
    resources: [
      { name: 'WCC Website', url: 'https://woodlandcarboncode.org.uk/' },
      { name: 'Requirements v2.2', url: 'https://woodlandcarboncode.org.uk/standard-and-guidance/1-introduction' },
      { name: 'Carbon Lookup Tables', url: 'https://woodlandcarboncode.org.uk/standard-and-guidance/3-carbon-sequestration/3-3-calculating-carbon-sequestration' },
      { name: 'UK Land Carbon Registry', url: 'https://www.woodlandcarboncode.org.uk/uk-land-carbon-registry' }
    ]
  },

  'Peatland Code': {
    fullName: 'UK Peatland Code',
    category: 'Carbon Standard',
    status: 'Version 2.0 launched 2023',
    description: 'Voluntary certification standard for UK peatland restoration projects, generating Peatland Carbon Units for emissions reductions.',
    background: 'Developed by IUCN UK Peatland Programme, the Code provides quality assurance for peatland restoration generating verified carbon units. UK peatlands store ~3 billion tonnes of carbon but degraded peatlands are major emission sources.',
    keyComponents: ['Baseline Assessment', 'Condition Assessment', 'Project Design', 'Validation', 'Verification', '30+ year Monitoring'],
    relevantTo: ['Landowners', 'Carbon Buyers', 'Water Companies', 'Conservation NGOs'],
    peatlandTypes: {
      'Blanket Bog': { description: 'Rain-fed peatland covering upland areas', distribution: 'Scotland, Wales, Northern England', carbonDensity: 'Very high - up to 5,000 tCO2/ha stored', damage: 'Drainage, burning, overgrazing' },
      'Raised Bog': { description: 'Dome-shaped bogs above groundwater', distribution: 'Lowland areas', carbonDensity: 'Very high', damage: 'Drainage, peat extraction' },
      'Fen': { description: 'Groundwater-fed peatland', distribution: 'East Anglia, Somerset', carbonDensity: 'High', damage: 'Drainage for agriculture' }
    },
    restorationMethods: {
      'Drain Blocking': { description: 'Installing dams to raise water table', methods: ['Peat dams', 'Plastic piling', 'Timber dams'], effectiveness: 'Primary intervention' },
      'Revegetation': { description: 'Reintroducing Sphagnum and native vegetation', methods: ['Sphagnum plugs', 'Heather brash', 'Nurse crops'], effectiveness: 'Essential for peat formation' },
      'Grazing Management': { description: 'Reducing livestock pressure', methods: ['Stock reduction', 'Seasonal exclusion'], effectiveness: 'Enables recovery' },
      'Bare Peat Stabilisation': { description: 'Preventing erosion', methods: ['Geotextiles', 'Heather brash', 'Lime and seed'], effectiveness: 'Stops carbon loss' }
    },
    coBenefits: {
      'Water': ['Reduced flood risk', 'Improved water quality', 'Drought resilience', 'Reduced treatment costs'],
      'Biodiversity': ['Wading bird habitat', 'Specialist invertebrates', 'Sphagnum mosses', 'Carnivorous plants'],
      'Heritage': ['Paleoenvironmental records', 'Archaeological protection']
    },
    zuluRelevance: 'Second major habitat for Zulu projects. Peatland offers carbon, water, and biodiversity benefits - key for water company partnerships (Severn Trent, Yorkshire Water).',
    linkedConcepts: ['Woodland Carbon Code', 'Water Quality Credits', 'Ecosystem Services'],
    resources: [
      { name: 'Peatland Code Website', url: 'https://www.iucn-uk-peatlandprogramme.org/peatland-code' },
      { name: 'Peatland Code v2.0', url: 'https://www.iucn-uk-peatlandprogramme.org/peatland-code/introduction-peatland-code' },
      { name: 'Field Protocol', url: 'https://www.iucn-uk-peatlandprogramme.org/peatland-code/resources' }
    ]
  },

  'Biodiversity Net Gain': {
    fullName: 'UK Biodiversity Net Gain (BNG)',
    category: 'Regulatory Framework',
    status: 'Mandatory from February 2024',
    description: 'Mandatory requirement under Environment Act 2021 for developments in England to deliver 10% biodiversity improvement.',
    background: 'BNG became mandatory in England from February 2024. It uses the Biodiversity Metric 4.0 to calculate habitat value. Gains must be maintained for 30+ years. Creates new markets for habitat creation.',
    keyComponents: ['Defra Metric 4.0', 'Habitat Units', 'Hedgerow Units', 'Watercourse Units', '30-year Duration', 'Biodiversity Gain Plan'],
    relevantTo: ['Developers', 'Local Planning Authorities', 'Landowners', 'Ecologists'],
    metricCalculation: {
      formula: 'Area (ha) × Distinctiveness × Condition × Strategic Significance',
      distinctiveness: 'Very Low (1) to Very High (8)',
      condition: 'Poor (1), Moderate (2), Good (3)',
      strategicSignificance: 'Location within LNRS areas adds multiplier'
    },
    deliveryMechanisms: {
      'On-site': { description: 'Habitat within development boundary', priority: 'Preferred - first in hierarchy', considerations: 'Must be ecologically appropriate' },
      'Off-site': { description: 'Registered habitat banks or bespoke agreements', priority: 'Second option', requirements: 'Must be on national BNG register' },
      'Statutory Credits': { description: 'Government credits as last resort', priority: 'Last resort only', prices: '£42,000-£650,000 per unit by habitat type' }
    },
    tradingRules: ['Like for like - same broad habitat type', 'Trading up - higher distinctiveness allowed', 'Trading down - NOT allowed', 'Same LPA preferred'],
    habitatDistinctiveness: {
      'Very High': ['Ancient woodland', 'Blanket bog', 'Limestone pavement'],
      'High': ['Native woodland', 'Species-rich grassland', 'Fen', 'Reedbed'],
      'Medium': ['Mixed woodland', 'Semi-improved grassland'],
      'Low': ['Improved grassland', 'Plantation woodland'],
      'Very Low': ['Developed land', 'Arable']
    },
    marketDynamics: { unitPrices: '£20,000-£50,000+ per unit', demand: 'Growing as mandate takes effect', opportunity: 'Stack with carbon credits' },
    zuluRelevance: 'Creates demand for habitat banks - potential revenue stream for restoration. BNG units can stack with carbon (different outcomes). Understanding metric and trading rules identifies highest-value opportunities.',
    linkedConcepts: ['Defra Metric', 'Habitat Banking', 'Mitigation Hierarchy', 'Environment Act', 'LNRS'],
    resources: [
      { name: 'BNG Guidance', url: 'https://www.gov.uk/guidance/biodiversity-net-gain' },
      { name: 'Metric 4.0', url: 'https://www.gov.uk/guidance/biodiversity-metric-calculate-the-biodiversity-net-gain-of-a-project-or-development' },
      { name: 'Metric Calculator', url: 'https://publications.naturalengland.org.uk/publication/6049804846366720' },
      { name: 'BNG Register', url: 'https://www.gov.uk/guidance/register-land-as-biodiversity-gain-site' }
    ]
  },

  'GBF': {
    fullName: 'Kunming-Montreal Global Biodiversity Framework',
    category: 'International Policy',
    status: 'Adopted December 2022',
    description: 'Global agreement setting targets to halt and reverse biodiversity loss by 2030, with vision of living in harmony with nature by 2050.',
    background: 'Adopted at COP15 in Montreal, the GBF replaces the Aichi Targets and sets an ambitious framework with 4 goals and 23 targets. Often called the "Paris Agreement for Nature".',
    keyComponents: ['4 Goals for 2050', '23 Targets for 2030', 'National Biodiversity Strategies', 'Monitoring Framework', 'Resource Mobilisation'],
    relevantTo: ['Governments', 'Policy Makers', 'Corporates', 'NGOs', 'Investors'],
    goals2050: {
      'Goal A': 'Ecosystem integrity maintained; extinctions halted; genetic diversity maintained',
      'Goal B': 'Nature\'s contributions valued and maintained through conservation and sustainable use',
      'Goal C': 'Fair sharing of benefits from genetic resources',
      'Goal D': 'Adequate means of implementation available'
    },
    keyTargets2030: {
      'Target 2': 'Restore 30% of degraded ecosystems',
      'Target 3': '30x30 - Protect 30% of land and sea',
      'Target 15': 'Business disclosure - large companies assess and disclose nature risks and impacts',
      'Target 18': 'Reduce harmful subsidies by $500bn/year',
      'Target 19': 'Mobilise $200bn/year for biodiversity'
    },
    target15Detail: {
      description: 'Require large companies and financial institutions to assess and disclose biodiversity risks, dependencies and impacts',
      relevance: 'Drives corporate adoption of TNFD'
    },
    implications: {
      'Governments': 'Update National Biodiversity Strategies',
      'Corporates': 'Increasing pressure for nature disclosure',
      'Investors': 'Nature risk becomes material',
      'Restoration': 'Major driver for investment (Target 2)'
    },
    zuluRelevance: 'GBF provides global context driving corporate interest in nature. Target 2 (restore 30%) and Target 15 (disclosure) support the business case for restoration.',
    linkedConcepts: ['TNFD', 'SBTN', 'CBD', '30x30', 'Nature-positive'],
    resources: [
      { name: 'GBF Full Text', url: 'https://www.cbd.int/gbf/' },
      { name: 'GBF Targets', url: 'https://www.cbd.int/gbf/targets' }
    ]
  },

  'SEEA-EA': {
    fullName: 'System of Environmental-Economic Accounting - Ecosystem Accounting',
    category: 'Accounting Standard',
    status: 'UN adopted 2021',
    description: 'International statistical standard for measuring ecosystem extent, condition, services, and monetary values compatible with national accounts.',
    background: 'Adopted by UN Statistical Commission in 2021 as first international standard for ecosystem accounting. Enables countries to integrate nature into economic accounts.',
    keyComponents: ['Ecosystem Extent Accounts', 'Ecosystem Condition Accounts', 'Ecosystem Services Accounts', 'Monetary Accounts'],
    relevantTo: ['Governments', 'Statistical Agencies', 'Policy Makers', 'Researchers'],
    accountTypes: {
      'Extent': { description: 'Track area of ecosystem types over time', format: 'Opening stock + additions - reductions = closing', measurement: 'Hectares' },
      'Condition': { description: 'Measure ecosystem health', approach: 'Reference condition vs current', indicators: ['Vegetation', 'Species', 'Soil', 'Water'] },
      'Services': { description: 'Physical flows from ecosystems', categories: ['Provisioning', 'Regulating', 'Cultural'], measurement: 'Physical units' },
      'Monetary': { description: 'Value of ecosystem assets and flows', approach: 'Net present value of future services' }
    },
    ecosystemTypes: ['Forests', 'Grasslands', 'Croplands', 'Wetlands', 'Rivers/Lakes', 'Coastal/Marine', 'Urban'],
    implementation: { 'UK': 'ONS publishes UK natural capital accounts annually', 'EU': 'INCA project', 'Global': '90+ countries piloting' },
    zuluRelevance: 'Provides conceptual backbone for ecosystem service classification. Helps structure how project benefits are categorised and reported.',
    linkedConcepts: ['Natural Capital Protocol', 'CICES', 'Ecosystem Services', 'National Accounts'],
    resources: [
      { name: 'SEEA-EA Manual', url: 'https://seea.un.org/ecosystem-accounting' },
      { name: 'UK Natural Capital Accounts', url: 'https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest' }
    ]
  }
};

// ============ UK POLICY LIBRARY ============
export const ukPolicyData = {
  'Environment Act 2021': {
    category: 'Primary Legislation',
    status: 'In force',
    description: 'Landmark post-Brexit environmental legislation establishing new governance and legally binding nature targets.',
    keyProvisions: ['Biodiversity Net Gain (10% mandatory)', 'Local Nature Recovery Strategies', 'Species Conservation Strategies', 'Conservation Covenants', 'Office for Environmental Protection', 'Legally binding environmental targets'],
    targets: { 'Species': 'Halt decline by 2030, increase 10% by 2042', 'Protected sites': '75% favourable condition by 2042', 'Woodland': '16.5% cover by 2050' },
    zuluRelevance: 'Creates legal framework for BNG and woodland targets driving demand for restoration.'
  },
  'Environmental Improvement Plan 2023': {
    category: 'Policy Framework',
    status: 'Current government plan',
    description: 'First revision of 25 Year Environment Plan, setting out how government will deliver targets.',
    keyAreas: ['Clean air', 'Clean water', 'Thriving wildlife', 'Reduced hazards', 'Resource efficiency', 'Enhanced beauty'],
    natureTargets: { 'Protected sites': '75% favourable', 'Species': 'Halt decline then 10% increase', 'Habitat': 'Create/restore 500,000 ha', 'Woodland': '400,000 ha new by 2050' },
    zuluRelevance: 'Sets government restoration ambition that Zulu projects contribute to.'
  },
  'Agricultural Transition': {
    category: 'Agricultural Policy',
    status: 'In transition 2021-2027',
    description: 'Post-Brexit transition from Basic Payment Scheme to Environmental Land Management paying for outcomes.',
    schemes: {
      'SFI': { description: 'Sustainable Farming Incentive - pays for sustainable actions', status: 'Rolling out 2023-24', actions: ['Hedgerows', 'Buffer strips', 'Cover crops'] },
      'Countryside Stewardship': { description: 'Mid/higher tier environmental management', status: 'Continuing', actions: ['Woodland creation', 'Grassland restoration', 'Wetlands'] },
      'Landscape Recovery': { description: 'Large-scale land use change', status: '22 pilots underway', actions: ['Catchment restoration', 'Estate transformation'] }
    },
    stackingRules: 'Government payments can typically stack with private carbon/BNG for different outcomes',
    zuluRelevance: 'Understanding ELM is essential for project financial modelling - often stacks with carbon/BNG.'
  },
  'England Trees Action Plan': {
    category: 'Sectoral Strategy',
    status: 'Published 2021',
    description: 'Plan to treble tree planting rates and increase woodland cover to 16.5% by 2050.',
    targets: { 'Planting': '30,000 ha/year', 'Cover': '16.5% by 2050 (from 14.5%)', 'Community forests': '7,000 ha' },
    support: ['England Woodland Creation Offer', 'Nature for Climate Fund', 'WCC support', 'Treescapes Fund'],
    zuluRelevance: 'Policy context for woodland ambition and available funding.'
  },
  'England Peat Action Plan': {
    category: 'Sectoral Strategy',
    status: 'Published 2021',
    description: 'Strategy to restore peatlands and ban horticultural peat.',
    targets: { 'Restoration': '35,000 ha by 2025, 280,000 ha longer term', 'Peat ban': 'Sale ban by 2030', 'Agriculture': 'Sustainable lowland peat management' },
    support: ['Nature for Climate Peatland Grant', 'Peatland Code', 'ELM peatland options'],
    zuluRelevance: 'Sets restoration ambition and funding for peatland projects.'
  },
  'Local Nature Recovery Strategies': {
    category: 'Spatial Planning',
    status: 'In development, due 2024-25',
    description: 'Statutory requirement for all areas to have LNRS identifying nature recovery priorities.',
    components: ['Statement of priorities', 'Local habitat map', 'Opportunities for enhancement', 'Species priorities'],
    implications: { 'BNG': 'Strategic significance multiplier for LNRS areas', 'Planning': 'Material consideration', 'Funding': 'May influence targeting' },
    zuluRelevance: 'Projects aligned with LNRS have higher BNG value and may attract more funding.'
  },
  'WINEP': {
    category: 'Regulatory Programme',
    fullName: 'Water Industry National Environment Programme',
    status: 'PR24 cycle 2025-2030',
    description: 'Environmental improvements water companies must deliver, increasingly via nature-based solutions.',
    drivers: ['Water Framework Directive', 'Habitats Regulations', 'Drinking Water Protected Areas', 'Environment Act'],
    natureSolutions: { 'Catchment management': 'Land management to reduce pollution', 'Natural flood management': 'Using land for flood attenuation', 'Wetland treatment': 'Constructed wetlands', 'Peatland restoration': 'Improving raw water quality' },
    zuluRelevance: 'Water companies are key clients for catchment-scale solutions - explains Zulu partnerships.'
  }
};

// ============ GLOBAL POLICY LIBRARY ============
export const globalPolicyData = {
  'Paris Agreement': {
    category: 'Climate Treaty',
    status: 'In force since 2016',
    year: 2015,
    description: 'International treaty to limit warming to 1.5°C above pre-industrial levels.',
    keyElements: ['Nationally Determined Contributions', '1.5°C goal', 'Net zero by mid-century', 'Climate finance', 'Global Stocktake'],
    natureLinks: { 'Article 5': 'Conserve and enhance carbon sinks including forests', 'NDCs': 'Many include nature-based solutions', 'Article 6': 'Carbon market mechanisms' },
    zuluRelevance: 'Woodland and peatland restoration are nature-based climate solutions contributing to Paris goals.'
  },
  'CBD': {
    fullName: 'Convention on Biological Diversity',
    category: 'Biodiversity Treaty',
    status: 'In force since 1993',
    year: 1992,
    description: 'Treaty for conservation, sustainable use, and fair benefit sharing.',
    keyElements: ['Conservation', 'Sustainable use', 'Benefit sharing', 'National strategies', 'COP every 2 years'],
    currentFramework: 'Kunming-Montreal GBF (2022)',
    zuluRelevance: 'CBD and GBF provide international context driving national and corporate action.'
  },
  'UN Decade on Ecosystem Restoration': {
    category: 'UN Initiative',
    status: '2021-2030',
    year: 2021,
    description: 'UN decade to prevent, halt and reverse ecosystem degradation worldwide.',
    targets: ['Restore 350 million ha by 2030', 'Generate $9 trillion in ecosystem services', 'Remove 26 Gt carbon'],
    principles: ['Global contribution', 'Inclusive engagement', 'Science-based', 'Multiple benefits'],
    zuluRelevance: 'Zulu\'s mission aligns directly - "regenerating 1 billion hectares" echoes this ambition.'
  },
  'EU CSRD': {
    fullName: 'Corporate Sustainability Reporting Directive',
    category: 'Disclosure Regulation',
    status: 'Phased implementation 2024-2028',
    year: 2022,
    description: 'Requires large companies to report on sustainability including biodiversity.',
    scope: { '2024': 'Large public entities (500+ employees)', '2025': 'Large companies (250+)', '2026': 'Listed SMEs' },
    esrsE4: 'Biodiversity and ecosystems disclosure standard',
    ukRelevance: 'UK companies with EU operations may need to comply',
    zuluRelevance: 'CSRD drives European corporate demand for nature action.'
  },
  'EU Deforestation Regulation': {
    category: 'Trade Regulation',
    status: 'In force December 2024',
    year: 2023,
    description: 'Products sold in EU must be deforestation-free.',
    coveredProducts: ['Cattle', 'Cocoa', 'Coffee', 'Palm oil', 'Soya', 'Wood', 'Rubber'],
    requirements: ['Due diligence', 'Traceability to plot', 'Cut-off: December 2020'],
    ukRelevance: 'UK considering similar legislation',
    zuluRelevance: 'Creates demand for deforestation-free supply chains.'
  },
  'EU Nature Restoration Law': {
    category: 'Biodiversity Regulation',
    status: 'Adopted 2024',
    year: 2024,
    description: 'First continent-wide law with binding restoration targets.',
    targets: { '2030': 'Restoration measures on 20% of EU land and sea', '2040': '60% of ecosystems in poor condition', '2050': '90% of ecosystems' },
    specificTargets: ['No net loss of urban green space', 'Restore 30% peatlands by 2030', '3 billion additional trees'],
    ukRelevance: 'Not binding but may influence UK policy',
    zuluRelevance: 'Shows direction of travel for restoration requirements.'
  },
  'ISSB': {
    fullName: 'International Sustainability Standards Board',
    category: 'Accounting Standards',
    status: 'S1 and S2 in force 2024, nature in development',
    year: 2023,
    description: 'Global baseline for sustainability disclosure.',
    currentStandards: { 'IFRS S1': 'General sustainability disclosure', 'IFRS S2': 'Climate disclosure' },
    futureWork: { 'Nature': 'Building on TNFD, expected 2025-26', 'Integration': 'Working with GRI' },
    ukRelevance: 'UK likely to adopt ISSB as disclosure basis',
    zuluRelevance: 'ISSB nature standard will drive mandatory disclosure, increasing demand.'
  }
};

// ============ TERMINOLOGY DATA ============
export const terminologyData = [
  { term: 'Ecosystem Services', definition: 'Benefits from ecosystems: provisioning (food, water), regulating (climate, water quality), cultural (recreation), supporting (nutrient cycling).', framework: 'Core Concept', difficulty: 'Beginner', zuluContext: 'Every Zulu project delivers multiple services - carbon, water, biodiversity, cultural value.' },
  { term: 'Natural Capital', definition: 'Stock of natural assets (air, water, soil, biodiversity) yielding ecosystem service flows over time.', framework: 'Core Concept', difficulty: 'Beginner', zuluContext: 'Zulu helps grow natural capital stocks through restoration.' },
  { term: 'Nature-positive', definition: 'Halting and reversing nature loss by 2030, full recovery by 2050. The nature equivalent of net zero.', framework: 'Policy', difficulty: 'Beginner', zuluContext: 'Zulu\'s mission aligns with nature-positive goals.' },
  { term: 'Double Materiality', definition: 'Assessing how nature affects the organisation AND how the organisation affects nature.', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Corporate clients need to understand both directions.' },
  { term: 'Dependency', definition: 'Organisation\'s reliance on nature - clean water, pollination, stable climate, etc.', framework: 'TNFD', difficulty: 'Beginner', zuluContext: 'Understanding dependencies identifies where restoration adds most value.' },
  { term: 'Impact', definition: 'Effect of activities on nature - positive (restoration) or negative (pollution, conversion).', framework: 'TNFD', difficulty: 'Beginner', zuluContext: 'Zulu projects create positive impacts offsetting negatives elsewhere.' },
  { term: 'LEAP Approach', definition: 'TNFD assessment: Locate (interface), Evaluate (dependencies/impacts), Assess (risks), Prepare (respond/report).', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Useful framework for structuring client conversations.' },
  { term: 'Physical Risk', definition: 'Direct risks from nature degradation - water scarcity, soil degradation, flooding, pollinator loss.', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Restoration addresses physical risks directly.' },
  { term: 'Transition Risk', definition: 'Risks from shift to nature-positive economy - policy, consumer preferences, technology, reputation.', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Early nature investment helps manage transition risks.' },
  { term: 'Systemic Risk', definition: 'Risks from collapse of natural systems underpinning economic activity.', framework: 'TNFD', difficulty: 'Advanced', zuluContext: 'Landscape restoration builds ecosystem resilience.' },
  { term: 'Mitigation Hierarchy', definition: 'Avoid → Minimise → Restore → Offset. Higher steps take priority.', framework: 'SBTN', difficulty: 'Intermediate', zuluContext: 'Restoration comes after avoid/minimise - important for client strategy.' },
  { term: 'AR3T Framework', definition: 'SBTN actions: Avoid, Reduce, Regenerate & Restore, Transform.', framework: 'SBTN', difficulty: 'Intermediate', zuluContext: 'Zulu delivers in Regenerate & Restore category.' },
  { term: 'Additionality', definition: 'Would outcome happen without intervention? Credits must show project wouldn\'t occur otherwise.', framework: 'Carbon Standards', difficulty: 'Advanced', zuluContext: 'All WCC/Peatland Code projects must pass additionality tests.' },
  { term: 'Permanence', definition: 'Will carbon stay stored / habitat persist? Risk of reversal must be managed.', framework: 'Carbon Standards', difficulty: 'Intermediate', zuluContext: 'WCC requires 100-year commitment; buffer pools protect against reversal.' },
  { term: 'Leakage', definition: 'Displacement of harmful activities elsewhere due to project.', framework: 'Carbon Standards', difficulty: 'Advanced', zuluContext: 'UK standards have lower leakage risk due to planning controls.' },
  { term: 'MRV', definition: 'Measurement, Reporting, Verification - tracking and validating outcomes.', framework: 'Carbon Standards', difficulty: 'Intermediate', zuluContext: 'Zulu\'s technology platform supports MRV across project lifecycle.' },
  { term: 'Baseline', definition: 'Starting condition against which change is measured.', framework: 'Carbon Standards', difficulty: 'Beginner', zuluContext: 'Baseline assessments are critical first step.' },
  { term: 'PIU', definition: 'Pending Issuance Unit - future projected sequestration. Carries delivery risk.', framework: 'Woodland Carbon Code', difficulty: 'Intermediate', zuluContext: 'PIUs typically £15-25/tCO2e, discounted for risk.' },
  { term: 'WCU', definition: 'Woodland Carbon Unit - verified, issued credit representing delivered sequestration.', framework: 'Woodland Carbon Code', difficulty: 'Intermediate', zuluContext: 'WCUs are gold standard UK woodland credits, £30-50/tCO2e.' },
  { term: 'PCU', definition: 'Peatland Carbon Unit - verified unit from peatland restoration.', framework: 'Peatland Code', difficulty: 'Intermediate', zuluContext: 'PCUs represent avoided emissions from rewetting.' },
  { term: 'Buffer Pool', definition: 'Units withheld as insurance against reversal. Typically 15-20%.', framework: 'Carbon Standards', difficulty: 'Intermediate', zuluContext: 'Buffer requirements affect project economics.' },
  { term: 'Habitat Units', definition: 'BNG metric: Area × Distinctiveness × Condition × Strategic Significance.', framework: 'BNG', difficulty: 'Intermediate', zuluContext: 'Understanding calculation identifies BNG revenue potential.' },
  { term: 'Distinctiveness', definition: 'Relative biodiversity value. Very Low to Very High scale.', framework: 'BNG', difficulty: 'Intermediate', zuluContext: 'Higher distinctiveness = more valuable but harder to create.' },
  { term: 'Strategic Significance', definition: 'BNG multiplier for LNRS priority areas.', framework: 'BNG', difficulty: 'Advanced', zuluContext: 'Aligning with LNRS increases unit value.' },
  { term: 'Stacking', definition: 'Selling multiple credits from same land (carbon + biodiversity + water).', framework: 'Nature Markets', difficulty: 'Advanced', zuluContext: 'Stacking improves economics but needs careful structuring.' },
  { term: 'Bundling', definition: 'Combining multiple services into single payment.', framework: 'Nature Markets', difficulty: 'Advanced', zuluContext: 'Some buyers prefer bundled multi-benefit offerings.' },
  { term: 'SSSI', definition: 'Site of Special Scientific Interest - legally protected UK conservation site.', framework: 'UK Policy', difficulty: 'Beginner', zuluContext: 'Zulu has delivered Lost Woods on SSSI sites.' },
  { term: 'Ancient Woodland', definition: 'Woodland existing since 1600 (Eng/Wales) or 1750 (Scotland). Irreplaceable.', framework: 'UK Conservation', difficulty: 'Beginner', zuluContext: 'Ancient woodland restoration is central to Lost Woods.' },
  { term: 'LNRS', definition: 'Local Nature Recovery Strategy - mapping nature recovery priorities.', framework: 'UK Policy', difficulty: 'Intermediate', zuluContext: 'LNRS alignment increases project value.' },
  { term: 'ELM', definition: 'Environmental Land Management - post-Brexit farm payments for outcomes.', framework: 'UK Policy', difficulty: 'Intermediate', zuluContext: 'ELM can stack with carbon/BNG revenues.' },
  { term: 'Lost Woods', definition: 'Zulu programme restoring ancient woodland remnants with <20% cover.', framework: 'Zulu Ecosystems', difficulty: 'Intermediate', zuluContext: 'Signature Zulu programme using historic maps and ML.' },
  { term: 'Natural Regeneration', definition: 'Allowing woodland to establish from natural seed sources.', framework: 'Restoration', difficulty: 'Beginner', zuluContext: 'Often cheaper with better genetic diversity.' },
  { term: 'Catchment-scale', definition: 'Planning at river catchment level for landscape connectivity.', framework: 'Landscape Planning', difficulty: 'Intermediate', zuluContext: 'Zulu\'s water company work operates at catchment scale.' }
];

// ============ PROJECT SCOPING DATA ============
export const projectScopeData = {
  ecosystemTypes: [
    { name: 'Native Woodland Creation', baseEffort: 40, carbonPotential: 'High', biodiversityPotential: 'High', waterPotential: 'Medium', wccEligible: true, peatlandEligible: false, bngPotential: 'High' },
    { name: 'Ancient Woodland Restoration', baseEffort: 60, carbonPotential: 'Medium', biodiversityPotential: 'Very High', waterPotential: 'Medium', wccEligible: true, peatlandEligible: false, bngPotential: 'Very High' },
    { name: 'Natural Regeneration', baseEffort: 35, carbonPotential: 'Medium-High', biodiversityPotential: 'High', waterPotential: 'Medium', wccEligible: true, peatlandEligible: false, bngPotential: 'High' },
    { name: 'Peatland Restoration', baseEffort: 55, carbonPotential: 'Very High', biodiversityPotential: 'High', waterPotential: 'Very High', wccEligible: false, peatlandEligible: true, bngPotential: 'High' },
    { name: 'Riparian Woodland', baseEffort: 45, carbonPotential: 'Medium', biodiversityPotential: 'High', waterPotential: 'Very High', wccEligible: true, peatlandEligible: false, bngPotential: 'High' },
    { name: 'Species-rich Grassland', baseEffort: 35, carbonPotential: 'Low', biodiversityPotential: 'High', waterPotential: 'Medium', wccEligible: false, peatlandEligible: false, bngPotential: 'Medium' },
    { name: 'Wetland Creation', baseEffort: 50, carbonPotential: 'Medium', biodiversityPotential: 'Very High', waterPotential: 'Very High', wccEligible: false, peatlandEligible: false, bngPotential: 'Very High' }
  ],
  assessmentDepths: [
    { name: 'Desktop Screening', multiplier: 0.3, description: 'GIS analysis, data review, high-level opportunity assessment', deliverables: ['Opportunity map', 'Data gap analysis', 'Indicative feasibility'] },
    { name: 'Feasibility Study', multiplier: 0.6, description: 'Site visit, stakeholder scoping, outline design, preliminary financials', deliverables: ['Site assessment', 'Outline design', 'Carbon/BNG estimates', 'Financial summary'] },
    { name: 'Full Assessment', multiplier: 1.0, description: 'Detailed surveys, financial modelling, project design, stakeholder engagement', deliverables: ['Baseline surveys', 'Detailed design', 'Carbon/BNG calculations', 'Financial model', 'Risk register'] },
    { name: 'Implementation Support', multiplier: 1.5, description: 'Code registration, contractor management, monitoring setup', deliverables: ['Code registration', 'Contractor specs', 'Monitoring protocol', 'Verification support'] }
  ],
  sizeCategories: [
    { name: 'Small (<50 ha)', multiplier: 0.7, typical: 'Single farm, estate parcel' },
    { name: 'Medium (50-200 ha)', multiplier: 1.0, typical: 'Multiple parcels, small estate' },
    { name: 'Large (200-500 ha)', multiplier: 1.4, typical: 'Large estate, multi-stakeholder' },
    { name: 'Landscape (500+ ha)', multiplier: 2.0, typical: 'Catchment-scale, multiple landowners' }
  ]
};

// ============ RISK CATEGORIES ============
export const riskCategories = [
  {
    name: 'Physical Risks',
    description: 'Direct risks from nature degradation',
    subcategories: [
      { name: 'Water scarcity', relevantSectors: ['Agriculture', 'Water Utilities', 'Manufacturing', 'Food & Beverage'] },
      { name: 'Soil degradation', relevantSectors: ['Agriculture', 'Construction', 'Food & Beverage'] },
      { name: 'Pollinator decline', relevantSectors: ['Agriculture', 'Food & Beverage', 'Cosmetics'] },
      { name: 'Flooding', relevantSectors: ['Insurance', 'Real Estate', 'Infrastructure', 'Utilities'] },
      { name: 'Raw material scarcity', relevantSectors: ['Manufacturing', 'Pharmaceuticals', 'Textiles'] }
    ]
  },
  {
    name: 'Transition Risks',
    description: 'Risks from shift to nature-positive economy',
    subcategories: [
      { name: 'Regulatory change', relevantSectors: ['Construction', 'Agriculture', 'Retail', 'Finance'] },
      { name: 'Consumer preferences', relevantSectors: ['Food & Beverage', 'Fashion', 'Tourism', 'Retail'] },
      { name: 'Investor requirements', relevantSectors: ['All listed', 'Finance', 'Real Estate'] },
      { name: 'Supply chain due diligence', relevantSectors: ['Retail', 'Manufacturing', 'Food & Beverage'] },
      { name: 'Nature pricing', relevantSectors: ['Energy', 'Transport', 'Heavy Industry'] }
    ]
  },
  {
    name: 'Systemic Risks',
    description: 'Risks from natural system collapse',
    subcategories: [
      { name: 'Ecosystem collapse', relevantSectors: ['Agriculture', 'Fisheries', 'Tourism', 'Insurance'] },
      { name: 'Tipping points', relevantSectors: ['Insurance', 'Finance', 'Infrastructure'] },
      { name: 'Biodiversity cascade', relevantSectors: ['Pharmaceuticals', 'Agriculture', 'Biotechnology'] }
    ]
  }
];

export const sectors = ['Agriculture', 'Water Utilities', 'Construction', 'Food & Beverage', 'Finance', 'Real Estate', 'Retail', 'Manufacturing', 'Pharmaceuticals', 'Energy', 'Transport', 'Tourism', 'Forestry', 'Mining', 'Insurance'];
