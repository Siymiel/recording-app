/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test : {
        isolate: true,
        environment: 'jsdom',
        globals: true,
        css: true,
        setupFiles: [`./src/tests/setup.ts`],
        alias: [
            {
                find: 'test-utils',
                replacement: `./src/tests/test-utils.tsx`,
            }
        ],
        exclude: ['node_modules'],
        coverage: {
            provider: 'istanbul',
            exclude: ['tests', 'src/theme', '**/__tests__**'],
        },
    }
})