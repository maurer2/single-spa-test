<template>
  <div class="view">
    <header>
      Subpage
    </header>
    <message content="test 2" />
  </div>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
  name: 'Subpage',
  components: {
    Message,
  },
};
</script>
