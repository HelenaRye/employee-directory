<template>
	<section class="add-employee">
		<div class="input-wrapper">
			<input v-model="name" type="text" placeholder="Name">
			<input v-model="position" type="text" placeholder="Position">
		</div>
		<button class="add" @click="addEmployee">Add Employee</button>
	</section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	name: 'AddEmployee',
	setup () {
		const name = ref('')
		const position = ref('')
		const newId = ref(0)

		const store = useStore()

		const addEmployee = function (e) {
			if (position.value && name.value) {
				store.dispatch('addEmployee', position, name, newId)
				newId.value++
				position.value = ''
				name.value = ''
			}
		}

		return {
			name,
			position,
			newId,
			addEmployee
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
	width: 18rem;
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
	border-radius: 30px;
	border: none;
	background: #0978F4;
	color: #FFF;
	padding: 0rem 2rem;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

</style>