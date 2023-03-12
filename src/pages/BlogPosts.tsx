import { faker } from '@faker-js/faker';
import {FlowLayout} from '@salt-ds/core';
import BlogPostCard from '../components/BlogPostCard';
import {useMemo} from "react";

const blogPostsList = [
    {
        title: 'Blog',
        theme: 'layouts',
        date: new Date(2023, 2, 12).toDateString(),
        img: 'blog',
        imgAlt: 'Blog application screenshot',
        snippet: 'The currently active template is a React + TypeScript project that uses the Salt design system to create a simple responsive blog application.',
        stackblitz: 'salt-template-responsive-blog',
        demo: undefined
    },
    {
        title: 'Single column',
        theme: 'layouts',
        date: new Date(2023, 2, 12).toDateString(),
        img: 'single-column',
        imgAlt: 'Single column application screenshot',
        snippet: 'This is a React + TypeScript project that uses the Salt design system to create a simple and visually consistent single column application.',
        stackblitz: 'salt-template-single-column',
        demo: '/experiments/layouts/SingleColumn'
    },
    {
        draft: true,
        title: 'Split screen',
        theme: 'layouts',
        date: faker.date.past().toDateString(),
        img: faker.random.numeric(),
        imgAlt: 'Split screen application screenshot',
        snippet: 'This React + TypeScript project uses the Salt design system to create a simple split-screen application.',
        stackblitz: 'salt-template-split-screen',
    },
    {
        draft: true,
        title: 'Asymmetrical layout',
        theme: 'layouts',
        date: faker.date.past().toDateString(),
        img: faker.random.numeric(),
        imgAlt: ' application screenshot',
        snippet: 'This React + TypeScript project uses the Salt design system to create a simple and visually consistent asymmetrical application.',
        stackblitz: 'salt-template-asymmetrical-layout',
    },
    {
        draft: true,
        title: 'Dashboards',
        theme: 'layouts',
        date: faker.date.past().toDateString(),
        img: faker.random.numeric(),
        imgAlt: ' application screenshot',
        snippet: 'A React + TypeScript project using the Salt design system to create a simple dashboard with an ag-grid and data grid table.',
        stackblitz: 'salt-template-dashboards',
    },
    // {
    //     draft: true,
    //     title: 'Masonry(ish)',
    //     theme: 'layouts',
    //     date: faker.date.past().toDateString(),
    //     img: faker.random.numeric(),
    //     imgAlt: ' application screenshot',
    //     snippet: '',
    //     stackblitz: '',
    // },
    {
        draft: true,
        title: 'Grid with sidebar',
        theme: 'layouts',
        date: faker.date.past().toDateString(),
        img: faker.random.numeric(),
        imgAlt: ' application screenshot',
        snippet: 'Salt design system - Layouts exploration. A React + TypeScript project using the Salt design system to create a Grid application with a sidebar.',
        stackblitz: 'salt-template-grid-and-sidebar',
    },
    // {
    //     title: 'Grid of cards',
    //     theme: 'layouts',
    //     date: faker.date.past().toDateString(),
    //     img: faker.random.numeric(),
    //     imgAlt: ' application screenshot',
    //     snippet: '',
    //     stackblitz: '',
    // },
];
export default function BlogPosts() {
    const saltExperiments = useMemo(() => blogPostsList, []);

    return (
        <FlowLayout>
            {saltExperiments.map((itemProps, index) => (
                <BlogPostCard key={index} {...itemProps} />
            ))}
        </FlowLayout>
    );
}
