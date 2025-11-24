/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                destination: 'https://aidpuska.com/:path*',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
