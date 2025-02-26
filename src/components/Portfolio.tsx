'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';

type Category = 'all' | 'Mobile' | 'Web' | 'Open Source' | 'FullStack';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects = [
    {
      category: 'Open Source',
      image: '/assets/images/cello.png',
      title: 'Cello',
      description: 'Hyperledger Foundation',
      link: 'https://github.com/hyperledger-cello/cello'
    },
    {
      category: 'Mobile',
      image: '/assets/images/SignQuest.png',
      title: 'SignQuest',
      description: 'WWDC2025 Submission',
      link: 'https://github.com/YoungHypo/SignQuest'
    },
    {
      category: 'FullStack',
      image: '/assets/images/Tweet.png',
      title: 'Tweet',
      description: 'Next.js & Rails',
      link: 'https://github.com/YoungHypo/Tweet'
    },
    {
      category: 'Mobile',
      image: '/assets/images/Homelette.png',
      title: 'Homelette',
      description: 'React Native & Firebase',
      link: 'https://github.com/YoungHypo/team14sublet'
    },
    {
      category: 'FullStack',
      image: '/assets/images/WisChain.png',
      title: 'WisChain',
      description: 'Blockchian & Vue & Android',
      link: 'https://github.com/YoungHypo/WisChain'
    }
  ];

  return (
    <section className="projects">
      <ul className="filter-list">
        <li className="filter-item">
          <button
            className={`active ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            data-filter-btn
          >
            All
          </button>
        </li>

        <li className="filter-item">
          <button
            className={activeCategory === 'Mobile' ? 'active' : ''}
            onClick={() => setActiveCategory('Mobile')}
            data-filter-btn
          >
            Mobile
          </button>
        </li>

        <li className="filter-item">
          <button
            className={activeCategory === 'Web' ? 'active' : ''}
            onClick={() => setActiveCategory('Web')}
            data-filter-btn
          >
            Web
          </button>
        </li>

        <li className="filter-item">
          <button
            className={activeCategory === 'FullStack' ? 'active' : ''}
            onClick={() => setActiveCategory('FullStack')}
            data-filter-btn
          >
            FullStack
          </button>
        </li>

        <li className="filter-item">
          <button
            className={activeCategory === 'Open Source' ? 'active' : ''}
            onClick={() => setActiveCategory('Open Source')}
            data-filter-btn
          >
            Open Source
          </button>
        </li>
      </ul>

      <ul className="project-list">
        {projects
          .filter(project => activeCategory === 'all' || project.category === activeCategory)
          .map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <AiOutlineEye />
                  </div>

                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy" 
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.description}</p>
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
}
