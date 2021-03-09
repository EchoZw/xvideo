const path = require('path');
const rollupTSPlugin = require('@rollup/plugin-typescript')

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {
    file: path.resolve(__dirname, './dist/bundle.js'),
    format: 'umd',
    name: 'xvideos'
  },
  plugins: [
    rollupTSPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      sourceMap: true
    })
  ],
  watch: {
    include: path.resolve(__dirname, './src/**')
  }
}
