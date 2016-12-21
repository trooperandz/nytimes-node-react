import { EventEmitter } from 'events';

class ArticleStore extends EventEmitter {
    constructor() {
        super()
        this.articles = [
            {
                id: 384928,
                heading: 'There She Babbles',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 849384,
                heading: 'Go Very Quickly',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 4636373,
                heading: 'Mountaintops Of Grain',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 111188,
                heading: 'Going Away Quickly',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 5849388,
                heading: 'Bring On The Ice',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 4788371,
                heading: 'Attenborough Goes West',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 409409,
                heading: 'Tesla Awaits The Masses',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 1473807,
                heading: 'Be There Again',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            },
            {
                id: 10293847,
                heading: 'Driving Coconuts',
                link: 'http://article.com',
                summary: 'orem ipsum dolor sit amet, suspendisse sociosqu lobortis, nec vestibulum, sem pede purus ac consectetuer pulvinar, eleifend turpis dolor enim ipsum ut porta. Sit ex vitae gravida, lacinia sed duis mollis optio pharetra vivamus.'
            }
        ];
    }

    getAll() {
        return this.articles;
    }
}

const articleStore = new ArticleStore;

export default articleStore;