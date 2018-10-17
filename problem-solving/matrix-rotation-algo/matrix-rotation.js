function matrixRotation(matrix, r) {
  let matrixTemp = matrix;
  let matrixRotation = matrix;
  let matrixFinal = [];
  let last = matrix.length - 1;
  
  for (let i = 0; i <= r; i++) {
      matrixRotation.map( (row, rowIndex, rowArr) => {
        if (rowIndex === 0) {
          row.map( (item, itemIndex, itemArr) => {
            switch (itemIndex) {
              case 0:
                moveDown(item, itemIndex, rowIndex);
                break;
              default:
                moveLeft(item, itemIndex, rowIndex);
                break;
            }
          });
        } else if (rowIndex === last) {
          row.map( (item, itemIndex, itemArr) => {
            switch (itemIndex) {
              case last:
                moveUp(item, itemIndex, rowIndex);
                break;
              default:
                moveRight(item, itemIndex, rowIndex);
            }
          });
        } else {
          row.map( (item, itemIndex, itemArr) => {
            switch (itemIndex) {
              case 0:
                moveDown(item, itemIndex, rowIndex);
                break;
              case last:
                moveUp(item, itemIndex, rowIndex);
                break;
              case 1 && !(rowIndex === last - 1):
                moveDown(item, itemIndex, rowIndex);
                break;
              case 1 && rowIndex === last - 1:
                moveRight(item, itemIndex, rowIndex);
                break;
              case last - 1 && !(rowIndex === 1):
                moveUp(item, itemIndex, rowIndex);
                break;
              case last - 1 && rowIndex === 1:
                moveLeft(item, itemIndex, rowIndex);
                break;
            }
        });
      }
    });
    
    matrixRotation = matrixTemp;
  }
  
  for (let line of matrixRotation) {
    console.log(...line);
  }
  
  function moveDown(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex++][itemIndex] = item;
  }
  
  function moveRight(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex][itemIndex++] = item;
  }
  
  function moveUp(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex--][itemIndex] = item;
  }
  
  function moveLeft(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex][itemIndex--] = item;
  }
}
