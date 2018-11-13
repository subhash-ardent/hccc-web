const PROXY_CONFIG = [
  {
    context: [
      "/hccc/user",
      "/hccc/api",
      "/user",
      "/api"
    ],
    target: "http://localhost:3000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
