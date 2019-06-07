<template>
  <q-toolbar class="text-center q-pb-sm">
    <div class="col text-grey-5" v-for="item in menu" :key="item.caption">
      <q-btn
        flat
        round
        :color="$route.name === item.routeName ? 'primary' : 'grey'"
        :icon="item.icon"
        size="sm"
        :to="{ name: item.routeName }"
      />
      <div class="text-caption" :class="$route.name === item.routeName && 'text-primary'">{{ item.caption }}</div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  name: 'MenuBar',

  data () {
    return {
      menu: [
        {
          routeName: 'home',
          icon: 'fas fa-cube',
          caption: 'Models'
        },
        {
          routeName: 'home',
          icon: 'far fa-heart',
          caption: 'Favourite'
        },
        {
          routeName: 'home',
          icon: 'fas fa-th-large',
          caption: 'Catalog'
        },
        {
          routeName: 'home',
          icon: 'fas fa-shopping-bag',
          caption: 'Cart'
        },
        {
          routeName: 'profile',
          icon: 'far fa-user',
          caption: 'Profile'
        }
      ]
    }
  }
}
</script>

<style></style>
