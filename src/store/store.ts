import Listing from './models/Listing';
import ListingData from './models/ListingData';

import Vue from 'vue';
import Vuex from 'vuex';

import Listings from '../api/listings';

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        state: {
            listing: {}
        },
        actions: {
            fetchListing({ commit }) {
                const id = 'cbdd491b-a259-4880-b8a9-ed7ea8fc00a5';
                return Listings.fetch(id)
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
