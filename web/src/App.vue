<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <div id="app">
          <navigation />
          <h1>Router starts here</h1>
          <router-link to="/">Home</router-link>
          <router-view/>
          <h1>Router ends here</h1>
          <footera />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import navigation from '@/components/Navigation'
import footera from '@/components/Footer'
export default {
  name: 'app',
  components: {
    navigation,
    footera
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}
</style>
