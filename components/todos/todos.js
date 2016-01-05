(function() {

    var TodosComponent = ng.
        Component({
            selector: 'todos'
        })
        .View({
            templateUrl: '/components/todos/template.html'
        })
        .Class({
            constructor: function () {
                this.todos = [];
            },
            addTodo: function(event) {
                todoObj = {
                    newTodo: this.newTodo,
                    complete: false
                }
                this.todos.push(todoObj);
                this.newTodo = '';
                event.preventDefault();
            },
            deleteTodo: function (index) {
                console.log(index);
                this.todos.splice(index, 1);
            }
        })

    document.addEventListener('DOMContentLoaded', function() {
        ng.bootstrap(TodosComponent);
    });

})();