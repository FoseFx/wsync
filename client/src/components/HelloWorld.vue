<template>
  <div class="hello">
    <p>someval: {{ $store.state.someval }}</p>
    <p>testmod1/valmod1: {{ $store.state.testmod1.valmod1 }}</p>
    <p>testmod2/somebool: {{ $store.state.testmod2.somebool }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss"></style>
