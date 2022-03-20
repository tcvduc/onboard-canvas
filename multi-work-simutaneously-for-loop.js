function doubleWork() {
  for (let i = 1, j = 10; i >= 10, j >= 0; ++i, --j) {
    console.log("i = ", i);
    console.log("j = ", j);
  }
}

function tripleWork() {
  for (let i = 1, j = 10, k = i + j; i >= 10, j >= 0, k >= 0; ++i, --j, --k) {
    console.log("i = ", i);
    console.log("j = ", j);
    console.log("k = ", k);
  }
}

// doubleWork();
tripleWork();
