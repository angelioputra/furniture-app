<template>
  <q-page class="q-pa-xl column">
    <div class="col">
      <div class="text-h3 text-weight-bolder text-white" style="margin-top: 10vh; line-height: 2.2rem">Furniture App</div>
      <div class="text-h6 text-weight-bold text-white q-mt-md">WELCOME TO DEMO</div>
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
        <q-btn class="q-my-lg full-width text-black" unelevated rounded no-caps color="accent" label="Log in" @click="alert = true" />
      </div>
      <div class="text-center text-white text-subtitle1">Forgot your password?</div>
    </div>
    <div>
      <div class="text-center text-white text-subtitle1 text-weight-bold" @click="handleChangePage('sign-up')">CREATE AN ACCOUNT</div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'LoginPage',

  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleChangePage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>
