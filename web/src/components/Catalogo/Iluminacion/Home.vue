<template>
  <div>
    <div v-for="item in items">
      <a :href="item.url">
        <img :src="item.image" />
        {{ item.description }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Iluminacion',
  data () {
    return {
      items: [
        {
          url: '',
          image: '',
          description: 'Foco LED',
          price: ''
        },
        {
          url: '',
          image: '',
          description: 'Panel LED',
          price: ''
        },
        {
          url: '',
          image: '',
          description: 'Tubo LED',
          price: ''
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
