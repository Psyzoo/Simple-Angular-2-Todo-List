(function() {
    var HeaderComponent = ng
        .Component({
            selector: 'header',
        })
        .View({
            template: '<h1>Angular 2 - Simple Todo List Example</h1>'
        })
        .Class({
            constructor: function () { }
        })


    var TodosComponent = ng.
        Component({
            selector: 'todos'
        })
        .View({
            templateUrl: '/modules/todos/todos.html'
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

    var TabsComponent = ng.
        Component({
            selector: 'tabs'
        })
        .View({
            templateUrl: '/modules/tabs/tabs.html'
        })
        .Class({
            constructor: function () {
                this.tabs = [];
            }
        });

    document.addEventListener('DOMContentLoaded', function() {
        ng.bootstrap(HeaderComponent);
        ng.bootstrap(TodosComponent);
        ng.bootstrap(TabsComponent);
    });
})();