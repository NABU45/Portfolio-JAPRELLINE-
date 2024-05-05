const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // other plugins
  ],
  corePlugins: {
    // If you're using the JIT mode, you need to enable the container plugin explicitly
    // container: false,
  },
  variants: {
    extend: {},
  },
  // Add your plugin function to the configuration
  config: {
    tailwindcss: {
      plugins: [addVariablesForColors],
    },
  },
};
