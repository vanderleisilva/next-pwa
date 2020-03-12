const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX(withPWA({
  pageExtensions: ["tsx", "mdx"],
  pwa: {
    disable: !isProd,
    dest: "public"
  }
}))
