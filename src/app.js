import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      toDoList: [
        {description: "Supermarket shop", priority: "low"},
        {description: "Call sister", priority: "high"},
        {description: "Buy birthday gift", priority: "high"}
      ],
      newToDo: { description: "", priority: "high"}
    },
    methods: {
      saveNewToDo: function() {
        const list = this.toDoList;
        const newToDo = this.newToDo;
        list.push(newToDo);
        this.newToDo = {description: "", priority: "high"};
      }
    }
  });
});
