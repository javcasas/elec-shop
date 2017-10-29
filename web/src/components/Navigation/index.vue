<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand to="/">NavBar</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item-dropdown text="Iluminación" right>
          <b-dropdown-item to="/catalogo/iluminacion/">Iluminación</b-dropdown-item>
          <b-dropdown-item to="/catalogo/iluminacion/foco_led">Focos LED</b-dropdown-item>
          <b-dropdown-item to="/catalogo/iluminacion/panel_led">Panel LED</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text"
            placeholder="Buscar" v-model="searchbox"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            @click="onSearch" :disabled="invalidSearch">Buscar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Servicio al Cliente">
          <b-dropdown-item to="/services/guarantee/">Garantia</b-dropdown-item>
          <b-dropdown-item to="/services/returns/">Devoluciones</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Carrito</em>
          </template>
          <b-dropdown-item to="/cart/">Carrito</b-dropdown-item>
          <b-dropdown-item to="/checkout/">Caja</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['onSearcha'],
  data () {
    return {
      searchbox: ''
    }
  },
  computed: {
    invalidSearch: function () {
      return this.searchbox === ''
    }
  },
  methods: {
    onSearch: function (evt) {
      console.log(this.searchbox)
      this.searchbox = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  //list-style-type: none;
  //padding: 0;
}

li {
  // display: inline-block;
  // margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
