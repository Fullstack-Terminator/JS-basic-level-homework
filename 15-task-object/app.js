'use strict';

// Вариант 1

// const ToDoList = {
//     tasks: {},
//     tasksCount: 1,

//     addTasks: function(title, priority) {
//         ToDoList.tasks[this.tasksCount] = {
//             title,
//             id: this.tasksCount,
//             priority,
//         }
//         this.tasksCount++;
//     },

//     delTasks: function(id) {
//         for (let key in this.tasks) {
//             if (key === id.toString()) {
//                 delete ToDoList.tasks[key];
//             }
//         }
//     },

//     apdateTasks: function(id, title, priority) {
//         for (let key in this.tasks) {
//             if (key === id.toString()) {
//                 ToDoList.tasks[key] = { title, id, priority }
//             }
//         }
//     },

//     sortTasks: function() {
//         const sortTasks = Object.values(this.tasks).sort((taskA, taskB) => taskA.priority - taskB.priority);
//         return sortTasks;
//     },
// };

// ToDoList.addTasks('Убраться в комнате', 7);
// ToDoList.addTasks('Помыть посуду', 1);
// ToDoList.addTasks('Помыть полы', 3);
// ToDoList.addTasks('Приготовить ужин', 5);
// ToDoList.delTasks(2);
// ToDoList.apdateTasks(1, 'Помыть окна', 9);
// console.log(ToDoList.sortTasks());

// Вариант 2

const ToDoList = {
    tasks: [
        {'title': 'Помыть посуду', id: 1, priority: 1}
    ],

    addTasks: function(title, priority) {
        const idMeaning = this.tasks[this.tasks.length - 1].id + 1;
        this.tasks.push({ title, id: idMeaning, priority });
    },

    delTasks: function(id) {
        let index = 0;
        for (let value of this.tasks) {
            if (value.id === id) {
                this.tasks.splice(index, 1);
            };
            index++;
        };
    },

    apdateTasks: function(id, title, priority) {
        let index = 0;
        for (let key of this.tasks) {
            if (key.id === id) {
                this.tasks[index] = { title, id, priority };
            };
            index++;
        };
    },

    sortTasks: function() {
        return this.tasks.sort((valueA, valueB) => valueA.priority - valueB.priority);
    },
}

ToDoList.addTasks('Убраться в прихожей', 5);
ToDoList.addTasks('Подмести', 13);
ToDoList.addTasks('Выгулять кота', 3);
ToDoList.delTasks(2);
ToDoList.apdateTasks(1, 'Сделать домашнее задание по JS', 11);
ToDoList.sortTasks();
console.log(ToDoList.tasks);