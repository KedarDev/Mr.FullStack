import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
// import { nodePolyfills } from 'vite-plugin-node-polyfills';
import {manualChunksPlugin} from 'vite-plugin-webpackchunkname'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { fileURLToPath, URL } from 'url'
// import { ViteS3 } from '@froxz/vite-plugin-s3'
// import * as moment from 'moment/moment.js';
import {esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
// const isGitIgnored = require('is-gitignored');


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
    // new ViteS3(!!process.env.UPLOAD_ENABLED, {
    //   include: [
    //     /.*\.(css|js|jsx)/,
    //     function(path) { return isPathOkToUpload(path); }
    // ],
    //   basePath: '/build',
    // exclude: isGitIgnored,
    //   clientConfig: {
    //     credentials: {
    //       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //     },
    //     region: 'us-east-2'
    //   },
    //   uploadOptions: {
    //     Bucket: 'www.mrfullstack.tech'
    //   }
    // }),
    //  NodeGlobalsPolyfillPlugin({
    //             process: true,
    //             buffer: true
    //         }),
            // NodeModulesPolyfillPlugin(),
     manualChunksPlugin(),
    // nodePolyfills(),
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
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },

  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-moment'])],
      loader: {
        '.js': 'jsx',
      },
    },
  },

  // optimizeDeps: {
  //   force: true,
  //   esbuildOptions: {
      // loader: {
      //   '.js': 'jsx',
      // },
  //   },
  // }, 
  
  server: {
    watch: {
      usePolling:true
    },
    // host: 'mrfullstack.tech',
    port:3000,
    // - "mrfullstack.tech:3000:PORT",
    cors:false,
    proxy: {
		'VITE_API_BASE_URL': {
			target: "http://localhost:8081",
      changeOrigin: true,
      secure:false
      }
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
})



