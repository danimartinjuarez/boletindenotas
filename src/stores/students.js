import { defineStore } from 'pinia'

export const useStudentsStore = defineStore({
  id: 'students',
  state: () => ({
    students: []
  }),
  actions: {
      async fetchStudents() {
          await fetch("../alumnos.json")
            .then(res => res.json())
              .then(data => {
                this.students = data
            })
    }
  }
})