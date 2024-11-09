import { getDataSource } from 'data-source';
import { Work } from './src/work/Work.entity';
import { Blog } from './src/blog/Blog.entity';
import { About } from './src/about/About.entity';
import { GameDev } from './src/game-dev/Game-dev.entity';
import { Cooking } from './src/cooking/Cooking.entity';

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
  const workRepository = AppDataSource.getRepository(Work);
  const blogRepository = AppDataSource.getRepository(Blog);
  const aboutRepository = AppDataSource.getRepository(About);
  const gameDevRepository = AppDataSource.getRepository(GameDev);
  const cookingRepository = AppDataSource.getRepository(Cooking);

  // Seed data for each entity
  const workData = [
    {
      company: 'Tech Company',
      description: 'Developed web applications',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2023-01-01'),
      isPersonalProject: false,
    },
    {
      company: 'Another Company',
      description: 'Built and maintained UI components',
      startDate: new Date('2021-01-01'),
      endDate: new Date('2022-01-01'),
      isPersonalProject: false,
    },
  ];

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

  const gameDevData = [
    {
      title: 'First Game',
      description: 'An RPG game with exciting features',
      releaseDate: new Date('2022-06-01'),
      features: 'RPG',
    },
  ];

  const cookingData = [
    {
      title: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, Tomato, Beef, Onion, Garlic',
      instructions: 'Cook spaghetti. Prepare sauce. Mix and serve.',
      createdAt: new Date(),
    },
  ];

  console.log('\n BEFORE \n');
  // Insert data into each table
  await workRepository.save(workData);
  console.log('Work data seeded');

  console.log('\n AFTER \n');
  await blogRepository.save(blogData);
  console.log('Blog data seeded');

  await aboutRepository.save(aboutData);
  console.log('About data seeded');

  await gameDevRepository.save(gameDevData);
  console.log('GameDev data seeded');

  await cookingRepository.save(cookingData);
  console.log('Cooking data seeded');

  // Close the data source
  await AppDataSource.destroy();
  console.log('Database connection closed');
}

seed()
  .then(() => console.log('Seeding complete'))
  .catch((error) => console.error('Error seeding data:', error));
