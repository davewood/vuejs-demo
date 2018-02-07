<template>
  <div @click='bar'>{{ $t("message.hello", ['bar']) }} <icon name="flag"></icon></div>
</template>

<script>
export default {
  name: 'Bar',
  methods: {
    'bar': function() { this.$notify('bar'); }
  }
}
</script>
