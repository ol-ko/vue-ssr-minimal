<template>
    <article>
        <p>
            {{listing.address}}
        </p>

        <div v-if="show">
            <contact-modal></contact-modal>
        </div>
    </article>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State } from 'vuex-class';
    import Listing from '../store/models/Listing';
    import ContactModal from '../components/ContactModal';

    @Component({
        components: {
            ContactModal
        }
    })
    export default class extends Vue {
        show:boolean = false;
        @State listing: Listing;

        asyncData(store: any, route: any) {
            if (!store.listing) {
                return store.dispatch('fetchListing')
            }

            return Promise.resolve();
        }

        mounted() {
            this.show = true;
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>
