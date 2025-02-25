'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

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
          <p className="title">Software Engineer</p>
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

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:haiboyang@ucsb.edu" className="contact-link">haiboyang@ucsb.edu</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Santa Barbara, California, USA</address>
            </div>
          </li>
        </ul>

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
