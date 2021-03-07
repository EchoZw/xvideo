const path = require('path');
const rollupTSPlugin = require('rollup-plugin-typescript')
const tsconfig = require('./tsconfig.json');

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {
    file: path.resolve(__dirname, './dist/bundle.js'),
    format: 'cjs',
    name: 'xvideos'
  },
  plugins: [
    rollupTSPlugin(tsconfig.compilerOptions)
  ],
  watch: {
    include: path.resolve(__dirname, './src/**')
  }
}
