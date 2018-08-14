<template>
	<h1>
		{{item.name}}
	</h1>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
	export default class Item extends Vue {
		static asyncData (store: any, route: any) {
			return store.dispatch('fetchItem', route.params.id);
		}

        get item() {
            return this.$store.state.items[this.$route.params.id];
        }
	}
</script>
