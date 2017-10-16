<template>
  <footer>
    <b-container class="footer">
      <b-row>
        <b-col>
          <h1>Column 1</h1>
          <ul>
            <li>Item</li>
          </ul>
        </b-col>
        <b-col>
          <h1>Column 2</h1>
          <ul>
            <li>Item</li>
          </ul>
        </b-col>
        <b-col>
          <h1>Column 3</h1>
          <ul>
            <li>Item</li>
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
