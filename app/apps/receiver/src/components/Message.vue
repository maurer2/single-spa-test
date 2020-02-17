<template>
  <div class="message">
    {{ content }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  @Prop() private content!: string;
}
</script>

<style scoped lang="scss">
  .message {
    color: red;
  }
</style>
