import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      github: {
        green: '#28a745',
        dark: '#161b22',
        light: '#ffffff',
        muted: '#6a737d',
        blue: '#0366d6',
      },
    },
  },
})
