const PROXY_CONFIG = [
  {
    context: [
      "/yande/user",
      "/yande/api",
      "/user",
      "/api"
    ],
    target: "http://localhost:3000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
