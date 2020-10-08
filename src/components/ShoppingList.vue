<template>
  <div class="shoppingList">
    <h1>{{ header }}</h1>
    <label>
      <input v-model="newItem" type="text" placeholder="Add new item" @keydown.enter="items.push(newItem)"/>
      <button @click="items.push(newItem)">Save Item</button>
    </label>
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
      newItem: '',
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
  text-align: left;
}
h1 {
  text-transform: uppercase;
  font-weight: bolder;
  text-align: left;
}
input {
  padding: 10px;
  border: none;
  display: inline-block;
  width: 200px;
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
