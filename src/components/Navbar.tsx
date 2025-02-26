'use client';

import { useState } from 'react';

type NavItem = 'About' | 'Portfolio' | 'Blog' | 'Resume';

export default function Navbar({ onNavChange }: { onNavChange: (item: NavItem) => void }) {
  const [activeItem, setActiveItem] = useState<NavItem>('About');

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item);
    onNavChange(item);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {(['About', 'Portfolio', 'Blog', 'Resume'] as NavItem[]).map((item) => (
          <li key={item} className="navbar-item">
            <button
              className={`navbar-link ${activeItem === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
              data-nav-link
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
