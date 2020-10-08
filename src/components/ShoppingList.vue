<template>
  <div class="shoppingList">
    <h1>{{ header }}</h1>
    <ul v-for="(item, index) in items" :key="index">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: {
    header: String
  },
  data: function () {
    return {
      items: [
        '10 eggs',
        '2 apples',
        '5 oranges'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shoppingList {
  background-color: lightgray;
  max-width: 1024px;
  margin: 0 auto;
  padding: 15px;
}
h1 {
  text-transform: uppercase;
  font-weight: bolder;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
</style>
