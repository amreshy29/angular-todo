import { Todo } from './Todo';

describe("todo", ()=> {
  it("should create a instance ", ()=> {
    expect(new Todo()).toBeTruthy();
  });

  it("should pass the values and ", ()=> {
    const todo = new Todo({
      name: "Task 1",
      complete : false
    })

    expect(todo.name).toEqual("Task 1");
    expect(todo.complete).toEqual(false);
  })
})