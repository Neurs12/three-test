/** @type {import("next").NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === "production" ? "export" : undefined,
    basePath: process.env.NODE_ENV === "production" ? "/three-test" : undefined,
    trailingSlash: true,
}

module.exports = nextConfig
