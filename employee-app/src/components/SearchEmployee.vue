<template>
	<form>
		<input type="search" placeholder="Search.." v-model="searchText">
		<button type="submit"></button>
	</form>
</template>

<script>
export default {
  name: 'SearchEmployee'

  // add a ref for searchText and set to an empty string

  // add searchText in the state in the vue store

  // Create a search method and add it as event listender on submit button

  // Greate a mutation that filters through the array and checks if the keywork searchText matches the items in the array and return the filtered array
  
  // Creat a getter that gets the filtered employee array

  // the filtering method looks something like this getFilteredEmployees: return state.employees.filter(employee => { return employee.name.toLowerCase().includes(state.searchText.toLowerCase())
}
</script>

<style scoped>

form {
  color: #555;
  display: flex;
  padding: 0 1rem;
  border: 1px solid #BFBFB770;
  border-radius: 30px;
}

input[type="search"] {
  border: none;
  background: transparent;
  width: 100%;
  margin: 0;
  height: 2rem;
  padding: 1.2rem 1rem;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
}

button[type="submit"] {
  text-indent: -999px;
  overflow: hidden;
  width: 2rem;
  height: 2.5rem;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}

button[type="submit"]:hover {
  opacity: 1;
}

</style>