<template>
  <div id="shopping-list">
    <div class="header">
      <h1>{{ header }}</h1>
      <button v-if="state === 'default'" @click="changeState('edit')" class="btn btn-primary">Add Item</button>
      <button v-else @click="changeState('default')" class="btn btn-cancel">Cancel</button>
    </div>
    <label v-if="state === 'edit'" class="add-item-form">
      <input v-model="newItem" type="text" placeholder="Add new item" @keydown.enter="saveItem"/>
      <button :disabled="!newItem" @click="saveItem" class="btn btn-primary">Save Item</button>
    </label>
    <ul>
      <li v-for="(item, index) in reversedItems" :key="index"
          :class="[item.purchased ? 'strikeout' :'', item.highPriority ? 'priority' :'']"
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
        {label: '10 eggs',purchased: false,highPriority: true},
        {label: '2 apples',purchased: false,highPriority: false},
        {label: '6 oranges',purchased: false,highPriority: false}
      ]
    }
  },
  computed: {
    // to change presentation of data
    // only for transforming data for presenting  and they shouldn't change the data
    reversedItems() {
      return this.items.slice(0).reverse();
    }
  },
  methods: {
    // to change data
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

#shopping-list {
  background: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 95%;
  max-width: 900px;
}

h1 {
  color: #3d4852;
  text-transform: uppercase;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #6cb2eb;
  font-size: 1.25rem;
  transition: all .1s ease-in;
  margin-top: .5rem;
  display: block;
}

a:hover {
  color: #3490dc;
}

li, p {
  display: flex;
  align-items: center;
  line-height: 1.75;
  letter-spacing: .5px;
  color: #3d4852;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all .1s ease-in;
}

li:hover {
  color: #22292f;
}

li input {
  margin: 0 .5rem 0;
}

#shopping-list > input, #shopping-list > select {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: .5rem .75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: .5px;
  margin: .5rem 0
}

.add-item-form, .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-item-form input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: .5rem .75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 1px;
  margin: .5rem 0;
}


/*CLASSES FOR LABELS*/

.strikeout {
  text-decoration: line-through;
  color: #b8c2cc;
}

.strikeout:hover {
  color: #8795a1;
}

.priority {
  color: #de751f;
}
</style>
