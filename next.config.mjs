/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.digadarshan.com",
          },
        ],
        destination: "https://digadarshan.com/:path*",
        permanent: true,
      },
      // Optional: Also redirect HTTP to HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "digadarshan.com",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://digadarshan.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
