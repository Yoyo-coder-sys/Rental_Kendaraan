import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "on-background": "#021d33",
              "secondary": "#545e76",
              "tertiary": "#250900",
              "on-tertiary-fixed-variant": "#7a3000",
              "primary-fixed-dim": "#b4c5ff",
              "inverse-surface": "#1a324a",
              "surface-container-lowest": "#ffffff",
              "error": "#ba1a1a",
              "on-surface-variant": "#45474d",
              "primary": "#000e35",
              "on-error": "#ffffff",
              "tertiary-fixed-dim": "#ffb693",
              "on-secondary-fixed": "#101b30",
              "on-primary": "#ffffff",
              "surface-tint": "#0052dc",
              "background": "#f8f9ff",
              "tertiary-container": "#461800",
              "secondary-container": "#d7e2ff",
              "primary-fixed": "#dbe1ff",
              "on-secondary-container": "#5a647c",
              "outline-variant": "#c5c6cd",
              "surface-variant": "#d0e4ff",
              "secondary-fixed": "#d7e2ff",
              "inverse-on-surface": "#e9f1ff",
              "outline": "#75777d",
              "on-surface": "#021d33",
              "on-tertiary": "#ffffff",
              "on-primary-container": "#5b86ff",
              "surface-container": "#e4efff",
              "on-error-container": "#93000a",
              "surface-dim": "#c5dcfb",
              "surface-bright": "#f8f9ff",
              "on-tertiary-container": "#ec6300",
              "on-primary-fixed-variant": "#003ea8",
              "secondary-fixed-dim": "#bbc6e2",
              "on-secondary-fixed-variant": "#3c475d",
              "inverse-primary": "#b4c5ff",
              "surface-container-highest": "#d0e4ff",
              "surface-container-low": "#eef4ff",
              "on-primary-fixed": "#00174b",
              "surface": "#f8f9ff",
              "on-secondary": "#ffffff",
              "primary-container": "#002062",
              "on-tertiary-fixed": "#351000",
              "surface-container-high": "#dae9ff",
              "error-container": "#ffdad6",
              "tertiary-fixed": "#ffdbcc"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "fontFamily": {
              "headline": ["Manrope"],
              "body": ["Inter"],
              "label": ["Inter"]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
