const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',
      },
    ],
  },
};

module.exports = nextConfig;

console.log("Next config is being used!");
