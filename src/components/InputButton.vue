<template>
  <button :class="['base-button', 'color-' + color ]" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ default: 'blue' }) color: string;

    onClick(e: any) {
        this.$emit('click', e);
    }
}

</script>

<style lang="scss">
.base-button {
  background-color: white;
  color: #2c3e50;
  font-weight: bold;
  border-radius: 3em;
  padding: 0.75em 1.5em;
  cursor: pointer;

  &:hover {
    background-color: darken($color: white, $amount: 10%);
  }

  &.color-blue {
    background-color: #039be5;
    color: white;

    &:hover {
      background-color: darken($color: #039be5, $amount: 10%);
    }
  }
}
</style>
