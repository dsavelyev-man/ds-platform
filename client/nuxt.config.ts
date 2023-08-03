// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: parseInt(process.env.CLIENT_PORT || "1212"),
    host: "0.0.0.0",
  },

  vite: {
    server: {
      // hmr: {
      //   protocol: "ws",
      //   host: "0.0.0.0"
      // }
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
