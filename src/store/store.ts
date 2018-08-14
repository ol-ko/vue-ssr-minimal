import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const fetchItemApi = (id:any) => {
	return Promise.resolve({
		name: `Item ${id}`
	});
};

export function createStore() {
	return new Vuex.Store({
		state: {
			items: {}
		},
		actions: {
			fetchItem({ commit }, id) {
				return fetchItemApi(id)
					.then(item => {
						commit('setItem', { id, item });
					})
			}
		},
		mutations: {
			setItem(state, { id, item }) {
				Vue.set(state.items, id, item);
			}
		}
	});
}
