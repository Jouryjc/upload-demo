import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['server/index.ts'],
  watch: true,
  onSuccess: 'node dist/index.js',
  sourcemap: true,
  format: ['esm'],
  clean: false
})