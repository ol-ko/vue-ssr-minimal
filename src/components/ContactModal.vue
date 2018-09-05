<template>
    <div>
        <input-button v-on:click="$refs.modalExample.open()">Contact us</input-button>

        <sweet-modal title="This is a Tabbed Modal" ref="modalExample">
            <sweet-modal-tab title="Contact form" id="tab1">
                <contact-form></contact-form>
            </sweet-modal-tab>
            <sweet-modal-tab title="Another tab" id="tab2">Contents of Tab 2</sweet-modal-tab>
            <sweet-modal-tab title="Disabled tab" id="tab3" disabled>Tab 3 is disabled</sweet-modal-tab>
        </sweet-modal>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { SweetModal, SweetModalTab } from 'sweet-modal-vue';
    import InputButton from './InputButton.vue';
    import ContactForm from './ContactForm.vue';

    @Component({
        components: {
            SweetModal,
            SweetModalTab,
            InputButton,
            ContactForm
        }
    })

    export default class ContactModal extends Vue {}
</script>

<style scoped lang="scss">
    .contact-form {
        clear: both;
        padding: 1em;
        background-color: white;
        box-shadow: 0 2px 3px 0 rgba($color: #000000, $alpha: 0.15);
    }
</style>
