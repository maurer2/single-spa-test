<template>
  <div class="view">
    <header>
      Homepage
    </header>
    <message content="test 1" />
  </div>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
  name: 'Home',
  components: {
    Message,
  },
};
</script>
