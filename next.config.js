/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/investor-charter',
        destination: '/compliance?tab=investor-charter',
        permanent: true,
      },
      {
        source: '/complaint-redressal',
        destination: '/compliance?tab=complaint-redressal',
        permanent: true,
      },
      {
        source: '/complaint-data',
        destination: '/compliance?tab=complaint-data',
        permanent: true,
      },
      {
        source: '/annual-audit',
        destination: '/compliance?tab=annual-audit',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
