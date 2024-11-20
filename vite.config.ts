import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs'; // Required to read certificate files
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable access from other devices or servers
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'certs/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'certs/cert.pem')),
    },
  },
});

