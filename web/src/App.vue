<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <div id="app">
          <Navigation />
          <div id="content">
            <breadcrumbs />
            <router-view />
          </div>
          <Footer />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data: function () {
    return {
      name: 'Vue.js'
    }
  },
  // define methods under the `methods` object
  methods: {},
  components: {
    Navigation,
    Footer
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

#content {
  min-height: 500px;
}
</style>
