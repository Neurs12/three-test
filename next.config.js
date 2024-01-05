/** @type {import("next").NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === "production" ? "export" : undefined,
    basePath: process.env.NODE_ENV === "production" ? "/three-test" : undefined,
    assetPrefix: process.env.NODE_ENV === "production" ? "/three-test" : undefined,
}

module.exports = nextConfig
