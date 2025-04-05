import {create} from 'zustand'

export type StoreOptions = {
  // Checks if is dark
  isDark: boolean
  switchIsDark: (dark: boolean) => void

  // Checks language
  language: 'en' | 'ar' | 'fr' | string
  switchLanguage: (newLanguage: string) => void
}

export const useStore = create<StoreOptions>()(set => ({
  isDark: false,
  switchIsDark: () => set(state => ({...state, isDark: !state.isDark})),

  language: 'en',
  switchLanguage: (newLanguage: string) => set(state => ({...state, language: newLanguage})),
}))
