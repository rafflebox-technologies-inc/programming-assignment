<template>
  <div class="test">
    <ul class="list-group">
      <ListItem
        v-for="(city, index) in cities"
        :key="index"
        :city="city"
        @on-delete="deleteCity(city.name)"
      />
    </ul>
  </div>
</template>

<script>
import CityServices from '../services/CityServices';
import ListItem from './ListItem.vue';

export default {
  name: 'List',
  created() {
    this.$root.$refs.List = this;
  },
  data() {
    return {
      cities: []
    };
  },
  methods: {
    getCities() {
      CityServices.getAll()
        .then(response => {
          this.cities = response.data;
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteCity(name) {
      CityServices.delete(name)
        .then(response => {
          this.getCities();
        }).catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCities();
  },
  components: {
    ListItem
  },
};
</script>
