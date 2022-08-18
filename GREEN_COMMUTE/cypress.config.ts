import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://3.134.81.172:8080/',
    viewportHeight: 820,
    viewportWidth: 1570
  }
});

//http://3.22.198.76:3000