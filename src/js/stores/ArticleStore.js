import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ArticleStore extends EventEmitter {
    constructor() {
        super()
        this.articles = [
            /*
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
            }*/
            {
                  "id": "93-978302390",
                  "heading": "Innovative tangible standardization",
                  "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
                  "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
                }, {
                  "id": "65-388000104",
                  "heading": "Horizontal uniform functionalities",
                  "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
                  "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
                }, {
                  "id": "07-487373469",
                  "heading": "Total well-modulated Graphical User               Interface",
                  "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
                  "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
                }, {
                  "id": "69-52762332384",
                  "heading": "Persevering even-keeled policy",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-381414372",
                  "heading": "Integrated eco-centric moderator",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-5256187",
                  "heading": "Universal bi-directional database",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                }, {
                  "id": "69-527622384",
                  "heading": "Persevering even-keeled policy",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-381434372",
                  "heading": "Integrated eco-centric moderator",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-525655187",
                  "heading": "Universal bi-directional database",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                }, {
                  "id": "69-527238422",
                  "heading": "Persevering even-keeled policy",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-38143727",
                  "heading": "Integrated eco-centric moderator",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52561687",
                  "heading": "Universal bi-directional database",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                },
        ];
    }

    getScience() {
            console.log('Getting latest news...');
            // Hack fake data for now from mockaroo
            let articleArr = [

                {
                  "id": "93-978300",
                  "heading": "Innovative tangible standardization",
                  "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
                  "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
                }, {
                  "id": "65-388010",
                  "heading": "Horizontal uniform functionalities",
                  "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
                  "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
                }, {
                  "id": "07-48d73769",
                  "heading": "Total well-modulated Graphical User               Interface",
                  "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
                  "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
                }, {
                  "id": "69-52723sf84",
                  "heading": "Persevering even-keeled policy",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-381422372",
                  "heading": "Integrated eco-centric moderator",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52536187",
                  "heading": "Universal bi-directional database",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                }, {
                  "id": "69-52721384",
                  "heading": "Persevering even-keeled policy",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-38144372",
                  "heading": "Integrated eco-centric moderator",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52566187",
                  "heading": "Universal bi-directional database",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                },
            ];

            this.articles = articleArr;
            /*
            this.articles.push({
                id,
                heading,
                link,
                summary,
            });*/

            this.emit('change');
    }

    getAll() {
        return this.articles;
    }

    handleActions(action) {
        //console.log('ArticleStore received an action: ' , action);
        switch(action.type) {
            case 'GET_SCIENCE':
                this.getScience();
                break;
        }
    }
}

const articleStore = new ArticleStore;
dispatcher.register(articleStore.handleActions.bind(articleStore));
// Test globally
window.dispatcher = dispatcher;

export default articleStore;