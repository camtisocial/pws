import { getDataSource } from 'data-source';
import { Blog } from './src/blog/Blog.entity';
import { About } from './src/about/About.entity';

async function seed() {
  // Initialize the data source
  console.log('Environment variables:', {
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_SYNCHRONIZE: process.env.POSTGRES_SYNCHRONIZE,
  });
  console.log('Entities path:', `${__dirname}/../src/**/*.entity{.ts,.js}`);
  console.log('Migrations path:', `${__dirname}/migrations/*{.ts,.js}`);

  console.log('BEFORE...');
  const AppDataSource = await getDataSource();
  console.log('AFTER...');
  console.log('Database connected');

  // Repositories for each entity
  const blogRepository = AppDataSource.getRepository(Blog);
  const aboutRepository = AppDataSource.getRepository(About);

  const blogData = [
    {
      title: 'My First Blog Post',
      summary: 'An introduction to my blog',
      content: 'This is my first blog post content...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Learning TypeScript',
      summary: 'Tips for learning TypeScript',
      content: 'In this blog post, I share tips on learning TypeScript...',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const aboutData = {
    content: 'I am a software engineer with a passion for coding...',
  };

  // Insert data into each table

  await blogRepository.save(blogData);
  console.log('Blog data seeded');

  await aboutRepository.save(aboutData);
  console.log('About data seeded');

  // Close the data source
  await AppDataSource.destroy();
  console.log('Database connection closed');
}

seed()
  .then(() => console.log('Seeding complete'))
  .catch((error) => console.error('Error seeding data:', error));
