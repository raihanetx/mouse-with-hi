import React from 'react';

const blogPosts = [
  {
    image: 'https://picsum.photos/seed/tech1/400/250',
    title: 'Understanding Industry Trends',
    excerpt: 'Explore the latest trends shaping the tech industry and how they impact your business.',
  },
  {
    image: 'https://picsum.photos/seed/tech2/400/250',
    title: 'Case Study: Successful Digital Transformation',
    excerpt: 'Learn how we helped a client achieve digital transformation through innovative solutions.',
  },
  {
    image: 'https://picsum.photos/seed/tech3/400/250',
    title: 'Top 10 Tips for Effective SEO',
    excerpt: 'Discover essential SEO tips to improve your website’s visibility and organic traffic.',
  },
];

const BlogCard = ({ image, title, excerpt }: { image: string; title: string; excerpt: string }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 group h-80 flex flex-col justify-end">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
    <div className="relative p-6">
      <h3 className="text-lg font-bold text-brand-lightest-slate mb-3 group-hover:text-brand-blue transition-colors">{title}</h3>
      <p className="text-brand-light-slate text-sm mb-4">{excerpt}</p>
      <a href="#" className="font-mono text-sm text-brand-blue hover:underline">Read More &rarr;</a>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog" className="py-24">
      <h2 className="text-3xl font-bold text-center text-brand-lightest-slate mb-12">
        <span className="font-mono text-brand-blue text-2xl mr-2">04.</span>Blog & Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} image={post.image} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
