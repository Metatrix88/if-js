import { randProductName, randNumber } from '@ngneat/falso';
import { addProduct } from '../src/scripts/lesson4';

test('When adding new valid product, get successful confirmation', () => {
  const name = randProductName();
  const price = randNumber();
  // Generated random input: { 'Handmade Granite Cheese', 704809 }
  expect(addProduct(name, price)).toBe(true);
  // Test failed, the random input triggered some path we never planned for.
  // We discovered a bug early!
});
