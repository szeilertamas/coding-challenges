function moveZeros(arr) {
    let zerosMoved = [];
    let count = 0;
  
    for (let element of arr) {
      element !== 0 ? zerosMoved.push(element) : count++;
    }
  
    for (i = 0; i < count; i++) {
      zerosMoved.push(0);
    }
  
    return zerosMoved;
  }

//   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]