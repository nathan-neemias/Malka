/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Desabilitar verificação do ESLint durante a build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desabilitar verificação de tipos durante a build
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 