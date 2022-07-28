import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TodosResponse, TodoService } from '../todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoResolverService implements Resolve<TodosResponse> {
  constructor(private todoService: TodoService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { type } = route.params;

    if (!type) return this.todoService.getAllTodos();
    return this.todoService.getTodosByType(type);
  }
}