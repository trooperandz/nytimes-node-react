import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class LatestStore extends EventEmitter {
    constructor() {
        super();
        this.articles = this.getLatest();
    }

    getScience() {
            console.log('Getting science news...');

            let articleArr = [
                {
                  "id": "93-978300",
                  "heading": "Upping The Auntie",
                  "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
                  "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
                }, {
                  "id": "65-388010",
                  "heading": "Global Urbanism",
                  "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
                  "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
                }, {
                  "id": "07-48d73769",
                  "heading": "Alligator Interfaces",
                  "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
                  "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
                }, {
                  "id": "69-52723sf84",
                  "heading": "Mangroves And Droplets",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-381422372",
                  "heading": "Coming To Figi",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52536187",
                  "heading": "Planet Earth Awards",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                }, {
                  "id": "69-52721384",
                  "heading": "Growing Twins",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-38144372",
                  "heading": "Unexplained Phenomena",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52566187",
                  "heading": "How Computers Were Born",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                },
            ];

            this.articles = articleArr;

            this.emit('change');
    }

    getLatest() {
        console.log('Getting latest news...');
        let articleArr = [
            {
              "id": "93-978113300",
              "heading": "Going The Distance",
              "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
              "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
            }, {
              "id": "65-3821118010",
              "heading": "Reading Horizontally",
              "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
              "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
            }, {
              "id": "07-1148d7223769",
              "heading": "Total Tractor Interface",
              "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
              "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
            }, {
              "id": "69-527211043sf84",
              "heading": "Determining Vows Subsediently",
              "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
              "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
            }, {
                  "id": "93-9783012390",
              "heading": "Innovative tangible standardization",
              "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
              "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
            }, {
              "id": "65-3880005104",
              "heading": "Horizontal uniform functionalities",
              "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
              "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
            }, {
              "id": "07-487373469",
              "heading": "Total well-modulated Graphical User               Interface",
              "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
              "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
            }, {
              "id": "69-527622332384",
              "heading": "Persevering even-keeled policy",
              "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
              "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
            }, {
              "id": "57-381414643372",
              "heading": "Integrated eco-centric moderator",
              "link": "https://is.gd/nunc/nisl/duis.png",
              "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
            }, {
              "id": "60-525666187",
              "heading": "Universal bi-directional database",
              "link": "http://wikipedia.org/quisque.aspx",
              "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
            }, {
              "id": "69-52762112384",
              "heading": "Persevering even-keeled policy",
              "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
              "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
            }, {
              "id": "57-381453434372",
              "heading": "Integrated eco-centric moderator",
              "link": "https://is.gd/nunc/nisl/duis.png",
              "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
            }, {
              "id": "60-525656635187",
              "heading": "Universal bi-directional database",
              "link": "http://wikipedia.org/quisque.aspx",
              "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
            }, {
              "id": "69-527242438422",
              "heading": "Persevering even-keeled policy",
              "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
              "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
            }, {
              "id": "57-3814311727",
              "heading": "Integrated eco-centric moderator",
              "link": "https://is.gd/nunc/nisl/duis.png",
              "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
            }, {
              "id": "60-5256221687",
              "heading": "Universal bi-directional database",
              "link": "http://wikipedia.org/quisque.aspx",
              "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
            },
        ];

        return articleArr;
    }

    getFavorites() {
        console.log('Getting favorites...');
        let articleArr = [
            {
              "id": "93-9783333300",
              "heading": "Interesting Occurrences",
              "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
              "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
            }, {
              "id": "65-382112128010",
              "heading": "Strange Creatures Happen",
              "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
              "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
            }, {
              "id": "07-48d722543769",
              "heading": "The Bequiled Beguiler",
              "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
              "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
            }, {
              "id": "69-527204783sf84",
              "heading": "Circumstance And Pomp",
              "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
              "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
            },
        ];

        return articleArr;
    }

    handleActions(action) {
        console.log('LatestStore received an action: ' , action);
        switch(action.type) {
            case 'GET_SCIENCE':
                this.getScience();
                break;
            case 'GET_LATEST':
                this.getLatest();
                break;
            case 'GET_FAVORITES':
                this.getFavorites();
                break;
        }
    }
}

const latestStore = new LatestStore;
dispatcher.register(latestStore.handleActions.bind(latestStore));

export default latestStore;