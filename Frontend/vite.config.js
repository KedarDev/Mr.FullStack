import { defineConfig, transformWithEsbuild, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import {manualChunksPlugin} from 'vite-plugin-webpackchunkname'
import { fileURLToPath, URL } from 'url'
import {esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({

      build: {
        commonjsOptions: {
          esmExternals: true,
       },
      allowSyntheticDefaultImports: true,
      chunkSizeWarningLimit: "10000000",
      rollupOptions: {
          output:{
              manualChunks(id) {
                  if (id.includes('node_modules')) {
                      return id.toString().split('node_modules/')[1].split('/')[0].toString();
                  }
              }
          }
      }
  },
  assetsInclude: ['**/*.mov'],
  plugins: [
     manualChunksPlugin(),
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))  return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },

    react(),
  ],

resolve: {
  mainFields: ['browser', 'module', 'main'],
  },

  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-moment'])],
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
       port: 3000,
        watch: {
          usePolling:true
        },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
})

