<script>
export default {
  name: 'Foo',
  created: function() { this.$notify('foo'); }
}
</script>

<template>
  <div>foo</div>
</template>
