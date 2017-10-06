import 'whatwg-fetch';
import apiConfig from '../configuration/apiConfig';

class ReverseHistoryApi {
    static getReverseHistory() {
        return fetch(apiConfig.reverseHistoryUrl)
                .then((response) => response.json());
    }

    static reversePhrase(phrase) {
        return fetch(apiConfig.reverseUrl, {
            method: 'POST',
            body: JSON.stringify(phrase),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((response) => response.json());
    }
}

export default ReverseHistoryApi;