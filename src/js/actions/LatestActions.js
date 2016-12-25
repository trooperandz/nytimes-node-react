import dispatcher from '../dispatcher';

import axios from 'axios';

const apiKey = 'ac491f7af6e242369578f53694affc61';

export function getLatestBySection(section) {
    axios.get('https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=' + apiKey).then(response => {
        console.log('api-response: ' , response.data.results);
        dispatcher.dispatch({ type: 'GET_LATEST_BY_SECTION', data: response.data.results });
    });
}

/* Note: When importing this with the following instruction:
 * import * as LatestActions from '../actions/LatestActions';
 * It comes in as:
 * {
      getScience: function() {}
      getLatest: function() {}
      addFavorite: function() {}
      }
 * }
 */
