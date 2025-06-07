import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            imageUrl: 'https://picsum.photos/400/300?random=1'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            imageUrl: 'https://picsum.photos/400/300?random=2'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            imageUrl: 'https://picsum.photos/400/300?random=3'
        }
    ];

    return (
        <div className="portfolio max-w-5xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;