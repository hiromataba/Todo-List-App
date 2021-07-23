import dragAndDrop from './__mocks__/dragAndDropMock';
import './__mocks__/localStorageMock';

describe('dragAndDrop', () => {
  it('should throw an error if no task is given', () => {
    expect(() => {
      dragAndDrop.editTask();
    }).toThrow();
  });

  it('should throw an error if no item is given', () => {
    expect(() => {
      dragAndDrop.clearCompleted();
    }).toThrow();
  });

  it('should check the length of the array ', () => {
    dragAndDrop.clearCompleted('Drink cofee');
    const newArr = JSON.parse(localStorage.getItem('List')) || [];
    expect(newArr.length).toBeGreaterThan(0);
  });

  it('should throw an error if no item ', () => {
    expect(() => {
      dragAndDrop.update();
    }).toThrow();
  });

  it('should return the value of updateIndex', () => {
    expect(dragAndDrop.update(true, false)).toBeTruthy();
  });

  it('should throw an error if no item is given', () => {
    expect(() => {
      dragAndDrop.dragDrop();
    }).toThrow();
  });

  it('should check the status of dragdrop to be true', () => {
    expect(() => {
      dragAndDrop.dragDrop(true);
    }).toBeTruthy();
  });
});
