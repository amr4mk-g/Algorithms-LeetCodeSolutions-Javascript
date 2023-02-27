function rotate (matrix) {
    let n = matrix.length;
    for (let r=0; r<n; r++){
       for (let c=r+1; c<n; c++){
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
       }
    }
    for (let r of matrix) r.reverse();
}
