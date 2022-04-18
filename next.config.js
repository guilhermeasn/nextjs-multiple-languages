/** @type {import('next').NextConfig} */

const nextConfig = {

    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/',
                destination: '/' + process.env.APP_LANGUAGE_DEFAULT,
                permanent: true,
            },
        ]
    }

}

module.exports = nextConfig
