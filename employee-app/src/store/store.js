import { ref } from 'vue';
import { createStore } from 'vuex'

const store = createStore({
	namespaced: true,
	state: ref({
		employees: []
	}),
	mutations: {
		ADD_EMPLOYEE (state, payload) {
			const newEmployee = {
				name: payload.name,
				position: payload.position
			}
			state.employees.push(newEmployee)
		}
	},
	actions: {
		ADD_EMPLOYEE (context, payload) {
			context.commit('ADD_EMPLOYEE', payload)
		  }
	},
	getters: {
		getEmployees: state => state.employees
	}
})

export default store