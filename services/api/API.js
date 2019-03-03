import axios from 'axios'
import drInfo from '~/assets/json/drInfo.js'

const urlBase = "https://api.zenpatient.com";


export default {
    sendMessage(payload) {
        return axios.post(urlBase + '/contact', payload)
    },
    addToSubscriberList(payload) {
        return axios.post(urlBase + '/newsletter', payload)
    }
}