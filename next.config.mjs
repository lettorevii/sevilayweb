/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'standalone', // SSR ve statik sayfalar için uygun
};

export default nextConfig;
