function fx1() {
  let x = 0;
  let y;

  for (let x = 0; x <= 200; ++x) {
    y = (x * 1) / 2 - 50;
    if (x === 100) {
      console.log(`x = ${x} - y = ${y}`);
    }
    if (x === 200) {
      console.log(`x = ${x} - y = ${y}`);
    }
  }
}

function fx2() {
  let y;
  for (let x = 100; x <= 200; ++x) {
    y = (1 / 2) * x - 50;
    if (x === 100) {
      // y = 0
      console.log(`x = ${x} - y = ${y}`);
    }
    if (x === 200) {
      // y = 50
      console.log(`x = ${x} - y = ${y}`);
    }
  }
}

fx1();
fx2();
