<template>
  <div>
    <app-hero title="Register"></app-hero>
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5">
              <div class="card">
                <div class="card-header-title title is-4">Register</div>
                <div class="card-content">
                  <form class="form" @submit.prevent="register">
                    <div class="field">
                      <label class="label">First Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="First name" v-model="fname" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Last Name</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Last name" v-model="lname" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="email" placeholder="Email" v-model="email" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                        <input class="input" type="password" placeholder="********" v-model="password" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Phone</label>
                      <div class="control">
                        <input class="input" type="tel" placeholder="+963946452937" v-model="phone" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">City</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="city" v-model="city" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Street</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Street" v-model="street" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Number</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="Number" v-model="number" required>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Zip Code</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="12926-3874" v-model="zipcode" required>
                      </div>
                    </div>
                    <div class="field">
                      <button type="submit" class="button is-primary">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import AppHero from './AppHero.vue'

export default {
  name: 'RegisterView',
  components: { AppHero },

  data: () => ({
    fname: 'Roduan',
    lname: 'Kareem Aldeen',
    email: 'roduan98@gmail.com',
    password: 'password',
    phone: '+963946452937',
    city: 'Damascus',
    street: 'Damas',
    number: 1,
    zipcode: '12926-3874'
  }),

  methods: {
    register () {
      const payload = {
        email: this.email,
        username: this.username,
        password: this.password,
        name: {
          firstname: this.fname,
          lastname: this.lname
        },
        address: {
          city: this.city,
          street: this.street,
          number: this.number,
          zipcode: this.zipcode,
          geolocation: {
            lat: '-37.3159',
            long: '81.1496'
          }
        }
      }

      axios.post('https://fakestoreapi.com/users', payload).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style>

</style>
