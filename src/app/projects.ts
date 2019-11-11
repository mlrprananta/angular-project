import { Project } from '@app/project';

export const PROJECTS: Project[] = [
    {
        name: 'Personal Website',
        description: 'My personal website built with Angular and Bulma.',
        image: 'assets/angular.svg',
        id: 1,
        skills: [
            { name: 'HTML' },
            { name: 'SCSS' },
            { name: 'Angular' },
            { name: 'TypeScript' },
        ]
    },
    {
        name: 'Wilson',
        description: 'A JavaScript-based Discord bot with a Node.js back-end.',
        image: 'assets/Discord-Logo-Color.svg',
        id: 2,
        skills: [
            { name: 'JavaScript' },
            { name: 'Node.js' },
        ]
    },
    /*{
        name: 'Bouldering Logging App',
        description: 'An Angular-based web-app to track your bouldering progress.',
        image: 'assets/IMG_4823.jpg',
        id: 3,
        skills: [
            { name: 'TypeScript' },
            { name: 'Angular' },
        ]
    },*/
]