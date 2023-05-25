<template>
    <input v-model="name" type="text" placeholder="Name">
	<input v-model="position" type="text" placeholder="Position">
	<button class="add" @click="addEmployee">Add Employee</button>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'AddEmployee',
	setup () {
		const name = ref('')
		const position = ref('')

		const store = useStore()

		const addEmployee = () => {
			if (position.value && name.value) {
				store.dispatch('ADD_EMPLOYEE', position.value, name.value)
				position.value = ''
				name.value = ''
			}
		}

		return {
			name,
			position,
			addEmployee
		}
	}
}
</script>

<style scoped>
input {
	border-radius: 30px;
	border: 1px solid grey;
	padding: 0rem 2rem;
	height: 2.5rem;
}
</style>