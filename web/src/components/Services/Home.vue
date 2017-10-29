<template>
  <div class="hello">
    <ul>
        <li>
            <router-link to="/services/guarantee/">Garantia</router-link>
        </li>
        <li>
            <router-link to="/services/returns/">Devoluciones</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Catalogo',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
