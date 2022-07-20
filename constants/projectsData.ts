// dayjs
import dayjs, { Dayjs } from 'dayjs';
// type
import { ImageProps } from 'types/imageType';
import { ProjectCategory } from 'types/categoryType';

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { category, date, id, images, postFileName, title } = props;

  return {
    category,
    date,
    id,
    title,
    images,
    postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    category: ['Software Engineering'],
    date: dayjs().subtract(1, 'week'),
    id: 'ifpelac',
    postFileName: 'ifpelac',
    title: 'Academic Management System',
    images: [
      {
        alt: 'landing page screenshoot',
        width: 6000,
        height: 4000,
        likes: 72,
        src: '/projects/ifpelac/ifpelac.png',
      },
      {
        alt: 'Dashboard of the system',
        width: 6000,
        height: 4000,
        likes: 44,
        src: '/projects/ifpelac/banner-mockup.png',
      },
      {
        alt: 'First version of the system',
        width: 6000,
        height: 4000,
        likes: 52,
        src: '/projects/ifpelac/versao01.png',
      },
    ],
  }),
  ProjectConstructor({
    category: ['Data Analysis'],
    date: dayjs().subtract(19, 'week'),
    id: 'a11y',
    postFileName: 'a11y',
    title: 'First Data-Driven Investigation',
    images: [
      {
        alt: 'First data-driven investigation into web accessibility in Mozambique',
        height: 6000,
        likes: 47,
        src: '/projects/data-analysis/D4C-a11y.co.mz-Sticker Diversity-2021-02-22.png.png',
        width: 4000,
      },
      
      {
        alt: 'sticker creative',
        height: 6000,
        likes: 23,
        src: '/projects/data-analysis/D4C-a11y.co.mz-Sticker Creative 2 -2021-02-22.png',
        width: 4000,
      },
      {
        alt: 'Manual testing with people with disabilities',
        height: 6000,
        likes: 96,
        src: '/projects/data-analysis/DSC_8860_2048px.jpg',
        width: 4000,
      },
      {
        alt: 'saying hi',
        height: 6000,
        likes: 96,
        src: '/projects/data-analysis/D4C-a11y.co.mz-Sticker Hi-2021-02-22.png.png',
        width: 4000,
      },
      {
        alt: 'group of people with disabilities',
        height: 6000,
        likes: 69,
        src: '/projects/data-analysis/D4C-a11y.co.mz-Sticker People-2021-02-22.png',
        width: 4000,
      },
    ],
  }),
  ProjectConstructor({
    category: ['Software Engineering'],
    date: dayjs().subtract(4, 'week'),
    id: 'app',
    postFileName: 'mobileApp',
    title: 'eLearning - Back End',
    images: [
      {
        alt: 'Home screen',
        height: 3903,
        likes: 29,
        src: '/projects/app/home-screen.png',
        width: 3741,
      },
      {
        alt: 'Login Screen',
        height: 4000,
        likes: 38,
        src: '/projects/app/login-screen.png',
        width: 5193,
      },
    ],
  }),
  ProjectConstructor({
    category: ['voluntary'],
    date: dayjs().subtract(4, 'week'),
    id: 'voluntary',
    postFileName: 'landingPage',
    title: 'NextJS - Landing Pages',
    images: [
      {
        alt: 'Screenshot',
        height: 3903,
        likes: 29,
        src: '/projects/landing-page/template01.png',
        width: 3741,
      },
      {
        alt: 'Screenshot',
        height: 4000,
        likes: 58,
        src: '/projects/landing-page/template02.png',
        width: 5193,
      },
    ],
  }),
];

export default projectsData;
