import todoAction from './__mocks__/addRemovemMock';
import './__mocks__/localStorageMock';

describe('addTodo', () => {
  it('should throw an error if no name is given', () => {
    expect(() => {
      todoAction.addTodo();
    }).toThrow();
  });

  it('should create a task ', () => {
    todoAction.addTodo('Hiro');
    const todos = JSON.parse(localStorage.getItem('List')) || [];
    expect(todos.length).toBeGreaterThan(0);
  });

  it('should throw an error if no taskId is given', () => {
    expect(() => {
      todoAction.removeElement();
    }).toThrow();
  });

  it('should check if taskId is given', () => {
    todoAction.removeElement(2);
    const todos = JSON.parse(localStorage.getItem('List')) || [];
    expect(todos.length).toBeGreaterThan(0);
  });
});
