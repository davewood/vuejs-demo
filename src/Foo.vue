<template>
  <div>foo<icon name="flag"></icon></div>
</template>

<script>
export default {
  name: 'Foo',
  created: function() { this.$notify('foo'); }
}
</script>
