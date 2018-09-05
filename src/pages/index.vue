<template>
    <article>
        <header>
            <h2>{{ listing.title }}</h2>
        </header>

        <div class="article-body">
            <figure>
                <img :src="listing.imageUrl" alt="">
                <figcaption>{{ listing.imageCaption }}</figcaption>
            </figure>

            <h3>{{ listing.price | currency }}</h3>
            <p v-html="listing.description"></p>
        </div>
    </article>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State } from 'vuex-class';
    import Listing from '../store/models/Listing';

    @Component({
        filters: {
            currency(input: number): string {
                return input + ' CHF';
            },
        }
    })
    export default class extends Vue {
        @State listing: Listing;

        public asyncData(store: any, route: any) {
            if (!store.listing) {
                return store.dispatch('fetchListing')
            }

            return Promise.resolve();
        }
    }
</script>
