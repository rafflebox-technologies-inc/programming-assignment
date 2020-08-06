<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="scss">
  .header {
    font-family: $head_font;
    font-weight: 400;
    padding-top: 1.5em;
    background-color: $primary;
    color: $white;
    border-bottom: 3px solid #b3b3b3;

    h1 {
      font-size: 1.5em;
      margin: 0;
      padding-bottom: 1em;
      text-align: center;
    }
  }
</style>
