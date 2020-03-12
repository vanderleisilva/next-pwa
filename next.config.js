const isProd = process.env.NODE_ENV === "production";

const withPWA = !isProd
  ? config => config
  : require("next-pwa")({
      pwa: {
        dest: "public"
      }
    });

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withPWA(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"]
  })
);
