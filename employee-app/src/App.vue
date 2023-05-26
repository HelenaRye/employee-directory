<template>
	  <section class="app-wrapper">
	<header>
    <h1 class="title">Employee Directory</h1>
    <SearchEmployee/>
	</header>
	<AddEmployee/>
	<EmployeeList/>
	</section>
  </template>
<script>
import EmployeeList from './components/EmployeeList.vue'
import SearchEmployee from './components/SearchEmployee.vue'
import AddEmployee from './components/AddEmployee.vue'

export default {
  name: 'App',
  components: {
    EmployeeList,
	SearchEmployee,
    AddEmployee
  }
}
</script>

<style>
body {
   background-color:#0978F410;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.app-wrapper {
  width: 60rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}
</style>
