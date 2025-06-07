import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Acrylic Painting',
           
            imageUrl: 'https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/488907212_2760072764191058_3504838450395944507_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N4MLSG_zulQQ7kNvwFU1Rbr&_nc_oc=AdkLKNRxWfT2Z9a1GQ4ms0OhIcl_L2A8JiZU8K6rPNRB0pxYB9Cc8BGmutuc_LR6jpM&_nc_zt=23&_nc_ht=scontent.fhyd5-1.fna&_nc_gid=5qsEiNnEq-gHrNeZ_c-Kfg&oh=00_AfMYqziZvz9luyb0c28f6Og-rofi7he_wT75LMX4fafDXg&oe=684A2302'
        },
        {
            title: 'Acrylic Painting',
           
            imageUrl: 'https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/45752366_555874431540107_6195508204428853248_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tM5byLPUFMoQ7kNvwExwPb-&_nc_oc=Adk5zqdFjW-oEAmythSer0GBbcSSUfyp12BoZJLTGxAMkWPigc7t20GFZ35lxsh-inI&_nc_zt=23&_nc_ht=scontent.fhyd5-1.fna&_nc_gid=QWav4ycX1IU3ae__mr5X4A&oh=00_AfPthaulgrObo7QxQL5M3sh8jEMs9iSbgY51QNi_0lm2oQ&oe=686BBC43'
        },
        {
            title: 'Acrylic Painting',
           
            imageUrl: 'https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/45752103_555874358206781_5651132674597715968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hX-Hfkxmd34Q7kNvwGUt-Vo&_nc_oc=AdkfO8hglShpnl307hbSt49i9cHb0HGxlq_R_RLmgbFKcbUQJQ2uw5ui_vupOwl0GI8&_nc_zt=23&_nc_ht=scontent.fhyd5-1.fna&_nc_gid=b8RrYZW6XeyVoUnK7PWJcA&oh=00_AfPcQVrBx7jPqvLnqDgh5qe3hfKPu6x7NBNhcKBWeVxdtA&oe=686BB2CF'
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