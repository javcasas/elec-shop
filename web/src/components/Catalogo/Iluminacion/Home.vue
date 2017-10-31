<template>
  <div>
    <div v-for="item in items">
      <a :href="item.url">
        <img :src="item.image" />
        {{ item.name }}
        {{ item.description }}
      </a>
    </div>
  </div>
</template>

<script>
import { lightingProducts } from '@/models/AllProducts'
export default {
  name: 'Iluminacion',
  data () {
    return {
      items: lightingProducts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
