// tailwind.config.js
module.exports = {
    mode: 'jit', // Optionally use just in time engine
    purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#F4F1FE",  // Lightest
            100: "#E6E2FE",
            200: "#CFC7FD",
            300: "#B1A7FD",
            400: "#9589FD",
            500: "#8A79FD",  // Base Color
            600: "#705EF6",
            700: "#594AE0",
            800: "#4336BA",
            900: "#31268A",  // Darkest
          },
          secondary: {
            50: "#FEF6E6",
            100: "#FDECCF",
            200: "#FCD9A7",
            300: "#FBC27A",
            400: "#F9AA4B",
            500: "#F7941E",  // Example secondary color
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
          },
          success: {
            50: "#ECFDF5",
            100: "#D1FAE5",
            200: "#A7F3D0",
            300: "#6EE7B7",
            400: "#34D399",
            500: "#10B981",
            600: "#059669",
            700: "#047857",
            800: "#065F46",
            900: "#064E3B",
          },
          warning: {
            50: "#FFF9EB",
            100: "#FFF3D1",
            200: "#FFE5A7",
            300: "#FFD678",
            400: "#FFC548",
            500: "#FFB31C",
            600: "#DB900E",
            700: "#B3740C",
            800: "#8B580A",
            900: "#6A4407",
          },
          danger: {
            50: "#FEF2F2",
            100: "#FEE2E2",
            200: "#FECACA",
            300: "#FCA5A5",
            400: "#F87171",
            500: "#EF4444",
            600: "#DC2626",
            700: "#B91C1C",
            800: "#991B1B",
            900: "#7F1D1D",
          },
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }