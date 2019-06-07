<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-toolbar-title v-if="$route.meta.showTitle">
          Quasar App
        </q-toolbar-title>

        <div v-if="$route.meta.showSearchBar" class="full-width">
          <q-input v-model="search" label="search" dense>
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
            <template v-slot:append>
              <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white">
      <MenuBar />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { MenuBar } from '../components'

export default {
  name: 'MyLayout',
  components: {
    MenuBar
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      search: ''
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
