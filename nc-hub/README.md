# Natural Capital Learning Hub

A personalised learning platform for natural capital, ecosystem services, and nature restoration - tailored for a career transition into commercial delivery at Zulu Ecosystems.

![NC Hub Screenshot](screenshot.png)

## Features

### 📚 Learning Tools
- **Frameworks Explorer**: Deep dives into TNFD, SBTN, Natural Capital Protocol, Woodland Carbon Code, Peatland Code, BNG, SEEA-EA, and CICES
- **Terminology Flashcards**: 30+ key terms with definitions, difficulty levels, and Zulu-specific context
- **Project Scoping Calculator**: Understand how restoration assessments are structured and estimated
- **Risk Screening Tool**: Interactive LEAP approach walkthrough with sector-specific risks

### 🗺️ UK Map Explorer
- Interactive UK-wide map with ecosystem layers
- Peatland, woodland, and wetland visualisation
- Zulu project locations marked
- Scenario modelling for restoration interventions
- Save and bookmark locations

### 🤖 AI Research Agent
- Web search enabled for current information
- Research mode: Find latest policy updates, case studies, standards
- Learning mode: Quiz yourself, identify knowledge gaps
- Science-backed, verified information focus

### 💾 Persistent Storage
- Track learning progress across sessions
- Add your own custom terminology
- Save notes and map locations
- Works offline with localStorage, syncs with Supabase when configured

## Quick Start

### Prerequisites
- Node.js 18+ installed
- A GitHub account
- A Vercel account (free)

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/nc-hub.git
cd nc-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

## Deployment Guide

### Step 1: Push to GitHub

1. Create a new repository on GitHub called `nc-hub`

2. Initialize and push your code:
```bash
cd nc-hub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nc-hub.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub

2. Click "New Project"

3. Import your `nc-hub` repository

4. Vercel will auto-detect it's a Vite project - just click "Deploy"

5. Wait 1-2 minutes for deployment

6. Your app is now live at `https://nc-hub-YOUR_USERNAME.vercel.app`!

### Step 3 (Optional): Set Up Supabase for Cloud Sync

The app works perfectly with localStorage only, but if you want to sync across devices:

1. Create a free account at [supabase.com](https://supabase.com)

2. Create a new project

3. Go to SQL Editor and run:

```sql
-- Learning Progress Table
CREATE TABLE learning_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT DEFAULT 'default',
  concepts_learned INTEGER DEFAULT 0,
  frameworks_explored TEXT[] DEFAULT '{}',
  study_streak INTEGER DEFAULT 1,
  last_study_date DATE DEFAULT CURRENT_DATE,
  total_time_minutes INTEGER DEFAULT 0,
  known_terms TEXT[] DEFAULT '{}',
  review_terms TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Custom Terminology Table
CREATE TABLE custom_terminology (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT DEFAULT 'default',
  term TEXT NOT NULL,
  definition TEXT NOT NULL,
  framework TEXT,
  difficulty TEXT DEFAULT 'Intermediate',
  zulu_context TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Notes Table
CREATE TABLE notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT DEFAULT 'default',
  title TEXT NOT NULL,
  content TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Saved Locations Table
CREATE TABLE saved_locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT DEFAULT 'default',
  name TEXT NOT NULL,
  lat DECIMAL NOT NULL,
  lng DECIMAL NOT NULL,
  zoom INTEGER DEFAULT 10,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_terminology ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_locations ENABLE ROW LEVEL SECURITY;

-- Create policies (for anonymous access - you can make this more secure later)
CREATE POLICY "Allow all" ON learning_progress FOR ALL USING (true);
CREATE POLICY "Allow all" ON custom_terminology FOR ALL USING (true);
CREATE POLICY "Allow all" ON notes FOR ALL USING (true);
CREATE POLICY "Allow all" ON saved_locations FOR ALL USING (true);
```

4. Go to Settings > API and copy your:
   - Project URL
   - anon/public key

5. In Vercel, go to your project Settings > Environment Variables and add:
   - `VITE_SUPABASE_URL` = your project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon key

6. Redeploy (Vercel will do this automatically when you add env vars)

## Project Structure

```
nc-hub/
├── src/
│   ├── components/
│   │   └── UKMapExplorer.jsx    # Interactive UK map
│   ├── data/
│   │   └── content.js           # Frameworks, terminology, scoping data
│   ├── lib/
│   │   ├── store.js             # Zustand state management
│   │   └── supabase.js          # Database client
│   ├── App.jsx                  # Main application
│   ├── main.jsx                 # Entry point
│   └── index.css                # Styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customisation

### Adding New Terminology

Edit `src/data/content.js` and add to the `terminologyData` array:

```javascript
{
  term: 'Your Term',
  definition: 'The definition...',
  framework: 'Which framework it relates to',
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
  zuluContext: 'How this relates to Zulu work (optional)'
}
```

### Adding New Frameworks

Edit `src/data/content.js` and add to the `frameworksData` object:

```javascript
'Framework Name': {
  fullName: 'Full Name of Framework',
  category: 'Category Type',
  description: 'Description...',
  keyComponents: ['Component 1', 'Component 2'],
  relevantTo: ['Audience 1', 'Audience 2'],
  zuluRelevance: 'How it connects to Zulu work',
  linkedConcepts: ['Related Term 1', 'Related Term 2'],
  resources: [
    { name: 'Resource Name', url: 'https://...' }
  ]
}
```

### Enhancing the Map

The map currently shows demo data. To integrate real UK data:

1. **Natural England MAGIC Map**: Register for an API key at [magic.gov.uk](https://magic.defra.gov.uk/)
2. **OS Data Hub**: Get free API access at [osdatahub.os.uk](https://osdatahub.os.uk/)
3. **CEH Land Cover**: Available via [ceh.ac.uk](https://www.ceh.ac.uk/services/land-cover-map-2020)

Then update `src/components/UKMapExplorer.jsx` to use the actual API endpoints.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **MapLibre GL** - Mapping
- **Zustand** - State management
- **Supabase** - Database (optional)

## Contributing

Feel free to add new frameworks, terminology, or features as you learn!

## License

MIT - Use freely for your learning journey.

---

Built for the transition into natural capital 🌲
