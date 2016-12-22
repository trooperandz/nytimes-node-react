import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class MyNewsStore extends EventEmitter {
    constructor() {
        super();
        this.articles = this.getFavorites();
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
              "heading": "Galapagos Trials Now",
              "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
              "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
            }, {
              "id": "07-48d722542213769",
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
        console.log('MyNewsStore received an action: ' , action);
        switch(action.type) {
            case 'GET_FAVORITES':
                this.getFavorites();
                break;
        }
    }
}

const mynewsStore = new MyNewsStore;
dispatcher.register(mynewsStore.handleActions.bind(mynewsStore));

export default mynewsStore;