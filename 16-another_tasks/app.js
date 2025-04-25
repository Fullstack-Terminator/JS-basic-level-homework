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
            console.log('Несоответствие количества свойств и их значений')
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
        const task = this.getTaskByID(id);
        if (task) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
        return this.tasks;
    },

    updateTask(data) {
        const {id, ...otherData} = data;
        const task = this.getTaskByID(id);
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

ToDoList.addTask(['title', 'priority'], ['Помыть посуду', 5]);
ToDoList.addTask(['title', 'priority'], ['Убраться в квартире', 3]);
ToDoList.addTask(['title', 'priority'], ['Завершить ДЗ', 1]);
ToDoList.delTask(3);
ToDoList.updateTask({ title: 'Помыть кота', priority: 7, id: 1 });
ToDoList.sortTasks('priority');
console.log(ToDoList.tasks);

const newTask = {
    tasks: [],
    lastID: 0,
};

newTask.addTask = ToDoList.addTask;
newTask.getTaskByID = ToDoList.getTaskByID;
newTask.delTask = ToDoList.delTask;
newTask.updateTask = ToDoList.updateTask;
newTask.sortTasks = ToDoList.sortTasks;
newTask.addTask(['name', 'description', 'order'], ['Mike', 'my name is Mike', 3]);
newTask.addTask(['name', 'description', 'order'], ['Jon', 'my name is Jon', 9]);
newTask.addTask(['name', 'description', 'order'], ['Anna', 'my name is Anna', 7]);
newTask.delTask(3);
newTask.updateTask({name: 'Nikita', description: 'my name is Nikita', order: 17, id: 1});
newTask.sortTasks('order');

console.log(newTask.tasks);