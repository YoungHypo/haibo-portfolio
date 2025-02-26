import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      image: '/assets/images/blog-1.jpg',
      category: 'Design',
      date: 'Fab 23, 2022',
      title: 'Design conferences in 2022',
      description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      image: '/assets/images/blog-2.jpg',
      category: 'Design',
      date: 'Fab 23, 2022',
      title: 'Best fonts every designer',
      description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      image: '/assets/images/blog-3.jpg',
      category: 'Design',
      date: 'Fab 23, 2022',
      title: 'Design digest #80',
      description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem.'
    },
    {
      image: '/assets/images/blog-4.jpg',
      category: 'Design',
      date: 'Fab 23, 2022',
      title: 'UI interactions of the week',
      description: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation.'
    },
    {
      image: '/assets/images/blog-5.jpg',
      category: 'Design',
      date: 'Fab 23, 2022',
      title: 'The forgotten art of spacing',
      description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/assets/images/blog-6.jpg',
      category: 'Design',
      date: 'Fab 23, 2022',
      title: 'Design digest #79',
      description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
  ];

  return (
    <section className="blog-posts">
      <p>Not available yet</p>
      <ul className="blog-posts-list">
        {blogPosts.map((post, index) => (
          <li key={index} className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy" 
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">{post.category}</p>

                  <span className="dot"></span>

                  <time dateTime={post.date}>{post.date}</time>
                </div>

                <h3 className="h3 blog-item-title">{post.title}</h3>

                <p className="blog-text">{post.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
