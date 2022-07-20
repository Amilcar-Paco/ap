// dayjs
import dayjs from 'dayjs';
// lib
import { createPost } from 'utility/createBlogPost';
// type
import { BlogPost } from 'types/blogPostType';

const blogPosts: BlogPost[] = [
  createPost({
    category: ['Software Engineering'],
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'woman doing yoga meditation on brown parquet flooring',
      height: 2232,
      likes: 98,
      src: '/posts/woman doing yoga meditation on brown parquet flooring.jpg',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'Achieving Work Life Balance As A Software Engineer in 2022',
  }),
  createPost({
    category: ['Software Engineering'],
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'woman doing yoga meditation on brown parquet flooring',
      height: 2232,
      likes: 98,
      src: '/posts/woman doing yoga meditation on brown parquet flooring.jpg',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'Achieving Work Life Balance As A Software Engineer in 2022',
  }),
  createPost({
    category: ['Software Engineering'],
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'woman doing yoga meditation on brown parquet flooring',
      height: 2232,
      likes: 98,
      src: '/posts/woman doing yoga meditation on brown parquet flooring.jpg',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'Achieving Work Life Balance As A Software Engineer in 2022',
  }),
  createPost({
    category: ['Software Engineering'],
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'woman doing yoga meditation on brown parquet flooring',
      height: 2232,
      likes: 98,
      src: '/posts/woman doing yoga meditation on brown parquet flooring.jpg',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'Achieving Work Life Balance As A Software Engineer in 2022',
  }),
  
];

export default blogPosts;
