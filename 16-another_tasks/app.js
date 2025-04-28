'use strict';

const ToDoList = {
    tasks: [],
    lastID: 0,

    addTask(propertyTask, valuePropertyTask) {
        if (propertyTask.length === valuePropertyTask.length) {
            const task = propertyTask.reduce((obj, key, index) => {
                obj[key] = valuePropertyTask[index];
                return obj;
            }, {});
            task.id = this.lastID++;
            this.tasks.push(task);
        } else {
            console.log('Несоответствие количества свойств и их значений');
        }
    },

    getTaskByID(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            console.log(`задача с id = ${id} не найдена`);
            return;
        }
        return task;
    },

    delTask(id) {
        const task = ToDoList.getTaskByID(id);
        if (task) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
        return this.tasks;
    },

    updateTask(data) {
        const {id, ...otherData} = data;
        const task = ToDoList.getTaskByID(id);
        if (Object.keys(otherData).length === 0) {
            return task;
        }
        Object.assign(task, otherData);
        console.log(`задача с id = ${id} - успешно обновлена`);
        return task;
    },

    sortTasks: function(property) {
        return this.tasks.sort((valueA, valueB) => valueA[property] - valueB[property]);
    },
};

ToDoList.addTask(['title', 'priority'], ['Помыть посуду', 3]);
ToDoList.addTask(['title', 'priority'], ['Убраться в квартире', 1]);
ToDoList.addTask(['title', 'priority'], ['Выполнить ДЗ', 5]);
ToDoList.delTask(3);
ToDoList.updateTask({ title: 'Помыть кота', priority: 7, id: 1 });
ToDoList.sortTasks('priority');
console.log(ToDoList.tasks);

const newTask = {
    tasks: [],
    lastID: 0,
}

const addTaskNewTask = ToDoList.addTask.bind(newTask);
const getTaskByIDNewTask = ToDoList.getTaskByID.bind(newTask);
const delTaskNewTask = ToDoList.delTask.bind(newTask);
const updateTaskNewTask = ToDoList.updateTask.bind(newTask);
const sortTasksNewTask = ToDoList.sortTasks.bind(newTask);

addTaskNewTask(['name', 'description', 'order'], ['Миша', 'программист', 9]);
addTaskNewTask(['name', 'description', 'order'], ['Дима', 'слесарь', 2]);
addTaskNewTask(['name', 'description', 'order'], ['Стас', 'инженер', 8]);
delTaskNewTask(2);
updateTaskNewTask({ name: 'Лена', description: 'водолаз', order: 7, id: 1 });
sortTasksNewTask('order');
console.log(newTask);