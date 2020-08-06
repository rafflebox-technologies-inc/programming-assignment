<template>
  <li class="list-item">
    <div class="list-item__head">
      <span class="list-item__name">{{city.name}}</span>
      <button
        class="btn--delete"
        @click="$emit('on-delete')"
      >
        <span class="visually-hidden">Delete</span>
      </button>
    </div>
    <div class="list-item__foot">
      <span class="list-item__time">Time: {{convertTime}}</span>
      <span class="list-item__temp">Temperature: {{city.temperature}}&deg;</span>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'ListItem',
    data() {
      return {};
    },
    props: {
      city: Object
    },
    computed: {
      convertTime: function () {
        const convertDate = new Date(this.city.time);
        const hours = convertDate.getHours();
        const minutes = (convertDate.getMinutes() < 10 ? '0' : '') + convertDate.getMinutes();
        return `${hours}:${minutes}`;
      }
    }
  };
</script>

<style lang="scss">
@import '../scss/_list-item.scss';
</style>
