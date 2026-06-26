// components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/posts', label: 'Posts' },
  { href: '/users', label: 'Usuários' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={{ width: '240px', borderRight: '1px solid #eee', padding: '1rem' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: '10px 14px',
              borderRadius: '6px',
              fontWeight: pathname === item.href ? 600 : 400,
              background: pathname === item.href ? '#f0f0f0' : 'transparent',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}