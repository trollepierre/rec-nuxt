import axios from 'axios'
import env from '../env/env'

const ChaptersApi = {

  fetch(id) {
    console.log('isnde fetcg');

    const url = `${env('API_URL')}api/articles/${id}`
    const options = { headers: { 'Content-Type': 'application/json', 'Referrer-Policy': 'no-referrer-when-downgrade' } }

    console.log('before axios');

    return axios.get(url, options)
      .then(({ data }) => {
        console.log('isnde then');

        return data;
      })
      .catch(err => {
        console.log(err);
        console.log('error chapters');

      })
  },
}

export default ChaptersApi
