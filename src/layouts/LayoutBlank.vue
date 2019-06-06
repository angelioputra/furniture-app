<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutBlank',
  data () {
    return {
    }
  },
  methods: {
    handleChangePage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style>
.page-container {
  background: rgb(255,195,72);
  background: linear-gradient(180deg, rgba(255,195,72,1) 20%, rgb(255, 238, 112) 90%);}
</style>
