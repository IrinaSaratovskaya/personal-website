import React, { useState } from 'react';
import Image from './Image';

const gallery = [
    {
        categories: ['web', 'all'],
        src: '/images_post/my_website_1.png',
        alt: 'Personal website',
        title: 'Personal website',
        titleUrl: 'https://github.com/IrinaSaratovskaya/personal-website',
        subtitle: 'Web',
        images: [
            '/images_post/my_website_1.png',
            '/images_post/my_website_2.png',
            '/images_post/my_website_3.png',
        ],
    },
    {
        categories: ['app', 'all'],
        src: '/images_post/comp_dir.png',
        alt: 'Company Directory',
        title: 'Company Directory',
        titleUrl: 'https://github.com/IrinaSaratovskaya/company-directory',
        subtitle: 'App',
        images: [
            '/images_post/comp_dir_1.png',
            '/images_post/comp_dir_2.png',
        ],
    },
    {
        categories: ['app', 'all'],
        src: '/images_post/todo_list.jpg',
        alt: 'To Do List',
        title: 'To Do List',
        titleUrl: 'https://github.com/IrinaSaratovskaya/to-do-list',
        subtitle: 'App',
        images: [
            '/images_post/todo_list_1.jpg',
            '/images_post/todo_list_2.jpg',
        ],
    },
    {
        categories: ['app', 'all', 'web'],
        src: '/images_post/bracelets_1.jpg',
        alt: 'Shopping Cart',
        title: 'Shopping Cart',
        titleUrl: 'https://magic-stones-shopper.herokuapp.com/',
        subtitle: 'App',
        images: [
            '/images_post/bracelets_1.jpg',
            '/images_post/bracelets_2.png',
            '/images_post/bracelets_3.png',
            '/images_post/bracelets_4.png',
            '/images_post/bracelets_5.png',
        ],
    },
    {
        categories: ['app', 'all', 'web'],
        src: '/images_post/tracker_2.png',
        alt: 'Workout Tracker',
        title: 'Workout Tracker',
        titleUrl: 'https://github.com/IrinaSaratovskaya/workout-tracker',
        subtitle: 'App',
        images: [
            '/images_post/tracker_2.png',
            '/images_post/tracker_3.png',
            '/images_post/tracker_4.png',
            '/images_post/tracker_5.png',
            '/images_post/tracker_1.png',
        ],
    },
]

function Portfolio() {

    const [category, setCategory] = useState('all');

    const filterClickHandler = (cat) => {
        setCategory(cat);
    }


    return (
        <div className="portfolio_wrapper">
            <ul id="portfolio_iso_filters">
                <li onClick={() => filterClickHandler('all')}>
                    <a className={category === 'all'? 'current' : ''}>All</a>
                </li>
                <li onClick={() => filterClickHandler('web')}>
                    <a className={category === 'web'? 'current' : ''}>Web</a>
                </li>
                <li onClick={() => filterClickHandler('app')}>
                    <a className={category === 'app'? 'current' : ''}>App</a>
                </li>
            </ul>
            <div className="portfolio_items">
                <div className="row">
                    {gallery.map(imgObj => 
                        <Image 
                            {...imgObj} 
                            category={category}  
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
