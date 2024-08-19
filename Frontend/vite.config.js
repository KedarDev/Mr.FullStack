import { defineConfig, transformWithEsbuild, loadEnv } from "vite";
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
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url)),
    // }
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
    // CORS: false,
       port: 3000,
    // hostname: "mrfullstack.tech",
    // host: "http://localhost:8089",
    // proxy: {
    //     "http://localhost:3000/*": {
    //         target: "http://localhost:8081/*", // Replace with your API URL
    //         secure: false,
    //         changeOrigin: true,
    //         headers: true,
            
    //       },
    //     },
        
        watch: {
          usePolling:true
        },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
})

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   return {
//     plugins: [],
//     server: {
//       proxy: {
//         "/user": {
//           target: env.VITE_API_BASE_URL,
//           changeOrigin: true,
//           secure: false,
//           rewrite: (path) => path.replace(/^\/user/, ""),
//         },
//       },
//     },
//   };
// });
