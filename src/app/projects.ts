import { Project } from '@app/project';

export const PROJECTS: Project[] = [
    {
        name: 'Personal Website',
        description: 'A personal website to present a front-end built with Angular and Bulma.',
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
]