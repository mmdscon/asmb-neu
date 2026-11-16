const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // statische Seiten, Lead-Versand läuft über public/lead.php
  trailingSlash: true,
  images: { unoptimized: true },
  ...(base ? { basePath: base } : {}),
}
export default nextConfig
