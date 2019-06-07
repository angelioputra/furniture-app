<template>
  <q-page class="q-pa-md">
    <q-card class="my-card q-my-md flex items-center" v-for="item in list" :key="item.caption">
        <q-card-section class="full-width">
          <div class="text-h5 text-weight-bold text-primary-black">{{ item.caption }}</div>
          <div class="text-weight-bold catalog-icon text-primary " :class="item.icon" />
        </q-card-section>
      </q-card>
  </q-page>
</template>

<style>
.my-card {
  min-height: 120px
}
.catalog-icon {
  font-size: 50px;
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      list: [
        {
          caption: 'Furniture',
          icon: 'far fa-couch'
        },
        {
          caption: 'Accessories',
          icon: 'far fa-clock'
        },
        {
          caption: 'Lightning',
          icon: 'far fa-lightbulb'
        }
      ]
    }
  }
}
</script>
