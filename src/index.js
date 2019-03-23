module.exports = function solveSudoku(matrix) {
    return solve(matrix);
}

function solve(matrix){
  var matrix = matrix;
  let zerosMatrix = [];
    for (let row = 0 ; row < 9 ; row++) {
      let rowZeros =[];
      for (let col = 0; col < 9; col++){
        if ( matrix[row][col] === 0 ){
          for (let num = 1; num <= 10; num++){
            if( checkRowCol(matrix, row ,col, num) && checkSquare(matrix,row,col,num) && num <= 9){
              matrix[row][col] = num;
              rowZeros.push(col);
              break;
            }else{
              if (num >= 9){
                if ( rowZeros.length === 0 ){
                  row = row - 1;
                  rowZeros = zerosMatrix[row];
                }
                let prevCol = rowZeros[rowZeros.length -1 ];
                let prevNum = matrix[row][prevCol];;
                col = prevCol;
                num = prevNum;
                matrix[row][col] = 0;
                rowZeros.pop();

              }
            }
          }
        }
      }
      zerosMatrix[row] = rowZeros;
    }
    return matrix;
  }

  function checkRowCol (matrix, row_num, col_num, num){
    for (var i = 0; i < 9; i++) {
       if ( (num == matrix[row_num][i]) || (num == matrix[i][col_num])){
         return false;
       }
    }
    return true;
  }

  function checkSquare(matrix, row_num, col_num, num){
    for ( var i=0; i < 3; i++){
      for ( var j = 0; j < 3; j++){
        if(matrix[Math.floor((row_num / 3)) * 3 + i][Math.floor((col_num / 3)) * 3 + j] == num){
          return false;
        }
      }
    }
    return true;
  }
