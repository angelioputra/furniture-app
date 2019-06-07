<template>
  <q-page class="q-pa-xl column">
    <div class="col">
      <div class="text-h6 text-weight-bold text-white q-mt-md" style="margin-top:10vh">REGISTER FOR AN ACCOUNT</div>
      <div class="text-center text-white text-body1 q-my-xl">Create an account with app to keep track of your orders, print copies of your invoices and keep your personal details up-to-date</div>
      <div class="text-white">
        <q-input v-model="email" dark color="accent" label="email" />
        <q-input v-model="password" dark :type="isPwd ? 'password' : 'text'" color="accent" label="password">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn class="q-my-lg full-width text-black" unelevated rounded no-caps color="accent" label="Create an account" @click="handleChangePage('login')" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'SignUpPage',

  data () {
    return {
      email: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    handleChangePage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>
