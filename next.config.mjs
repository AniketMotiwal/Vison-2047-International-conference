const nextConfig = {
  output: 'export', // ⭐ IMPORTANT

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
  
}

export default nextConfig