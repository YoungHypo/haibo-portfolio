'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Script from 'next/script';

type ActivePage = 'About' | 'Portfolio' | 'Blog' | 'Contact';

export default function Home() {
  const [activePage, setActivePage] = useState<ActivePage>('About');

  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">
          <Navbar onNavChange={setActivePage} />

          <article className={`about ${activePage === 'About' ? 'active' : ''}`} data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <About />
          </article>

          <article className={`portfolio ${activePage === 'Portfolio' ? 'active' : ''}`} data-page="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <Portfolio />
          </article>

          <article className={`blog ${activePage === 'Blog' ? 'active' : ''}`} data-page="blog">
            <header>
              <h2 className="h2 article-title">Blog</h2>
            </header>

            {/* Blog content will go here */}
          </article>

          <article className={`contact ${activePage === 'Contact' ? 'active' : ''}`} data-page="contact">
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>

            {/* Contact content will go here */}
          </article>
        </div>
      </main>

      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        type="module"
      />
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        noModule
      />
    </>
  );
}
