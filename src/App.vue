<template>
  <div id="app">
    <i>An App to create a <b>List</b> of products</i>
    <br/>
    <ShoppingList header="Shopping List App"/>
    <i>By: <b>Hesham El Masry</b>
      <unicon name="trophy" fill="purple" height="20px" />
    </i>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #eff8ff;
  height: 100vh;
  width: 100vw;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
}


/*GENERIC CLASSES FOR BTNS */
.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: .5rem .75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1px;
  transition: all .1s ease-in;
}

.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}

.btn-primary {
  background: #6cb2eb;
  color: #fff;
}

.btn-primary:hover {
  background: #3490dc;
}

.btn-cancel {
  background: #ef5753;
  color: #fff;
}

.btn-cancel:hover {
  background: #e3342f;
  color: #fff;
}
</style>
