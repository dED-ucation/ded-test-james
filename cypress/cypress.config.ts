import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      on('task', {
        log (message) {
          console.log(message);
          return null;
        }
      });
    },
  },
});
