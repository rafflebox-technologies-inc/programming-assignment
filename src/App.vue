<template>
  <div id="app">
    <Header title="Rafflebox Assignment" />
    <section id="main" class="container">
      <div class="row">
        <div class="sidebar">
          <CityForm />
        </div>
        <div class="content">
          <List />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import CityForm from './components/CityForm.vue';
import List from './components/List.vue';
import ListItem from './components/ListItem.vue';

@Component({
  components: {
    Header,
    CityForm,
    List,
    ListItem
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: $grey;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #111111;
}

.container {
  width: 100%;
  max-width: 60em;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.sidebar,
.content {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media screen and (min-width: 48em) {
  .sidebar {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .content {
    flex: 0 0 66.66666%;
    max-width: 66.66666%;  
  }
}
</style>
