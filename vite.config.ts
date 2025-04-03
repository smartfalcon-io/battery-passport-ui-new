// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      "/fetch-credential-details": {
        target: "http://localhost:8087",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
