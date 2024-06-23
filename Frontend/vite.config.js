import { defineConfig, transformWithEsbuild, loadEnv } from "vite";
import react from "@vitejs/plugin-react";



export default defineConfig({
  plugins: [
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
	mainFields: []
  },

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  }, 

  
  server: {
    port:3000,
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


// export default defineConfig(({ mode}) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   return {
//     server: {
//       port:3000,
//       proxy: {
//         "/api": {
//           target: env.VITE_API_BASE_URL,
//           changeOrigin: true,
//           secure: false,
//           rewrite: (p) => p.replace(/^\/api/, ""),
//         },
//       },
//       cors: false,
//     },
//     preview: {
//       proxy: {
//         "/api": {
//           target: env.VITE_API_BASE_URL,
//           changeOrigin: true,
//           secure: false,
//           rewrite: (p) => p.replace(/^\/api/, ""),
//         },
//       },
//       cors: false,
//     },

//     plugins: [
//       {
//         name: "treat-js-files-as-jsx",
//         async transform(code, id) {
//           if (!id.match(/src\/.*\.js$/)) return null;

//           // Use the exposed transform from vite, instead of directly
//           // transforming with esbuild
//           return transformWithEsbuild(code, id, {
//             loader: "jsx",
//             jsx: "automatic",
//           });
//         },
//       },

//       react(),
//     ],

//     resolve: {
//       mainFields: [],
//     },

//     optimizeDeps: {
//       force: true,
//       esbuildOptions: {
//         loader: {
//           ".js": "jsx",
//         },
//       },
//     },
//   };
// });
