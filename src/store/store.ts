import Listing from './models/Listing';
import ListingData from './models/ListingData';

import axios from 'axios';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const fetchListingAPI = async (id:any):Promise<any> => {
    const requestConfig = {
        url: `https://1u5zv1svga.execute-api.eu-central-1.amazonaws.com/TEST/listings/${id}`,
        method: 'get',
        responseType: 'json',
        headers: {
            'x-api-key': 'hfoOyQuZSW8gLoab9CemK1w7soBcz4er6h7bzes5'
        }
    };

    const { data } = await axios.request(requestConfig);
    return data;

};

export function createStore() {
    return new Vuex.Store({
        state: {
            listing: {}
        },
        actions: {
            fetchListing({ commit }) {
                const id = 'cbdd491b-a259-4880-b8a9-ed7ea8fc00a5';
                return fetchListingAPI(id)
                    .then((listingData: ListingData) => {
                        commit('setListing', new Listing(listingData));
                    })
            }
        },
        mutations: {
            setListing(state, listing: Listing) {
                state.listing = listing
            }
        }
    });
}
