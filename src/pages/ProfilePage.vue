<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-pa-md">
      <div>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
      <div class="q-ml-md">
        <div class="text-h5 text-weight-bold">Angelio Putra</div>
      </div>
    </div>

    <q-card class="q-my-md">
      <q-card-section class="row flex items-center">
        <div class="col">
          <q-icon name="fas fa-gift" style="font-size: 1.3rem;" />
          <q-chip color="primary" text-color="white" class="text-weight-bold q-ml-md" dense>
            take a gift
          </q-chip>
        </div>
        <div class="col text-right">
          <div>
            <span class="text-weight-bolder text-grey-6" style="font-size:1.4rem">190</span>
            <span class="text-weight-bold text-grey-8"> credits</span>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div>
      <q-list v-for="item in list" :key="item.caption">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section class="text-weight-bold">{{ item.caption }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-mt-lg">
      <q-list class="text-grey-6">
        <q-item clickable v-ripple :to="{name: 'login'}">
          <q-item-section avatar>
            <q-icon name="fas fa-sign-out-alt" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Sign out</q-item-section>
        </q-item>
      </q-list>
    </div>
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
  name: 'ProfilePage',

  data () {
    return {
      list: [
        {
          caption: 'Orders',
          icon: 'fas fa-shopping-bag'
        },
        {
          caption: 'Payment',
          icon: 'fas fa-money-bill'
        },
        {
          caption: 'Address',
          icon: 'fas fa-map-marker'
        },
        {
          caption: 'Promotions',
          icon: 'fas fa-tag'
        },
        {
          caption: 'Help',
          icon: 'fas fa-question'
        },
        {
          caption: 'About',
          icon: 'fas fa-info'
        }
      ]
    }
  }
}
</script>
