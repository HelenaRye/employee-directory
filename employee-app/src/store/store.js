import { createStore } from 'vuex'

const store = createStore({
	namespaced: true,
	state: {
		employees: []
	},
	mutations: {
		ADD_EMPLOYEE (state, payload) {
			const newEmployee = {
				id: payload.newId,
				name: payload.name,
				position: payload.position
			}
			state.employees.unshift(newEmployee)
		},
		DELETE_EMPLOYEE: (state, payload) => {
			const index = state.employees.findIndex(employee => employee.id === payload);
    state.employees.splice(index, 1);
		  }
	},
	actions: {
		addEmployee (context, payload) {
			context.commit('ADD_EMPLOYEE', payload)
		  },
		deleteEmployee: (context, payload) => {
			context.commit('DELETE_EMPLOYEE', payload);
		}
	},
	getters: {
		getEmployees: (state) => state.employees
	}
})

export default store