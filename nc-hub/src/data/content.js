// Comprehensive frameworks data
export const frameworksData = {
  'TNFD': {
    fullName: 'Taskforce on Nature-related Financial Disclosures',
    category: 'Disclosure Framework',
    description: 'Voluntary framework for organisations to report and act on nature-related dependencies, impacts, risks and opportunities. Aligned with TCFD structure.',
    keyComponents: ['LEAP Approach', '14 Recommended Disclosures', 'Sector-specific Guidance', 'Core Global Metrics', 'Additional Disclosure Metrics'],
    relevantTo: ['Corporates', 'Financial Institutions', 'Investors', 'Asset Managers'],
    leapStages: {
      'L - Locate': 'Identify where the organisation interfaces with nature across direct operations, upstream, and downstream value chain',
      'E - Evaluate': 'Assess dependencies on ecosystem services and impacts on nature (positive and negative)',
      'A - Assess': 'Identify material nature-related risks (physical, transition, systemic) and opportunities',
      'P - Prepare': 'Develop strategy, set targets, and prepare disclosures aligned with TNFD recommendations'
    },
    zuluRelevance: 'Critical for corporate clients seeking to understand their nature dependencies before investing in restoration projects. Zulu can help clients identify nature-positive opportunities in the "P" phase.',
    linkedConcepts: ['Natural Capital Protocol', 'SBTN', 'Double Materiality', 'ENCORE', 'IBAT'],
    resources: [
      { name: 'TNFD Recommendations', url: 'https://tnfd.global/recommendations-of-the-tnfd/' },
      { name: 'LEAP Guidance', url: 'https://tnfd.global/publication/additional-guidance-on-the-leap-approach/' }
    ]
  },
  'SBTN': {
    fullName: 'Science Based Targets Network',
    category: 'Target-setting Framework',
    description: 'Provides companies with science-based targets for nature, enabling them to align business activities with Earth\'s limits and societal goals.',
    keyComponents: ['AR3T Framework', 'Freshwater Targets', 'Land Targets', 'Step 1-5 Process', 'Initial Guidance for Business'],
    relevantTo: ['Corporates', 'Supply Chain Managers', 'Sustainability Teams'],
    ar3tFramework: {
      'Avoid': 'Prevent negative impacts before they occur through site selection, design, and timing',
      'Reduce': 'Minimise unavoidable impacts through best practices and technology',
      'Regenerate': 'Restore and regenerate ecosystems on-site or within sphere of influence',
      'Transform': 'Contribute to systemic change across sectors, value chains, and landscapes'
    },
    targetCategories: {
      'Land': 'No conversion of natural ecosystems, restoration of degraded land',
      'Freshwater': 'Water quantity and quality targets in priority basins',
      'Ocean': 'Sustainable sourcing, pollution reduction (coming)',
      'Biodiversity': 'Species and ecosystem targets (coming)'
    },
    zuluRelevance: 'Zulu\'s restoration projects directly deliver against the "Regenerate" pillar. Woodland creation, peatland restoration, and Lost Woods all contribute to land targets.',
    linkedConcepts: ['TNFD', 'Mitigation Hierarchy', 'Biodiversity Net Gain', 'GBF'],
    resources: [
      { name: 'SBTN Methods', url: 'https://sciencebasedtargetsnetwork.org/resources/' }
    ]
  },
  'Natural Capital Protocol': {
    fullName: 'Natural Capital Protocol',
    category: 'Valuation Framework',
    description: 'Standardised framework developed by the Natural Capital Coalition for measuring and valuing organisational impacts and dependencies on natural capital.',
    keyComponents: ['Frame Stage', 'Scope Stage', 'Measure & Value Stage', 'Apply Stage', '9 Steps'],
    relevantTo: ['Corporates', 'Consultants', 'Investors', 'Decision-makers'],
    stages: {
      'Frame (Steps 1-2)': 'Why: Define objective. What: Determine scope and boundaries of assessment',
      'Scope (Steps 3-4)': 'How: Choose measurement approach. What: Determine which impacts/dependencies to measure',
      'Measure & Value (Steps 5-7)': 'Measure changes in natural capital. Value the changes. Assess materiality',
      'Apply (Steps 8-9)': 'Interpret and test results. Take action and integrate into decisions'
    },
    zuluRelevance: 'Provides the conceptual foundation for how ecosystem service values are calculated in restoration projects. Essential for demonstrating ROI to corporate clients.',
    linkedConcepts: ['SEEA-EA', 'Ecosystem Services', 'TEV', 'CICES'],
    resources: [
      { name: 'Protocol Document', url: 'https://capitalscoalition.org/capitals-approach/natural-capital-protocol/' }
    ]
  },
  'Woodland Carbon Code': {
    fullName: 'UK Woodland Carbon Code',
    category: 'Carbon Standard',
    description: 'The UK\'s voluntary quality assurance standard for woodland creation projects. Government-backed, independently verified, and listed on the UK Land Carbon Registry.',
    keyComponents: ['Project Registration', 'Validation', 'Verification', 'PIU/WCU Issuance', 'Additionality Tests'],
    relevantTo: ['Landowners', 'Carbon Buyers', 'Project Developers', 'Corporates'],
    unitTypes: {
      'PIU (Pending Issuance Unit)': 'Represents projected future carbon sequestration. Can be sold before verification but carries delivery risk.',
      'WCU (Woodland Carbon Unit)': 'Verified, issued carbon unit representing actual measured sequestration. Converted from PIUs after verification.',
      'Buffer': 'Percentage of units held in buffer account to cover project risks (typically 15-20%)'
    },
    projectTypes: {
      'New Native Woodland': 'Planting native species on previously unwooded land',
      'Natural Regeneration': 'Allowing woodland to establish naturally with minimal intervention',
      'Ancient Woodland Restoration': 'Restoring degraded remnant ancient woodlands (Lost Woods pathway)'
    },
    zuluRelevance: 'Core revenue mechanism for Zulu woodland projects. Zulu pioneered the Lost Woods methodology that enabled ancient woodland remnants with <20% cover to access WCC credits.',
    linkedConcepts: ['Peatland Code', 'Carbon Credits', 'MRV', 'UK Land Carbon Registry'],
    resources: [
      { name: 'WCC Website', url: 'https://woodlandcarboncode.org.uk/' },
      { name: 'WCC Requirements', url: 'https://woodlandcarboncode.org.uk/standard-and-guidance/1-introduction' }
    ]
  },
  'Peatland Code': {
    fullName: 'UK Peatland Code',
    category: 'Carbon Standard',
    description: 'Voluntary certification standard for UK peatland restoration projects. Enables issuance of Peatland Carbon Units for emissions reductions from rewetting degraded peatlands.',
    keyComponents: ['Baseline Assessment', 'Project Design', 'Validation', 'Verification', 'Long-term Monitoring (30+ years)'],
    relevantTo: ['Landowners', 'Carbon Buyers', 'Water Companies', 'Conservation NGOs'],
    restorationMethods: {
      'Drain Blocking': 'Installing dams in drainage channels to raise water table',
      'Revegetation': 'Sphagnum moss reintroduction and native vegetation restoration',
      'Grazing Management': 'Reducing livestock pressure to allow peatland vegetation recovery',
      'Bare Peat Stabilisation': 'Preventing erosion and establishing vegetation cover'
    },
    coBenefits: {
      'Water': 'Reduced flood risk, improved water colour/quality, drought resilience',
      'Biodiversity': 'Habitat for wading birds, invertebrates, specialist plants',
      'Heritage': 'Preservation of paleoenvironmental records'
    },
    zuluRelevance: 'Second major habitat type for Zulu projects. Peatland restoration offers carbon, water quality, and biodiversity benefits. Strong interest from water companies (Severn Trent, Yorkshire Water partnerships).',
    linkedConcepts: ['Woodland Carbon Code', 'Water Quality Credits', 'Ecosystem Services', 'IUCN UK Peatland Programme'],
    resources: [
      { name: 'Peatland Code Website', url: 'https://www.iucn-uk-peatlandprogramme.org/peatland-code' }
    ]
  },
  'Biodiversity Net Gain': {
    fullName: 'UK Biodiversity Net Gain (BNG)',
    category: 'Regulatory Framework',
    description: 'Mandatory requirement under the Environment Act 2021 for most developments in England to deliver at least 10% improvement in biodiversity value.',
    keyComponents: ['Defra Biodiversity Metric 4.0', 'Habitat Units', 'Hedgerow Units', 'River Units', '30-year Minimum Duration'],
    relevantTo: ['Developers', 'Local Planning Authorities', 'Landowners', 'Ecologists'],
    deliveryMechanisms: {
      'On-site': 'Creating/enhancing habitats within development boundary. Preferred option in hierarchy.',
      'Off-site': 'Purchasing units from registered habitat banks or bespoke agreements. Must be in same LPA area or national habitat network.',
      'Statutory Credits': 'Government credits as last resort when on/off-site not feasible. Deliberately priced high (£42k-£650k per unit by habitat type).'
    },
    metricCalculation: {
      'Habitat Units': 'Area (ha) × Distinctiveness × Condition × Strategic Significance',
      'Trading Rules': 'Like-for-like or trading up in distinctiveness required',
      'Additionality': 'Cannot count existing commitments or protected sites'
    },
    zuluRelevance: 'Creates demand for habitat banks and off-site delivery - potential revenue stream for restoration projects. BNG units can potentially be stacked with carbon credits.',
    linkedConcepts: ['Defra Metric', 'Habitat Banking', 'Mitigation Hierarchy', 'Environment Act'],
    resources: [
      { name: 'BNG Guidance', url: 'https://www.gov.uk/guidance/biodiversity-net-gain' },
      { name: 'Metric 4.0', url: 'https://www.gov.uk/guidance/biodiversity-metric-calculate-the-biodiversity-net-gain-of-a-project-or-development' }
    ]
  },
  'SEEA-EA': {
    fullName: 'System of Environmental-Economic Accounting - Ecosystem Accounting',
    category: 'Accounting Standard',
    description: 'UN adopted statistical standard (2021) for measuring ecosystem extent, condition, services, and monetary values in a way compatible with national accounts.',
    keyComponents: ['Ecosystem Extent Accounts', 'Ecosystem Condition Accounts', 'Ecosystem Services Flow Accounts', 'Monetary Ecosystem Asset Accounts'],
    relevantTo: ['Governments', 'Statistical Agencies', 'Policy Makers', 'Researchers'],
    accountTypes: {
      'Extent Accounts': 'Track area of different ecosystem types over time. Opening stock + additions - reductions = closing stock.',
      'Condition Accounts': 'Measure ecosystem health using indicators. Reference condition vs current condition.',
      'Ecosystem Services Accounts': 'Physical flows of services (provisioning, regulating, cultural) in biophysical units.',
      'Monetary Accounts': 'Value of ecosystem assets and service flows in monetary terms.'
    },
    ecosystemTypes: [
      'Forests', 'Grasslands', 'Croplands', 'Wetlands', 'Rivers/Lakes', 'Coastal', 'Urban'
    ],
    zuluRelevance: 'Provides the conceptual backbone for ecosystem service classification. Understanding SEEA-EA helps structure how project benefits are categorised and measured.',
    linkedConcepts: ['Natural Capital Protocol', 'CICES', 'Ecosystem Services', 'National Accounts'],
    resources: [
      { name: 'SEEA-EA Manual', url: 'https://seea.un.org/ecosystem-accounting' }
    ]
  },
  'CICES': {
    fullName: 'Common International Classification of Ecosystem Services',
    category: 'Classification System',
    description: 'Hierarchical classification system for ecosystem services, designed to be compatible with SEEA-EA and enable consistent reporting.',
    keyComponents: ['Section', 'Division', 'Group', 'Class', 'Class Type'],
    relevantTo: ['Researchers', 'Consultants', 'Policy Makers'],
    sections: {
      'Provisioning': 'Tangible products from ecosystems - food, water, raw materials, genetic resources',
      'Regulation & Maintenance': 'Benefits from ecosystem processes - climate regulation, water purification, pollination, pest control',
      'Cultural': 'Non-material benefits - recreation, aesthetic values, spiritual significance, education'
    },
    zuluRelevance: 'Useful for structuring ecosystem service assessments and ensuring comprehensive coverage of benefits from restoration projects.',
    linkedConcepts: ['SEEA-EA', 'Ecosystem Services', 'Natural Capital Protocol'],
    resources: [
      { name: 'CICES Website', url: 'https://cices.eu/' }
    ]
  }
};

