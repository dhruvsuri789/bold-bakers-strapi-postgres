export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

/* {
  name: "strapi::cors",
  config: {
    enabled: true,
    origin: ["*"], // Or specify Next.js URL: ["https://your-next-app.com"]
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers: ["Content-Type", "Authorization"],
    credentials: true,
  },
}, */
