import './array-ext';

describe('Array.prototype', () => {
  describe('divideBy', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    it('should divide array by specified size', () => {
      expect(numbers.divideBy(2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);
      expect(numbers.divideBy(3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });
  });

  describe('flatten', () => {
    const list = [[1, 2], [3, 3], [[4, 4, 4], 5]];

    it('should be flattend', () => {
      expect(list.flatten()).toEqual([1, 2, 3, 3, 4, 4, 4, 5]);
    });
  });

  describe('uniq', () => {
    const numbers = [1, 2, 3, 3, 4, 4, 4, 5];

    it('should be unique', () => {
      expect(numbers.uniq()).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('uniqBy', () => {
    const objects = [{id: 1, name: 'hello'}, {id: 2, name: 'world'}, {id: 1, name: 'hello'}];

    it('should be unique by property', () => {
      expect(objects.uniqBy('id')).toEqual([{id: 1, name: 'hello'}, {id: 2, name: 'world'}]);
    });
  });
});
