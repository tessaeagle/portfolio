$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [ 
        {
            image: 'assets/images/apex.png',
            link: 'https://www.brainstimjrnl.com/article/S1935-861X(18)30518-7/fulltext',
            title: 'NANS 2018',
            //demo: 'https://mporter.co',
           //technologies: ['Flask', 'Celery', 'Python'],
            description: "2018 Neuromodulation Society Poster",
            categories: ['posters']
        },
        {
            image: 'assets/images/APA_poster.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/APA_Poster.png',
            title: 'APA Interoception',
            //demo: 'https://mporter.co',
           //technologies: ['Flask', 'Celery', 'Python'],
            description: "APA Poster on Interoception",
            categories: ['posters']
        },
        {
            image: 'assets/images/BU_Poster.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/BU_Poster.png',
            title: 'BUCLD Poster',
            //demo: 'https://mporter.co',
           //technologies: ['Flask', 'Celery', 'Python'],
            description: "BUCLD Poster on Undergrad Honors Thesis",
            categories: ['posters']
        },
        {
            image: 'assets/images/poster.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/poster.png',
            title: 'Undergraduate Honors Thesis',
            //demo: 'https://mporter.co',
           //technologies: ['Flask', 'Celery', 'Python'],
            description: "Undergraduate Research Expo",
            categories: ['posters']
        },
         {
            image: 'assets/images/paper.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/poster.png',
            title: 'MS Treatment Satisfaction',
            //demo: 'https://mporter.co',
           //technologies: ['Flask', 'Celery', 'Python'],
            description: "MSARD Journal Paper",
            categories: ['papers']
        },
        {
            image: 'assets/images/8_18.png',
            link: 'https://github.com/tessaeagle/TidyTuesday',
            title: 'R4DS Tidy Tuesday',
            //demo: 'https://mporter.co',
           //technologies: ['Flask', 'Celery', 'Python'],
            description: "Data Visualization Experiments",
            categories: ['R']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
