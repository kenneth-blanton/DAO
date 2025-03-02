import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  build:{
    outDir:"public", 
    sourcemap:true
  },
  server: {
    host: '0.0.0.0',
  },
  // define: {
  //   global: "globalThis",
  //   "process.env": {
  //     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  //   },
  // },
 // For Build 
    define: {
    global: (() => {
      let globalVariable = 'globalThis';
      try {
        require.resolve('@safe-global/safe-ethers-adapters');
        globalVariable = 'global';
       } catch (e) {
        globalVariable = 'globalThis';
       }
      return globalVariable;
     })()
   }
})
