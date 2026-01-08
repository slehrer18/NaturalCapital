import { createClient } from '@supabase/supabase-js'

// These will be replaced with your actual Supabase credentials
// After creating your Supabase project, update these values in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabase !== null
}

// Database operations with fallback to localStorage
export const db = {
  // Learning Progress
  async getProgress() {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('learning_progress')
        .select('*')
        .single()
      if (error && error.code !== 'PGRST116') console.error(error)
      return data
    }
    // Fallback to localStorage
    const stored = localStorage.getItem('nc-hub-progress')
    return stored ? JSON.parse(stored) : null
  },

  async saveProgress(progress) {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('learning_progress')
        .upsert(progress, { onConflict: 'user_id' })
      if (error) console.error(error)
      return data
    }
    // Fallback to localStorage
    localStorage.setItem('nc-hub-progress', JSON.stringify(progress))
    return progress
  },

  // Custom Terminology
  async getCustomTerms() {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('custom_terminology')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) console.error(error)
      return data || []
    }
    const stored = localStorage.getItem('nc-hub-terms')
    return stored ? JSON.parse(stored) : []
  },

  async addCustomTerm(term) {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('custom_terminology')
        .insert(term)
        .select()
        .single()
      if (error) console.error(error)
      return data
    }
    const terms = await this.getCustomTerms()
    const newTerm = { ...term, id: Date.now(), created_at: new Date().toISOString() }
    terms.unshift(newTerm)
    localStorage.setItem('nc-hub-terms', JSON.stringify(terms))
    return newTerm
  },

  async deleteCustomTerm(id) {
    if (isSupabaseConfigured()) {
      const { error } = await supabase
        .from('custom_terminology')
        .delete()
        .eq('id', id)
      if (error) console.error(error)
      return
    }
    const terms = await this.getCustomTerms()
    const filtered = terms.filter(t => t.id !== id)
    localStorage.setItem('nc-hub-terms', JSON.stringify(filtered))
  },

  // Notes
  async getNotes() {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('updated_at', { ascending: false })
      if (error) console.error(error)
      return data || []
    }
    const stored = localStorage.getItem('nc-hub-notes')
    return stored ? JSON.parse(stored) : []
  },

  async saveNote(note) {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('notes')
        .upsert(note)
        .select()
        .single()
      if (error) console.error(error)
      return data
    }
    const notes = await this.getNotes()
    const existing = notes.findIndex(n => n.id === note.id)
    if (existing >= 0) {
      notes[existing] = { ...note, updated_at: new Date().toISOString() }
    } else {
      notes.unshift({ ...note, id: Date.now(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    }
    localStorage.setItem('nc-hub-notes', JSON.stringify(notes))
    return note
  },

  // Map saved locations
  async getSavedLocations() {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('saved_locations')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) console.error(error)
      return data || []
    }
    const stored = localStorage.getItem('nc-hub-locations')
    return stored ? JSON.parse(stored) : []
  },

  async saveLocation(location) {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('saved_locations')
        .insert(location)
        .select()
        .single()
      if (error) console.error(error)
      return data
    }
    const locations = await this.getSavedLocations()
    const newLoc = { ...location, id: Date.now(), created_at: new Date().toISOString() }
    locations.unshift(newLoc)
    localStorage.setItem('nc-hub-locations', JSON.stringify(locations))
    return newLoc
  }
}
