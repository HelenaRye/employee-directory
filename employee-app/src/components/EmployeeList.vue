<template>
	<ul class="employees">
		<li class="employee" v-for="(employee) in employees" :key="employee.id">
			<div class="card">
				<div class="wrapper">
					<img class="employee-image" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="">
					<div class="employee-info">
						<h3 class="name"> {{ employee.name }}</h3>
						<p class="job-title"> {{ employee.position }}</p>
					</div>
				</div>
				<button class="delete" @click="deleteEmployee(employee.id)"></button>
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

p {
	margin: 0;
}

.name {
	margin: 0;
	padding-bottom: 0.3rem;
}

.delete {
	border-radius: 6px;
	border: none;
	background: #0978F4;
	width: 2rem;
	height: 2rem;
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='%23ffffff'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cg id='Menu / Close_SM'%3E%3Cpath id='Vector' d='M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-size: contain;
}

.card {
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 20px;
	padding: 1.5rem 2rem;
	margin: 1rem;
}

.wrapper {
	display: flex;
	align-items: center;
}

.employee-info {
	margin-left: 2rem;
	padding-bottom: 0.5rem;
	display: flex;
	flex-direction: column;
}

@media screen and (max-width: 942px){
	img {
		width: 4rem;
	}

	.employee-info {
	margin-left: 1rem;
}
}
</style>
