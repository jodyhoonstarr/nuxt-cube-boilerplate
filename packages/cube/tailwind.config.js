const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const fs = require('fs');
const path = require('path');

const clampGenerator = require('./assets/css-utils/clamp-generator.js');
const tokensToTailwind = require('./assets/css-utils/tokens-to-tailwind.js');

// Raw design tokens
const colorTokens = require('./assets/design-tokens/colors.json');
const fontTokens = require('./assets/design-tokens/fonts.json');
const spacingTokens = require('./assets/design-tokens/spacing.json');
const textSizeTokens = require('./assets/design-tokens/text-sizes.json');
const textLeadingTokens = require('./assets/design-tokens/text-leading.json');
const textWeightTokens = require('./assets/design-tokens/text-weights.json');
const viewportTokens = require('./assets/design-tokens/viewports.json');

// Process design tokens
const colors = tokensToTailwind(colorTokens.items);
const fontFamily = tokensToTailwind(fontTokens.items);
const fontWeight = tokensToTailwind(textWeightTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const lineHeight = tokensToTailwind(textLeadingTokens.items);
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

const tokensFile = './generated/tokens.css';
function saveTokensToFile(tokens, filePath) {
  const p = path.resolve(__dirname, filePath);

  // ensure the directory exists
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
  }

  // remove the file if it exists
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }

  fs.writeFileSync(p, tokens);
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  // Add color classes to safe list so they are always generated
  safelist: [],
  presets: [],
  theme: {
    screens: {
      sm: `${viewportTokens.min}px`,
      md: `${viewportTokens.mid}px`,
      lg: `${viewportTokens.max}px`
    },
    colors,
    spacing,
    fontSize,
    lineHeight,
    fontFamily,
    fontWeight,
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    margin: ({theme}) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    padding: ({theme}) => theme('spacing')
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],

  // Disables Tailwind's reset and usage of rgb/opacity
  corePlugins: {
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false
  },

  // Prevents Tailwind's core components
  blocklist: ['container'],

  // Prevents Tailwind from generating that wall of empty custom properties 
  experimental: {
    optimizeUniversalDefaults: true
  },

  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({addComponents, config}) {
      let result = '';

      const currentConfig = config();

      const groups = [
        {key: 'colors', prefix: 'color'},
        {key: 'spacing', prefix: 'space'},
        {key: 'fontSize', prefix: 'size'},
        {key: 'lineHeight', prefix: 'leading'},
        {key: 'fontFamily', prefix: 'font'},
        {key: 'fontWeight', prefix: 'font'}
      ];

      groups.forEach(({key, prefix}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result))
      });

      // if running under nuxt/vite, output the css variables to a file
      // the tailwind vscode extension will crash if it runs this block
      // so we make sure it only runs in the nuxt/vite environment
      if (process.env.NUXT_VITE_NODE_OPTIONS){
        try{
          saveTokensToFile(`:root{${result}}`, tokensFile);
        } catch (e) {
          console.error(e);
        }
      }

    }),

    // Generates custom utility classes
    plugin(function ({addUtilities, config}) {
      const currentConfig = config();
      const customUtilities = [
        {key: 'spacing', prefix: 'flow-space', property: '--flow-space'},
        {key: 'spacing', prefix: 'region-space', property: '--region-space'},
        {key: 'spacing', prefix: 'gutter', property: '--gutter'}
      ];

      customUtilities.forEach(({key, prefix, property}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            )
          });
        });
      });
    })
  ]
};
