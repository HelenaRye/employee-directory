<template>
	<section class="add-employee">
		<div class="input-wrapper">
			<input v-model="name" type="text" placeholder="Name">
			<input v-model="position" type="text" placeholder="Position">
		</div>
		<button class="add" @click="addEmployee(name, position)">Add Employee</button>
	</section>
</template>

<script>

export default {
	name: 'AddEmployee',
	data () {
		return {
			name: '',
			position: '',
			newId: 0
		}
	},
	methods: {
		addEmployee () {
			if (this.position && this.name) {
				this.$store.dispatch('addEmployee', this);
				this.newId = '';
				this.position = '';
				this.name = '';
			}
		}
	}
}
</script>

<style scoped>
input {
	border-radius: 30px;
	border: 1px solid #BFBFB770;
	padding: 0 2rem;
	height: 2.5rem;
	margin-right: 1rem;
	width: 17rem;
}

.input-wrapper {
	display: flex;
}

.add-employee {
	display: flex;
	justify-content: space-between;
	margin: 0 2rem 2rem 2rem;
}

.add {
	border-radius: 70px;
	border: none;
	background: #0978F4;
	color: #FFF;
	padding: 0rem 2rem;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}


@media screen and (max-width: 942px) {
	.app-wrapper {
		margin: 0 0.5rem;
	}

	.input-wrapper {
		flex-direction: column;
	}

	input {
		margin-top: 1rem;
		margin-right: 0;
		width: 100%;
		-webkit-box-sizing: border-box;
      	-moz-box-sizing: border-box;
	}

	.add {
	padding: 1rem 2rem;
	margin-top: 1rem;
	}

	.add-employee {
	flex-direction: column;
	margin: 0 1rem 2rem 1rem;
	}

}
</style>