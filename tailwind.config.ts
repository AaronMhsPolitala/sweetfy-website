import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#02677f",
        "on-primary": "#ffffff",
        "primary-container": "#7ec8e3",
        "on-primary-container": "#005468",
        "primary-fixed": "#b7eaff",
        "primary-fixed-dim": "#87d1ec",
        "on-primary-fixed": "#001f28",
        "on-primary-fixed-variant": "#004e60",
        
        secondary: "#8a486f",
        "on-secondary": "#ffffff",
        "secondary-container": "#ffaeda",
        "on-secondary-container": "#7c3d63",
        "secondary-fixed": "#ffd8ea",
        "secondary-fixed-dim": "#ffaeda",
        "on-secondary-fixed": "#3a0329",
        "on-secondary-fixed-variant": "#6f3157",
        
        tertiary: "#1b6b4f",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#82cdac",
        "on-tertiary-container": "#00583f",
        "tertiary-fixed": "#a6f2cf",
        "tertiary-fixed-dim": "#8bd6b4",
        "on-tertiary-fixed": "#002115",
        "on-tertiary-fixed-variant": "#00513a",
        
        background: "#fbf9f8",
        "on-background": "#1b1c1c",
        surface: "#fbf9f8",
        "on-surface": "#1b1c1c",
        "surface-dim": "#dcd9d9",
        "surface-bright": "#fbf9f8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "surface-container-high": "#eae8e7",
        "surface-container-highest": "#e4e2e1",
        "surface-variant": "#e4e2e1",
        "on-surface-variant": "#3f484c",
        
        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0f0",
        "inverse-primary": "#87d1ec",
        
        outline: "#6f787d",
        "outline-variant": "#bfc8cd",
        "surface-tint": "#02677f",
        
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        "section-gap": "80px",
        base: "8px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "container-max": "1280px",
        gutter: "24px",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-geist)", "sans-serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'bounce-slow': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

export default config;
