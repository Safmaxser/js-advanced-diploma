import { calcTileType } from '../utils';

test.each([
  [{index: 0, boardSize: 8}, 'top-left'],
  [{index: 1, boardSize: 8}, 'top'],
  [{index: 63, boardSize: 8}, 'bottom-right'],
  [{index: 7, boardSize: 7}, 'left'],
  [{index: 7, boardSize: 8}, 'top-right'],
  [{index: 56, boardSize: 8}, 'bottom-left'],
  [{index: 31, boardSize: 8}, 'right'],
  [{index: 60, boardSize: 8}, 'bottom'],
  [{index: 35, boardSize: 8}, 'center'],
])
('testing module utils function calcTileType for correctness with data %o', (response, expected) => {
  const { index, boardSize } = response;
  const result = calcTileType(index, boardSize);
  expect(result).toBe(expected);
});
