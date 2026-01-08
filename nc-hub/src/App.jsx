import React, { useEffect, useState } from 'react';
import { useStore } from './lib/store';
import { 
  Home, Layers, BookOpen, Calculator, Shield, Bot, Map, 
  Settings, ChevronRight, TreePine, Leaf, Menu, X,
  Brain, Target, Clock, Sparkles, ArrowRight, Plus,
  Check, RefreshCw, Search, ExternalLink, Building2,
  Mountain, TrendingUp, FileText, Send, Globe, ChevronDown
} from 'lucide-react';
import { frameworksData, terminologyData, projectScopeData, riskCategories, sectors, ukPolicyData, globalPolicyData } from './data/content';
import UKMapExplorer from './components/UKMapExplorer';

// ============ DASHBOARD ============
function Dashboard({ setActiveTab }) {
  const { progress } = useStore();
  const [todaysConcept] = useState(() => terminologyData[Math.floor(Math.random() * terminologyData.length)]);

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur">
              <TreePine className="w-6 h-6 text-emerald-300" />
            </div>
            <span className="text-emerald-300 text-sm font-medium tracking-wide uppercase">Natural Capital Learning Hub</span>
          </div>
          <h1 className="text-3xl font-light text-white mb-2">Welcome back</h1>
          <p className="text-emerald-100/80 max-w-xl">Your personalised learning environment for natural capital, ecosystem services, and nature restoration.</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Concepts Learned', value: progress.knownTerms.length, icon: Brain, color: 'text-emerald-400' },
          { label: 'Frameworks Explored', value: progress.frameworksExplored.length, icon: Layers, color: 'text-teal-400' },
          { label: 'Study Streak', value: `${progress.studyStreak} days`, icon: Target, color: 'text-cyan-400' },
          { label: 'Time Invested', value: `${Math.round(progress.totalTimeMinutes / 60)}h`, icon: Clock, color: 'text-sky-400' }
        ].map((stat, i) => (
          <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</span>
            </div>
            <p className="text-2xl font-light text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-medium text-white">Today's Concept</h2>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-5">
          <h3 className="text-xl text-emerald-400 font-medium mb-2">{todaysConcept.term}</h3>
          <p className="text-slate-300 mb-3">{todaysConcept.definition}</p>
          {todaysConcept.zuluContext && (
            <p className="text-sm text-teal-300/80 italic">Zulu context: {todaysConcept.zuluContext}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { tab: 'frameworks', icon: Layers, color: 'text-teal-400', title: 'Explore Frameworks', desc: 'Deep dive into TNFD, SBTN, WCC' },
          { tab: 'terminology', icon: BookOpen, color: 'text-cyan-400', title: 'Practice Terminology', desc: 'Flashcards to build fluency' },
          { tab: 'map', icon: Map, color: 'text-emerald-400', title: 'UK Map Explorer', desc: 'Visualise ecosystems' }
        ].map((item, i) => (
          <button 
            key={i}
            onClick={() => setActiveTab(item.tab)}
            className="group bg-slate-800/30 hover:bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-left transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <item.icon className={`w-8 h-8 ${item.color}`} />
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-medium text-white">Zulu Ecosystems Context</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-900/30 rounded-lg p-4">
            <h4 className="text-emerald-400 font-medium mb-2">Core Services</h4>
            <p className="text-slate-300">Woodland Creation • Peatland Restoration • Lost Woods Programme • Natural Regeneration</p>
          </div>
          <div className="bg-slate-900/30 rounded-lg p-4">
            <h4 className="text-emerald-400 font-medium mb-2">Key Standards</h4>
            <p className="text-slate-300">Woodland Carbon Code • Peatland Code • Biodiversity Net Gain • Water Quality Credits</p>
          </div>
          <div className="bg-slate-900/30 rounded-lg p-4">
            <h4 className="text-emerald-400 font-medium mb-2">Client Types</h4>
            <p className="text-slate-300">Landowners • Corporates • Water Companies • Investors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ FRAMEWORKS ============
function FrameworksTab() {
  const [selected, setSelected] = useState(null);
  const { updateProgress, progress } = useStore();

  const handleSelect = (key) => {
    setSelected(selected === key ? null : key);
    if (!progress.frameworksExplored.includes(key)) {
      updateProgress('frameworksExplored', key);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light text-white mb-1">Frameworks & Standards</h2>
        <p className="text-slate-400">Deep dive into the key frameworks shaping natural capital</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(frameworksData).map(([key, fw]) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            className={`text-left p-5 rounded-xl border transition-all ${
              selected === key ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50'
            }`}
          >
            <span className="text-xs text-slate-500 uppercase">{fw.category}</span>
            <h3 className="text-lg font-medium text-white mt-1 mb-2">{key}</h3>
            <p className="text-sm text-slate-400 line-clamp-2">{fw.description}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="p-6 border-b border-slate-700/50">
            <span className="text-xs text-emerald-400 uppercase">{frameworksData[selected].category}</span>
            <h3 className="text-2xl font-light text-white mt-1">{selected}</h3>
            <p className="text-slate-400 mt-1">{frameworksData[selected].fullName}</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-sm font-medium text-slate-300 mb-3 uppercase">Key Components</h4>
              <div className="flex flex-wrap gap-2">
                {frameworksData[selected].keyComponents.map((c, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-sm text-slate-300">{c}</span>
                ))}
              </div>
            </div>

            {frameworksData[selected].leapStages && (
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3 uppercase">LEAP Approach</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(frameworksData[selected].leapStages).map(([stage, desc]) => (
                    <div key={stage} className="bg-slate-900/50 rounded-lg p-4">
                      <span className="text-emerald-400 font-medium">{stage}</span>
                      <p className="text-sm text-slate-400 mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {frameworksData[selected].ar3tFramework && (
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3 uppercase">AR3T Framework</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(frameworksData[selected].ar3tFramework).map(([stage, desc]) => (
                    <div key={stage} className="bg-slate-900/50 rounded-lg p-4">
                      <span className="text-emerald-400 font-medium">{stage}</span>
                      <p className="text-sm text-slate-400 mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/20">
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Zulu Ecosystems Relevance</h4>
              <p className="text-sm text-slate-300">{frameworksData[selected].zuluRelevance}</p>
            </div>

            {frameworksData[selected].resources && (
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3 uppercase">Resources</h4>
                <div className="flex flex-wrap gap-2">
                  {frameworksData[selected].resources.map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-slate-300 transition-colors">
                      {r.name} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============ TERMINOLOGY ============
function TerminologyTab() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [filter, setFilter] = useState('All');
  const { markTermKnown, markTermForReview, progress } = useStore();

  const frameworks = ['All', ...new Set(terminologyData.map(t => t.framework))];
  const filtered = filter === 'All' ? terminologyData : terminologyData.filter(t => t.framework === filter);
  const term = filtered[current];

  const handleKnown = () => {
    markTermKnown(term.term);
    setShowAnswer(false);
    setCurrent((current + 1) % filtered.length);
  };

  const handleReview = () => {
    markTermForReview(term.term);
    setShowAnswer(false);
    setCurrent((current + 1) % filtered.length);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light text-white mb-1">Terminology Flashcards</h2>
          <p className="text-slate-400">Build fluency in natural capital language</p>
        </div>
        <div className="text-sm">
          <span className="text-emerald-400">{progress.knownTerms.length} known</span>
          <span className="text-slate-500 mx-2">•</span>
          <span className="text-amber-400">{progress.reviewTerms.length} reviewing</span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {frameworks.map(f => (
          <button
            key={f}
            onClick={() => { setFilter(f); setCurrent(0); setShowAnswer(false); }}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              filter === f ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {term && (
        <div className="max-w-2xl mx-auto">
          <div 
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 cursor-pointer min-h-[300px] flex flex-col justify-center items-center text-center hover:bg-slate-800/70 transition-all"
          >
            {!showAnswer ? (
              <>
                <span className="text-xs text-slate-500 uppercase mb-4">{term.framework}</span>
                <h3 className="text-3xl font-light text-white mb-4">{term.term}</h3>
                <p className="text-slate-500 text-sm">Click to reveal definition</p>
              </>
            ) : (
              <>
                <span className="text-xs text-emerald-400 uppercase mb-4">{term.difficulty}</span>
                <p className="text-xl text-slate-200 leading-relaxed mb-4">{term.definition}</p>
                {term.zuluContext && (
                  <p className="text-sm text-teal-300/80 italic">Zulu: {term.zuluContext}</p>
                )}
              </>
            )}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={handleReview} className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-slate-300 transition-colors">
              <X className="w-5 h-5" /> Still Learning
            </button>
            <button onClick={handleKnown} className="flex items-center gap-2 px-6 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 rounded-xl text-emerald-400 border border-emerald-500/30 transition-colors">
              <Check className="w-5 h-5" /> Got It
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">{current + 1} of {filtered.length}</p>
        </div>
      )}
    </div>
  );
}

// ============ SCOPING ============
function ScopingTab() {
  const [ecosystem, setEcosystem] = useState(projectScopeData.ecosystemTypes[0]);
  const [depth, setDepth] = useState(projectScopeData.assessmentDepths[2]);
  const [size, setSize] = useState(projectScopeData.sizeCategories[1]);

  const days = Math.round(ecosystem.baseEffort * depth.multiplier * size.multiplier);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light text-white mb-1">Project Scoping Calculator</h2>
        <p className="text-slate-400">Understand how restoration assessments are structured</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-slate-300 uppercase">Ecosystem Type</h3>
          <div className="space-y-2">
            {projectScopeData.ecosystemTypes.map(e => (
              <button key={e.name} onClick={() => setEcosystem(e)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  ecosystem.name === e.name ? 'bg-emerald-900/30 border-emerald-500/50 text-white' : 'bg-slate-800/30 border-slate-700/50 text-slate-400'
                }`}>
                {e.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-slate-300 uppercase">Assessment Depth</h3>
          <div className="space-y-2">
            {projectScopeData.assessmentDepths.map(d => (
              <button key={d.name} onClick={() => setDepth(d)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  depth.name === d.name ? 'bg-teal-900/30 border-teal-500/50 text-white' : 'bg-slate-800/30 border-slate-700/50 text-slate-400'
                }`}>
                <div className="font-medium">{d.name}</div>
                <div className="text-xs text-slate-500 mt-1">{d.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-slate-300 uppercase">Project Size</h3>
          <div className="space-y-2">
            {projectScopeData.sizeCategories.map(s => (
              <button key={s.name} onClick={() => setSize(s)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  size.name === s.name ? 'bg-cyan-900/30 border-cyan-500/50 text-white' : 'bg-slate-800/30 border-slate-700/50 text-slate-400'
                }`}>
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
        <h3 className="text-lg font-medium text-white mb-4">Indicative Estimate</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <span className="text-xs text-slate-500 uppercase">Effort</span>
            <p className="text-2xl font-light text-white mt-1">{days} days</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <span className="text-xs text-slate-500 uppercase">Carbon</span>
            <p className="text-xl font-light text-emerald-400 mt-1">{ecosystem.carbonPotential}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <span className="text-xs text-slate-500 uppercase">Biodiversity</span>
            <p className="text-xl font-light text-teal-400 mt-1">{ecosystem.biodiversityPotential}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <span className="text-xs text-slate-500 uppercase">Water</span>
            <p className="text-xl font-light text-cyan-400 mt-1">{ecosystem.waterPotential}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <span className="text-xs text-slate-500 uppercase">BNG Potential</span>
            <p className="text-xl font-light text-violet-400 mt-1">{ecosystem.bngPotential}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ RISK SCREENING ============
function RiskScreeningTab() {
  const [sector, setSector] = useState('Agriculture');
  const [leapStage, setLeapStage] = useState('L');

  const relevantRisks = riskCategories.flatMap(cat =>
    cat.subcategories.filter(sub => sub.relevantSectors.includes(sector)).map(sub => ({ ...sub, category: cat.name }))
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light text-white mb-1">Nature Risk Screening</h2>
        <p className="text-slate-400">Explore the LEAP approach to nature-related risk assessment</p>
      </div>

      <div className="flex gap-2">
        {[
          { id: 'L', name: 'Locate' },
          { id: 'E', name: 'Evaluate' },
          { id: 'A', name: 'Assess' },
          { id: 'P', name: 'Prepare' }
        ].map(s => (
          <button key={s.id} onClick={() => setLeapStage(s.id)}
            className={`flex-1 p-4 rounded-xl border transition-all ${
              leapStage === s.id ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800/30 border-slate-700/50'
            }`}>
            <span className={`text-2xl font-light ${leapStage === s.id ? 'text-emerald-400' : 'text-slate-500'}`}>{s.id}</span>
            <span className={`text-sm ml-2 ${leapStage === s.id ? 'text-white' : 'text-slate-400'}`}>{s.name}</span>
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium text-slate-300 mb-3 uppercase">Select Sector</h3>
        <div className="flex gap-2 flex-wrap">
          {sectors.map(s => (
            <button key={s} onClick={() => setSector(s)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sector === s ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
              }`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
        <h3 className="text-lg font-medium text-white mb-4">Relevant Nature Risks for {sector}</h3>
        <div className="space-y-3">
          {relevantRisks.map((risk, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg">
              <div className="flex-1">
                <p className="text-white">{risk.name}</p>
                <p className="text-xs text-slate-500">{risk.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ AGENT ============
function AgentTab() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('research');

  const handleSubmit = async () => {
    if (!query.trim() || loading) return;
    
    const userMsg = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setLoading(true);

    try {
      const systemPrompt = mode === 'research' 
        ? `You are a research assistant specialising in natural capital, ecosystem services, and nature restoration. Focus on verified, science-backed information, UK regulatory context, and practical relevance to project delivery. Be concise but thorough.`
        : `You are a learning coach helping someone transition into natural capital. Quiz them, identify gaps, and build confidence while being rigorous.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          tools: [{ type: 'web_search_20250305', name: 'web_search' }]
        })
      });

      const data = await response.json();
      const content = data.content?.filter(b => b.type === 'text').map(b => b.text).join('\n') || 'Unable to generate response.';
      setMessages(prev => [...prev, { role: 'assistant', content }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error processing request. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-light text-white mb-1">Research Agent</h2>
          <p className="text-slate-400">AI-powered research and learning assistant</p>
        </div>
        <div className="flex gap-2">
          {['research', 'learning'].map(m => (
            <button key={m} onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                mode === m ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' : 'bg-slate-800/50 text-slate-400'
              }`}>
              {m === 'research' ? <Search className="w-4 h-4 inline mr-2" /> : <Brain className="w-4 h-4 inline mr-2" />}
              {m} Mode
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <Bot className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Ask me anything about natural capital or quiz me on concepts.</p>
          </div>
        ) : messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' ? 'bg-emerald-600/20 text-emerald-100' : 'bg-slate-800/50 text-slate-200'
            }`}>
              <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800/50 p-4 rounded-2xl">
              <RefreshCw className="w-4 h-4 animate-spin text-slate-400" />
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Ask a question..."
          className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
        />
        <button onClick={handleSubmit} disabled={loading}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 rounded-xl text-white transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ============ MAIN APP ============
export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { loadCustomTerms, loadNotes, loadSavedLocations } = useStore();

  useEffect(() => {
    loadCustomTerms();
    loadNotes();
    loadSavedLocations();
  }, []);

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'frameworks', name: 'Frameworks', icon: Layers },
    { id: 'policy', name: 'Policy Library', icon: FileText },
    { id: 'news', name: 'News & Updates', icon: TrendingUp },
    { id: 'terminology', name: 'Terminology', icon: BookOpen },
    { id: 'scoping', name: 'Project Scoping', icon: Calculator },
    { id: 'risks', name: 'Risk Screening', icon: Shield },
    { id: 'map', name: 'UK Map', icon: Map },
    { id: 'agent', name: 'Research Agent', icon: Bot }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20 pointer-events-none" />
      
      <div className="relative flex">
        <nav className={`${sidebarOpen ? 'w-64' : 'w-16'} min-h-screen bg-slate-900/50 border-r border-slate-800/50 p-4 flex flex-col transition-all`}>
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Leaf className="w-6 h-6 text-emerald-400" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="font-medium text-white">NC Hub</h1>
                <p className="text-xs text-slate-500">Learning Platform</p>
              </div>
            )}
          </div>

          <div className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  activeTab === tab.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm">{tab.name}</span>}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-slate-800/50">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full px-3 py-2 text-slate-500 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
            {activeTab === 'frameworks' && <FrameworksTab />}
            {activeTab === 'terminology' && <TerminologyTab />}
            {activeTab === 'scoping' && <ScopingTab />}
            {activeTab === 'risks' && <RiskScreeningTab />}
            {activeTab === 'map' && <UKMapExplorer />}
            {activeTab === 'agent' && <AgentTab />}
          </div>
        </main>
      </div>
    </div>
  );
}
