import dispatcher from '../dispatcher';

import axios from 'axios';

// TODO: put api key into globals module
const apiKey = 'ac491f7af6e242369578f53694affc61';

// DONE
export function newsSearch(searchText) {
    searchText = searchText.replace(/\s/g, '+');

    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey + '&q=' + searchText).then(response => {
        let data = response.data.response.docs;

        // Format data to be compatible with Article component pre-defined object keys
        data = data.map((item, i) => {
                let title = item.headline.main;
                let published_date = (item.pub_date) ? item.pub_date : 'Unavailable Date';
                let abstract = item.snippet;
                let url = item.web_url

            return {
                title,
                published_date,
                abstract,
                url,
            };
        });
        console.log('api-response2: ' , data);
        dispatcher.dispatch({
            type: 'NEWS_SEARCH',
            data: data,
        });
    });
}