// Comprehensive terminology data
export const terminologyData = [
  // Core Concepts
  { term: 'Ecosystem Services', definition: 'Benefits people obtain from ecosystems. Categorised as provisioning (food, water), regulating (climate, water quality), cultural (recreation, spiritual), and supporting (nutrient cycling).', framework: 'Core Concept', difficulty: 'Beginner', zuluContext: 'Every Zulu project delivers multiple ecosystem services - carbon sequestration, water regulation, biodiversity habitat, and cultural value.' },
  { term: 'Natural Capital', definition: 'The stock of natural assets (air, water, soil, living organisms, geological resources) that yield flows of ecosystem services over time.', framework: 'Core Concept', difficulty: 'Beginner', zuluContext: 'Zulu helps landowners and investors grow their natural capital stocks through restoration.' },
  { term: 'Nature-positive', definition: 'Halting and reversing nature loss by 2030 (measured from 2020 baseline), with full recovery by 2050. The nature equivalent of "net zero" for climate.', framework: 'Policy', difficulty: 'Beginner', zuluContext: 'Zulu\'s mission aligns with global nature-positive goals - regenerating 1 billion hectares.' },
  
  // TNFD Terms
  { term: 'Double Materiality', definition: 'Assessing both how nature affects the organisation (financial materiality) AND how the organisation affects nature (impact materiality). Required under CSRD/ESRS.', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Corporate clients need to understand both directions when assessing their nature-related risks.' },
  { term: 'Dependency', definition: 'An organisation\'s reliance on nature to function - e.g. clean water for operations, pollination for agricultural supply chains, stable climate for logistics.', framework: 'TNFD', difficulty: 'Beginner', zuluContext: 'Understanding dependencies helps identify which restoration projects will most benefit a client.' },
  { term: 'Impact', definition: 'Effect of business activities on nature - can be positive (restoration, sustainable practices) or negative (pollution, land conversion, overextraction).', framework: 'TNFD', difficulty: 'Beginner', zuluContext: 'Zulu projects create positive impacts that can offset negative impacts elsewhere in a company\'s value chain.' },
  { term: 'LEAP Approach', definition: 'TNFD\'s integrated assessment process: Locate (interface with nature), Evaluate (dependencies & impacts), Assess (risks & opportunities), Prepare (respond & report).', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Useful framework for structuring client conversations about their nature-related journey.' },
  { term: 'Nature-related Risk', definition: 'Potential threats to an organisation from its dependencies and impacts on nature. Categories: physical, transition, and systemic risks.', framework: 'TNFD', difficulty: 'Intermediate', zuluContext: 'Nature-positive investments through Zulu can mitigate transition risks (regulatory, reputational).' },
  
  // SBTN Terms
  { term: 'Mitigation Hierarchy', definition: 'Sequential approach: Avoid impacts first → Minimise unavoidable impacts → Restore affected areas → Offset residual impacts. Higher steps take priority.', framework: 'SBTN', difficulty: 'Intermediate', zuluContext: 'Restoration and offsetting come after avoid/minimise - important when advising corporate clients on strategy.' },
  { term: 'AR3T Framework', definition: 'SBTN\'s action framework: Avoid, Reduce, Regenerate & Restore, Transform. Guides how companies should respond to nature targets.', framework: 'SBTN', difficulty: 'Intermediate', zuluContext: 'Zulu projects primarily deliver in the Regenerate & Restore category.' },
  { term: 'Material Impact Driver', definition: 'A pressure on nature that is significant for a company\'s value chain. Examples: land use change, resource exploitation, pollution, invasive species, climate change.', framework: 'SBTN', difficulty: 'Advanced', zuluContext: 'Identifying material impact drivers helps target restoration investments appropriately.' },
  
  // Carbon Terms
  { term: 'Additionality', definition: 'Would this outcome have happened without the intervention/investment? Carbon credits must demonstrate the project wouldn\'t have occurred under business-as-usual.', framework: 'Carbon Standards', difficulty: 'Advanced', zuluContext: 'All WCC/Peatland Code projects must pass additionality tests - financial, regulatory, and barrier analysis.' },
  { term: 'Permanence', definition: 'Will the carbon stay stored / will the habitat persist over the crediting period? Risk of reversal (fire, disease, land use change) must be managed.', framework: 'Carbon Standards', difficulty: 'Intermediate', zuluContext: 'WCC requires 100-year commitments; Peatland Code 30+ years. Buffer pools protect against reversal risk.' },
  { term: 'Leakage', definition: 'Displacement of harmful activities to other locations as a result of the project. E.g. protecting one forest leads to another being cleared instead.', framework: 'Carbon Standards', difficulty: 'Advanced', zuluContext: 'UK standards have lower leakage risk than international projects due to strong land use planning.' },
  { term: 'MRV', definition: 'Measurement, Reporting, Verification - the systems for tracking project outcomes and independently validating them against standards.', framework: 'Carbon Standards', difficulty: 'Intermediate', zuluContext: 'Zulu\'s technology platform supports MRV across the project lifecycle.' },
  { term: 'Baseline', definition: 'The starting condition against which change is measured. Must represent what would have happened without the project (additionality).', framework: 'Carbon Standards', difficulty: 'Beginner', zuluContext: 'Baseline assessments are critical first step in any restoration project.' },
  { term: 'PIU', definition: 'Pending Issuance Unit - carbon credit representing future projected sequestration under the Woodland Carbon Code. Carries delivery risk.', framework: 'Woodland Carbon Code', difficulty: 'Intermediate', zuluContext: 'PIUs are typically sold at lower prices than WCUs to reflect delivery risk.' },
  { term: 'WCU', definition: 'Woodland Carbon Unit - verified, issued carbon credit from woodland projects. Represents one tonne of CO2 sequestered and verified.', framework: 'Woodland Carbon Code', difficulty: 'Intermediate', zuluContext: 'WCUs are the gold standard UK woodland carbon credit.' },
  { term: 'Buffer Pool', definition: 'Percentage of carbon units withheld from issuance to provide insurance against project underperformance or reversal. Typically 15-20%.', framework: 'Carbon Standards', difficulty: 'Intermediate', zuluContext: 'Buffer requirements affect project economics - built into financial models.' },
  
  // BNG Terms
  { term: 'Habitat Units', definition: 'Metric used in BNG to quantify biodiversity value. Calculated as: Area (ha) × Distinctiveness × Condition × Strategic Significance.', framework: 'BNG', difficulty: 'Intermediate', zuluContext: 'Understanding habitat unit calculations helps identify BNG revenue potential for restoration sites.' },
  { term: 'Distinctiveness', definition: 'Relative biodiversity value of a habitat type. Scale from Very Low to Very High. Ancient woodland = Very High; amenity grassland = Low.', framework: 'BNG', difficulty: 'Intermediate', zuluContext: 'Higher distinctiveness habitats generate more valuable BNG units but are harder to create.' },
  { term: 'Strategic Significance', definition: 'Multiplier for habitats in locally identified priority areas (Local Nature Recovery Strategies). Rewards delivery in the right places.', framework: 'BNG', difficulty: 'Advanced', zuluContext: 'Aligning projects with LNRS priorities increases BNG unit value.' },
  { term: 'Trading Rules', definition: 'BNG requirements for which habitat types can compensate for which losses. Must trade "like for like" or "trade up" in distinctiveness.', framework: 'BNG', difficulty: 'Advanced', zuluContext: 'Trading rules affect which developments can purchase which habitat bank units.' },
  
  // Nature Markets
  { term: 'Stacking', definition: 'Selling multiple ecosystem service credits from the same land parcel (e.g. carbon + biodiversity + water). Requires avoiding double-counting.', framework: 'Nature Markets', difficulty: 'Advanced', zuluContext: 'Stacking multiple revenue streams improves project economics but needs careful structuring.' },
  { term: 'Bundling', definition: 'Combining multiple ecosystem services into a single integrated credit or payment. One price for multiple benefits.', framework: 'Nature Markets', difficulty: 'Advanced', zuluContext: 'Some buyers prefer bundled offerings that demonstrate multiple co-benefits.' },
  { term: 'Habitat Banking', definition: 'Creating biodiversity units in advance of demand, registering them on a marketplace, and selling to developers who need to offset impacts.', framework: 'Nature Markets', difficulty: 'Intermediate', zuluContext: 'Potential future revenue model for Zulu restoration sites.' },
  { term: 'Nature Credit', definition: 'Tradeable unit representing measured, verified improvement in nature. Emerging market distinct from carbon credits.', framework: 'Nature Markets', difficulty: 'Intermediate', zuluContext: 'UK biodiversity credit market is developing - watch this space.' },
  
  // UK Policy
  { term: 'SSSI', definition: 'Site of Special Scientific Interest - legally protected conservation site in UK. Highest level of protection for wildlife and geology.', framework: 'UK Policy', difficulty: 'Beginner', zuluContext: 'Zulu has delivered Lost Woods projects on SSSI-designated ancient woodland sites.' },
  { term: 'Ancient Woodland', definition: 'Woodland that has existed continuously since at least 1600 (England/Wales) or 1750 (Scotland). Irreplaceable habitat with unique biodiversity.', framework: 'UK Conservation', difficulty: 'Beginner', zuluContext: 'Ancient woodland restoration is central to the Lost Woods programme.' },
  { term: 'LNRS', definition: 'Local Nature Recovery Strategy - mandatory local authority strategies mapping priorities for nature recovery. Informs BNG strategic significance.', framework: 'UK Policy', difficulty: 'Intermediate', zuluContext: 'Aligning projects with LNRS priorities increases their value and impact.' },
  { term: 'Environmental Land Management (ELM)', definition: 'Post-Brexit UK agricultural support scheme paying farmers for environmental outcomes. Includes SFI, Countryside Stewardship, Landscape Recovery.', framework: 'UK Policy', difficulty: 'Intermediate', zuluContext: 'ELM schemes can be combined with carbon/BNG revenues on restoration projects.' },
  
  // Zulu Specific
  { term: 'Lost Woods', definition: 'Zulu programme restoring remnant ancient woodlands with <20% canopy cover remaining. Pioneered pathway for ancient woodland restoration under WCC.', framework: 'Zulu Ecosystems', difficulty: 'Intermediate', zuluContext: 'Signature Zulu programme - uses historic maps and machine learning to locate sites.' },
  { term: 'Natural Regeneration', definition: 'Allowing woodland to establish from natural seed sources rather than planting. Often cheaper, better genetic diversity, more ecologically appropriate.', framework: 'Restoration', difficulty: 'Beginner', zuluContext: 'Zulu develops natural regeneration projects under WCC where site conditions are suitable.' },
  { term: 'Catchment-scale', definition: 'Planning and delivering interventions at the scale of a river catchment/watershed rather than individual sites. Enables landscape connectivity.', framework: 'Landscape Planning', difficulty: 'Intermediate', zuluContext: 'Zulu\'s work with water companies operates at catchment scale (e.g. Idle & Torne catchment with Severn Trent).' }
];

// UK ecosystem data for map
export const ukEcosystems = {
  habitats: [
    { id: 'broadleaf', name: 'Broadleaved Woodland', color: '#228B22', carbonDensity: 'High', biodiversityValue: 'High' },
    { id: 'conifer', name: 'Coniferous Woodland', color: '#006400', carbonDensity: 'High', biodiversityValue: 'Medium' },
    { id: 'peatland', name: 'Peatland/Bog', color: '#8B4513', carbonDensity: 'Very High', biodiversityValue: 'High' },
    { id: 'heathland', name: 'Heathland', color: '#9370DB', carbonDensity: 'Medium', biodiversityValue: 'High' },
    { id: 'grassland', name: 'Semi-natural Grassland', color: '#90EE90', carbonDensity: 'Low', biodiversityValue: 'Medium-High' },
    { id: 'wetland', name: 'Wetland/Fen', color: '#4682B4', carbonDensity: 'High', biodiversityValue: 'Very High' },
    { id: 'coastal', name: 'Coastal Habitats', color: '#F0E68C', carbonDensity: 'Medium', biodiversityValue: 'High' }
  ],
  designations: [
    { id: 'sssi', name: 'SSSI', description: 'Site of Special Scientific Interest' },
    { id: 'sac', name: 'SAC', description: 'Special Area of Conservation' },
    { id: 'spa', name: 'SPA', description: 'Special Protection Area' },
    { id: 'nnr', name: 'NNR', description: 'National Nature Reserve' },
    { id: 'aonb', name: 'AONB/NL', description: 'Area of Outstanding Natural Beauty / National Landscape' }
  ]
};

// Risk screening data
export const riskCategories = [
  {
    name: 'Physical Risks',
    description: 'Direct risks from degradation of nature and ecosystem services',
    subcategories: [
      { name: 'Water scarcity', relevantSectors: ['Agriculture', 'Water Utilities', 'Manufacturing', 'Food & Beverage', 'Mining'], indicators: ['Water stress', 'Groundwater depletion', 'Drought frequency'] },
      { name: 'Soil degradation', relevantSectors: ['Agriculture', 'Construction', 'Food & Beverage', 'Forestry'], indicators: ['Erosion rates', 'Organic matter loss', 'Compaction'] },
      { name: 'Pollinator decline', relevantSectors: ['Agriculture', 'Food & Beverage', 'Cosmetics', 'Pharmaceuticals'], indicators: ['Pollinator populations', 'Crop dependency', 'Wild flower availability'] },
      { name: 'Flooding', relevantSectors: ['Insurance', 'Real Estate', 'Infrastructure', 'Utilities', 'Transport'], indicators: ['Flood frequency', 'Natural flood management capacity', 'Upstream land use'] },
      { name: 'Raw material scarcity', relevantSectors: ['Manufacturing', 'Pharmaceuticals', 'Textiles', 'Construction'], indicators: ['Supply chain exposure', 'Substitutability', 'Price volatility'] },
      { name: 'Pest & disease outbreaks', relevantSectors: ['Agriculture', 'Forestry', 'Food & Beverage'], indicators: ['Monoculture extent', 'Natural enemy populations', 'Climate suitability shifts'] }
    ]
  },
  {
    name: 'Transition Risks',
    description: 'Risks from policy, market, and technology shifts toward nature-positive economy',
    subcategories: [
      { name: 'Regulatory change', relevantSectors: ['Construction', 'Agriculture', 'Retail', 'Finance', 'All'], indicators: ['BNG requirements', 'EUDR compliance', 'Nature disclosure mandates'] },
      { name: 'Shifting consumer preferences', relevantSectors: ['Food & Beverage', 'Fashion', 'Tourism', 'Retail'], indicators: ['Sustainable product demand', 'Certification uptake', 'Brand reputation'] },
      { name: 'Investor requirements', relevantSectors: ['All publicly listed', 'Finance', 'Real Estate'], indicators: ['TNFD adoption', 'ESG integration', 'Nature-related exclusions'] },
      { name: 'Supply chain due diligence', relevantSectors: ['Retail', 'Manufacturing', 'Food & Beverage', 'Fashion'], indicators: ['Deforestation exposure', 'Traceability gaps', 'Supplier compliance'] },
      { name: 'Nature pricing mechanisms', relevantSectors: ['Energy', 'Transport', 'Heavy Industry', 'Agriculture'], indicators: ['Carbon price exposure', 'Water pricing', 'Pollution charges'] },
      { name: 'Stranded assets', relevantSectors: ['Agriculture', 'Real Estate', 'Extractives'], indicators: ['Location in sensitive areas', 'Regulatory trajectory', 'Alternative use options'] }
    ]
  },
  {
    name: 'Systemic Risks',
    description: 'Risks from potential collapse or fundamental shifts in natural systems',
    subcategories: [
      { name: 'Ecosystem collapse', relevantSectors: ['Agriculture', 'Fisheries', 'Tourism', 'Insurance'], indicators: ['Ecosystem condition trends', 'Tipping point proximity', 'Recovery potential'] },
      { name: 'Tipping points', relevantSectors: ['Insurance', 'Finance', 'Infrastructure', 'All'], indicators: ['Amazon dieback risk', 'Permafrost thaw', 'Coral reef collapse'] },
      { name: 'Biodiversity loss cascade', relevantSectors: ['Pharmaceuticals', 'Agriculture', 'Biotechnology'], indicators: ['Genetic resource availability', 'Food web integrity', 'Resilience capacity'] },
      { name: 'Nature-climate feedback loops', relevantSectors: ['All'], indicators: ['Carbon sink capacity', 'Albedo changes', 'Methane release'] }
    ]
  }
];

// Sectors for risk screening
export const sectors = [
  'Agriculture',
  'Water Utilities', 
  'Construction',
  'Food & Beverage',
  'Finance',
  'Real Estate',
  'Retail',
  'Manufacturing',
  'Pharmaceuticals',
  'Energy',
  'Transport',
  'Tourism',
  'Forestry',
  'Mining',
  'Insurance'
];

// Project scoping parameters
export const projectScopeData = {
  ecosystemTypes: [
    { name: 'Native Woodland Creation', baseEffort: 40, carbonPotential: 'High', biodiversityPotential: 'High', waterPotential: 'Medium', wccEligible: true, peatlandEligible: false, bngPotential: 'High' },
    { name: 'Ancient Woodland Restoration (Lost Woods)', baseEffort: 60, carbonPotential: 'Medium', biodiversityPotential: 'Very High', waterPotential: 'Medium', wccEligible: true, peatlandEligible: false, bngPotential: 'Very High' },
    { name: 'Natural Regeneration', baseEffort: 35, carbonPotential: 'Medium-High', biodiversityPotential: 'High', waterPotential: 'Medium', wccEligible: true, peatlandEligible: false, bngPotential: 'High' },
    { name: 'Peatland Restoration', baseEffort: 55, carbonPotential: 'Very High', biodiversityPotential: 'High', waterPotential: 'Very High', wccEligible: false, peatlandEligible: true, bngPotential: 'High' },
    { name: 'Riparian Woodland', baseEffort: 45, carbonPotential: 'Medium', biodiversityPotential: 'High', waterPotential: 'Very High', wccEligible: true, peatlandEligible: false, bngPotential: 'High' },
    { name: 'Species-rich Grassland', baseEffort: 35, carbonPotential: 'Low', biodiversityPotential: 'High', waterPotential: 'Medium', wccEligible: false, peatlandEligible: false, bngPotential: 'Medium' },
    { name: 'Wetland Creation', baseEffort: 50, carbonPotential: 'Medium', biodiversityPotential: 'Very High', waterPotential: 'Very High', wccEligible: false, peatlandEligible: false, bngPotential: 'Very High' }
  ],
  assessmentDepths: [
    { name: 'Desktop Screening', multiplier: 0.3, description: 'GIS analysis, existing data review, high-level opportunity assessment', deliverables: ['Opportunity map', 'Data gap analysis', 'Indicative feasibility'] },
    { name: 'Feasibility Study', multiplier: 0.6, description: 'Site visit, stakeholder scoping, outline design, preliminary financials', deliverables: ['Site assessment report', 'Outline project design', 'Indicative carbon/BNG estimates', 'Financial summary'] },
    { name: 'Full Assessment', multiplier: 1.0, description: 'Detailed surveys, financial modelling, project design document, stakeholder engagement', deliverables: ['Full baseline surveys', 'Detailed project design', 'Carbon/BNG calculations', 'Financial model', 'Risk register'] },
    { name: 'Implementation Support', multiplier: 1.5, description: 'WCC/Peatland Code registration, contractor management, monitoring setup, ongoing advisory', deliverables: ['Code registration', 'Contractor specifications', 'Monitoring protocol', 'Verification support'] }
  ],
  sizeCategories: [
    { name: 'Small (<50 ha)', multiplier: 0.7, typical: 'Single farm, estate parcel' },
    { name: 'Medium (50-200 ha)', multiplier: 1.0, typical: 'Multiple land parcels, small estate' },
    { name: 'Large (200-500 ha)', multiplier: 1.4, typical: 'Large estate, multi-stakeholder' },
    { name: 'Landscape (500+ ha)', multiplier: 2.0, typical: 'Catchment-scale, multiple landowners' }
  ]
};
