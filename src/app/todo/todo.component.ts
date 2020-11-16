import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from './todo';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoForm;

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      description: '',
    });
  }

  ngOnInit(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onSubmit({ description }: { description: string }) {
    this.addTodo(description);
  }

  addTodo(description: string) {
    const newTodo: Todo = {
      id: uuid(),
      description,
      isDone: false,
    };
    this.todos.push(newTodo);
    // save todos to localstorage
    this.saveTodosToLocalStorage();
    this.todoForm.reset();
  }

  deleteTodo(id: string) {
    const newTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newTodos;
    this.saveTodosToLocalStorage();
  }

  toggleDoneTodo(id: string) {
    const newTodos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    this.todos = newTodos;
    this.saveTodosToLocalStorage();
  }
}
