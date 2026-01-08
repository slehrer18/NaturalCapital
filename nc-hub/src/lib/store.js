import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { db } from './supabase'

export const useStore = create(
  persist(
    (set, get) => ({
      // Learning Progress
      progress: {
        conceptsLearned: 0,
        frameworksExplored: [],
        studyStreak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        totalTimeMinutes: 0,
        knownTerms: [],
        reviewTerms: [],
        quizScores: []
      },

      updateProgress: (field, value) => {
        set(state => {
          const newProgress = { ...state.progress }
          if (typeof value === 'function') {
            newProgress[field] = value(newProgress[field])
          } else if (Array.isArray(newProgress[field])) {
            if (!newProgress[field].includes(value)) {
              newProgress[field] = [...newProgress[field], value]
            }
          } else if (typeof newProgress[field] === 'number') {
            newProgress[field] = newProgress[field] + (value || 1)
          } else {
            newProgress[field] = value
          }
          
          // Update streak
          const today = new Date().toISOString().split('T')[0]
          const lastDate = new Date(state.progress.lastStudyDate)
          const todayDate = new Date(today)
          const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24))
          
          if (diffDays === 1) {
            newProgress.studyStreak = state.progress.studyStreak + 1
          } else if (diffDays > 1) {
            newProgress.studyStreak = 1
          }
          newProgress.lastStudyDate = today
          
          // Persist to database
          db.saveProgress(newProgress)
          
          return { progress: newProgress }
        })
      },

      markTermKnown: (term) => {
        set(state => ({
          progress: {
            ...state.progress,
            knownTerms: [...new Set([...state.progress.knownTerms, term])],
            reviewTerms: state.progress.reviewTerms.filter(t => t !== term)
          }
        }))
      },

      markTermForReview: (term) => {
        set(state => ({
          progress: {
            ...state.progress,
            reviewTerms: [...new Set([...state.progress.reviewTerms, term])]
          }
        }))
      },

      // Custom content
      customTerms: [],
      addCustomTerm: async (term) => {
        const saved = await db.addCustomTerm(term)
        set(state => ({ customTerms: [saved, ...state.customTerms] }))
      },
      loadCustomTerms: async () => {
        const terms = await db.getCustomTerms()
        set({ customTerms: terms })
      },

      // Notes
      notes: [],
      addNote: async (note) => {
        const saved = await db.saveNote(note)
        set(state => ({ notes: [saved, ...state.notes.filter(n => n.id !== saved.id)] }))
      },
      loadNotes: async () => {
        const notes = await db.getNotes()
        set({ notes })
      },

      // Map state
      savedLocations: [],
      saveLocation: async (location) => {
        const saved = await db.saveLocation(location)
        set(state => ({ savedLocations: [saved, ...state.savedLocations] }))
      },
      loadSavedLocations: async () => {
        const locations = await db.getSavedLocations()
        set({ savedLocations: locations })
      },

      // Active map layers
      activeLayers: ['base'],
      toggleLayer: (layerId) => {
        set(state => ({
          activeLayers: state.activeLayers.includes(layerId)
            ? state.activeLayers.filter(l => l !== layerId)
            : [...state.activeLayers, layerId]
        }))
      },

      // UI State
      activeTab: 'dashboard',
      setActiveTab: (tab) => set({ activeTab: tab }),
      
      // Agent messages
      agentMessages: [],
      addAgentMessage: (message) => set(state => ({ 
        agentMessages: [...state.agentMessages, message] 
      })),
      clearAgentMessages: () => set({ agentMessages: [] })
    }),
    {
      name: 'nc-hub-storage',
      partialize: (state) => ({
        progress: state.progress,
        activeLayers: state.activeLayers
      })
    }
  )
)
