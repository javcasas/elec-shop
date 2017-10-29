<template>
  <footer>
    <b-container class="footer">
      <b-row>
        <b-col>
          <h1>Atencion al Cliente</h1>
          <ul>
            <li><router-link to="/services/guarantee/">Garantia</router-link></li>
            <li><router-link to="/services/returns/">Devoluciones</router-link></li>
          </ul>
        </b-col>
        <b-col>
          <h1>Acerca de DSSTI</h1>
          <ul>
            <li>Lo que creemos</li>
            <li>Calidad y valor</li>
            <li>Nuestra historia</li>
          </ul>
        </b-col>
        <b-col>
          <h1>Guias</h1>
          <ul>
            <li>Luz calida y luz fria</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
    background-color: #336;
    color: #ccc;
    text-align: center;
    .footer {
        padding: 20px; 
        h1 {
          padding-top: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
    }
}
</style>
