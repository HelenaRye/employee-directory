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
			  <h3 class="name"> {{ employees.name }}</h3>
			  <p class="job-title"> {{ employees.position }}</p>
			</div>
		  </div>
		  <button class="delete" @click="deleteEmployee">X</button>
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
	deleteEmployee: function (id) {
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
  width: 7rem;
}

.card {
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;
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
