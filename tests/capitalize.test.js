import capitalize from '../src/capitalize.js';
import {strict as assert} from 'assert';

assert.deepStrictEqual(capitalize('hello'), 'Hello');
assert.deepStrictEqual(capitalize(''), '');

console.log('Все тесты пройдены!');
