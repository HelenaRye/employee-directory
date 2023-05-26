<template>
  <ul class="employees">
	  <li
	  class="employee"
	  v-for="employee in employees"
	  :key="employee.id"
	  >
		<div class="card">
		  <div class="wrapper">
			<img class="employee-image" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="">
			<div class="employee-info">
			  <h3 class="name"> {{ employee.name }}</h3>
			  <p class="job-title"> {{ employee.position }}</p>
			</div>
		  </div>
		  <button class="delete" @click="deleteEmployee(employee.id)">X</button>
		</div>
	  </li>
	</ul>
</template>

<script>


export default {
  name: 'EmployeeList',
  computed: {
	employees () {
      return this.$store.getters.getEmployees;
    }
  },
  methods: {
	deleteEmployee (id) {
      this.$store.dispatch('deleteEmployee', id);
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

ul {
  padding: 0;
}

img {
  border-radius: 50%;
  width: 6rem;
}

.card {
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
  padding: 1.5rem 2rem;
  margin: 1rem;
}
.wrapper {
  display: flex;
}
.employee-info {
  margin-left: 2rem;
}
</style>
