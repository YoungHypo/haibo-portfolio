'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit'
      }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/assets/images/my-avatar.png"
            alt="Haibo Yang"
            width={100}
            height={100}
            style={{ width: '100px', height: '100px' }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Haibo Yang">Haibo Yang</h1>
          <p className="title">MSCS Student</p>
          <p className="specialties">Full-Stack & Mobile Dev</p>
          <p className="specialties">AI & Blockchain</p>
        </div>

        <button 
          className="info_more-btn" 
          onClick={() => setShowContacts(!showContacts)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className={`sidebar-info_more ${showContacts ? 'active' : ''}`}>
        <div className="separator"></div>

        <div className="location-info">
          <div className="location-line">
            <ion-icon name="location-outline"></ion-icon>
            <span>Santa Barbara, CA</span>
          </div>
          <div className="time-line">
            <span>{currentTime} PST</span>
          </div>
        </div>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/haiboyang942" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/YoungHypo" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="mailto:haiboyang@ucsb.edu" className="social-link">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
