import {Component} from 'angular2/core';

@Component({
    selector: 'todos',
    templateUrl: '/app-ts/components/todos/template.html'
})

export class TodosComponent {

    constructor() {
        this.newTodo = '';
        this.todos = [];
    }
    addTodo(event) {
        todoObj = {
            newTodo: this.newTodo,
            complete: false
        }
        this.todos.push(todoObj);
        this.newTodo = '';
        event.preventDefault();
    }
    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}
