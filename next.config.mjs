/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', 'maath', '@react-three/fiber', '@react-three/drei'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
  },
}

export default nextConfig
