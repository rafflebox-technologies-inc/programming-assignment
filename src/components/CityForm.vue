<template>
  <form class="form" @sumbit.prevent novalidate>
    <div class="form-group">
      <label for="name">City Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        required
        v-model="city.name"
        name="name"
        maxlength="25"
      />
    </div>
    <div class="form-group">
      <label for="time">Time</label>
      <vue-timepicker close-on-complete format="HH:mm" v-model="defaultTime" @input="timeHandler"></vue-timepicker>
    </div>
    <div class="form-group">
      <label for="temperature">Temperature</label>
      <input
        type="number"
        class="form-control"
        id="temperature"
        required
        v-model="city.temperature"
        name="temperature"
      />
    </div>
    <div class="button-group">
      <button type="input" @click.prevent="checkForm" class="btn">Submit</button>
    </div>
    <div class="form-errors" v-if="errors.length">
      <span>Please correct the following error(s):</span>
      <ul>
        <li 
          v-for="(error, index) in errors"
          :key="index"
        >
          {{ error }}
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import CityServices from '../services/CityServices';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'

export default {
  name: 'city-form',
  data() {
    return {
      city: {
        id: null,
        name: '',
        time: 0,
        temperature: 0
      },
      submitted: false,
      errors: [],
      defaultTime: ''
    }
  },
  methods: {
    checkForm: function(event) {
      event.preventDefault();

      if (this.city.name && this.city.time && this.city.temperature) {
        this.submitted = true;
        this.saveCity();
      }

      this.errors = [];

      if (!this.city.name) {
        this.errors.push('City Name required.');
      }

      if (!this.city.time) {
        this.errors.push('Time required.');
      }

      if (!this.city.temperature) {
        this.errors.push('Temperature required.');
      }
    },
    saveCity() {
      const data = {
        name: this.city.name,
        time: this.city.time,
        temperature: this.city.temperature
      };

      // Call API.
      CityServices.create(data)
        .then(response => {
          this.city.id = response.data.id;

          this.$root.$refs.List.getCities();

          this.city = {
            id: null,
            name: '',
            time: 0,
            temperature: 0
          };
          this.defaultTime = '';
        })
        .catch(err => {
          console.log(err);
        });
    },
    timeHandler (eventData) {
      // Convert time to unix timestamp for simple storage.
      const stringDate = '01/01/1970 ' + eventData + ':00';
      const timestamp = new Date(stringDate).getTime();
      this.city.time = timestamp;
    }
  },
  components: { VueTimepicker },
}
</script>

<style lang="scss">
  @import '../scss/_form.scss';
  @import '../scss/_errors.scss';
</style>