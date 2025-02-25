'use client';

import { useState } from 'react';

type Category = 'all' | 'web development' | 'applications' | 'web design';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects = [
    {
      category: 'web development',
      image: '/assets/images/project-1.jpg',
      title: 'Finance',
      description: 'Web development'
    },
    {
      category: 'web development',
      image: '/assets/images/project-2.jpg',
      title: 'Orizon',
      description: 'Web development'
    },
    {
      category: 'web design',
      image: '/assets/images/project-3.jpg',
      title: 'Fundo',
      description: 'Web design'
    },
    {
      category: 'applications',
      image: '/assets/images/project-4.jpg',
      title: 'Brawlhalla',
      description: 'Applications'
    },
    {
      category: 'web design',
      image: '/assets/images/project-5.jpg',
      title: 'DSM.',
      description: 'Web design'
    },
    {
      category: 'web design',
      image: '/assets/images/project-6.jpg',
      title: 'MetaSpark',
      description: 'Web design'
    },
    {
      category: 'web development',
      image: '/assets/images/project-7.jpg',
      title: 'Summary',
      description: 'Web development'
    },
    {
      category: 'applications',
      image: '/assets/images/project-8.jpg',
      title: 'Task Manager',
      description: 'Applications'
    },
    {
      category: 'web design',
      image: '/assets/images/project-9.jpg',
      title: 'Arrival',
      description: 'Web design'
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
            className={activeCategory === 'web development' ? 'active' : ''}
            onClick={() => setActiveCategory('web development')}
            data-filter-btn
          >
            Web Development
          </button>
        </li>

        <li className="filter-item">
          <button
            className={activeCategory === 'applications' ? 'active' : ''}
            onClick={() => setActiveCategory('applications')}
            data-filter-btn
          >
            Applications
          </button>
        </li>

        <li className="filter-item">
          <button
            className={activeCategory === 'web design' ? 'active' : ''}
            onClick={() => setActiveCategory('web design')}
            data-filter-btn
          >
            Web Design
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
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project.image} alt={project.title} loading="lazy" />
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
