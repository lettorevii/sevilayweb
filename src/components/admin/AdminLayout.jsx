'use client'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <main>{children}</main>
    </div>
  )
}
