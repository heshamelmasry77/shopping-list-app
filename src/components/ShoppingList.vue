<template>
  <div class="shoppingList">
    <div>
      <h1>{{ header }}</h1>
      <button v-if="state === 'default'" @click="changeState('edit')">Add Item</button>
      <button v-else @click="changeState('default')">Cancel</button>
    </div>
    <label v-if="state === 'edit'">
      <input v-model="newItem" type="text" placeholder="Add new item" @keydown.enter="saveItem"/>
      <button :disabled="!newItem" @click="saveItem">Save Item</button>
    </label>
    <ul>
      <li v-for="(item, index) in items" :key="index" :class="[item.purchased ? 'strikeout' :'']"
          @click="togglePurchased(item)">{{ item.label }}
      </li>
    </ul>
    <p v-if="items.length === 0">No items :'(</p>
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
      state: 'default',
      newItem: '',
      items: [
        {label: '10 eggs',purchased: false,highPriority: false},
        {label: '2 apples',purchased: false,highPriority: false},
        {label: '6 oranges',purchased: false,highPriority: false}
      ]
    }
  },
  methods: {
    saveItem() {
      this.items.push({
        label: this.newItem,
        purchased: false,
        highPriority: false
      })
      this.newItem = ''
    },
    changeState(newState) {
      this.state = newState;
      this.newItem = ''
    },
    togglePurchased(item) {
      item.purchased = !item.purchased
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
