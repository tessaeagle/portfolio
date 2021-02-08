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
            demo: false,
            technologies: [],
            description: "2018 Neuromodulation Society Poster",
            categories: ['featured', 'research']
        },
        {
            image: 'assets/images/8_18.png',
            link: 'https://github.com/tessaeagle/TidyTuesday',
            title: 'R4DS Tidy Tuesday',
            demo: 'https://github.com/tessaeagle/TidyTuesday',
            technologies: ['R', 'ggplot'],
            description: "Data Visualization Experiments with R",
            categories: ['featured', 'r']
        },
        {
            image: 'assets/images/paper.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/paper.png',
            title: 'MSARD Paper',
            demo: false,
            technologies: ['Android', 'OpenCV'],
            description: "Treatment Satisfaction in Patients with Multiple Sclerosis",
            categories: ['featured', 'papers']
        },
        {
            image: 'assets/images/APA_Poster.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/APA_Poster.png',
            title: 'APA Poster',
            demo: 'false',
            technologies: ['Semantic UI', 'CSS3'],
            description: "Interoception Poster Presented at APA",
            categories: ['featured', 'posters']
        },
        {
            image: 'assets/images/BU_Poster.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/BU_Poster.png',
            title: 'BUCLD Poster',
            demo: false,
            technologies: ['Python'],
            description: "BUCLD 2016 Poster on Undergrad Honors Thesis",
            categories: ['posters']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/abhn/data-destroyer-gui',
            title: 'Data Destroyer',
            demo: false,
            technologies: ['C++', 'Qt'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['posters']
        },
        {
            image: 'assets/images/poster.png',
            link: 'https://github.com/tessaeagle/tessaeagle.github.io/blob/master/assets/images/poster.png',
            title: 'Undergraduate Honors Thesis',
            demo: false,
            technologies: ['python', 'flask'],
            description: "Honors thesis presented at the UR Undergraduate Research Expo",
            categories: ['posters']
        },
        {
            image: 'assets/images/TwitterPage.png',
            link: 'https://twitter.com/Magikarmen',
            title: 'GPT-2 Twitterbot',
            demo: false,
            technologies: ['Tracery'],
            description: "Twitterbot created with Tracery to tweet game-based tweets and GPT-2 generated tweets",
            categories: ['research']
        },
        {
            image: 'assets/images/tinyworkout.png',
            link: 'https://twitter.com/tinyworkoutbot',
            title: 'Workout Twitterbot',
            demo: 'false',
            technologies: ['Tracery'],
            description: "Twitterbot created for bite-sized hourly workouts",
            categories: ['research', 'featured']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://github.com/abhn/koalamate',
            title: 'Koalamate',
            demo: false,
            technologies: ['Electron', 'Javascript'],
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
            categories: ['native']
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
