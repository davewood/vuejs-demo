<template>
  <div @click='foo'>{{ $t("message.hello", ['foo']) }} <icon name="flag"></icon></div>
</template>

<script>
export default {
  name: 'Foo',
  methods: {
    'foo': function() { this.$notify('foo'); }
  }
}
</script>
