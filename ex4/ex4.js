// Bài 1: Đếm từ 1 đến 100
for (let number = 1; number <= 100; number++) {
  console.log(number);

  if (number === 99) {
    console.log("Đã hoàn thành");
  }
}

// Bài 2: Kiểm tra nhiệt độ hiện tại
const temperature = Number(prompt("Nhập nhiệt độ hiện tại:"));

if (temperature > 100) {
  alert("Nhiệt độ quá cao, hãy giảm nhiệt độ.");
} else if (temperature < 20) {
  alert("Nhiệt độ quá thấp, hãy tăng nhiệt độ.");
}

// Bài 3: Hiển thị 20 số đầu tiên của dãy Fibonacci (bắt đầu từ 0, 1)
let previous = 0;
let current = 1;
const fibonacci = [];

for (let index = 0; index < 20; index++) {
  fibonacci.push(previous);
  const next = previous + current;
  previous = current;
  current = next;
}

console.log("20 số Fibonacci đầu tiên:", fibonacci.join(", "));

// Bài 4: Tìm số Fibonacci đầu tiên chia hết cho 5
let previousForFive = 0;
let currentForFive = 1;

if (previousForFive % 5 === 0) {
  console.log("Số Fibonacci đầu tiên chia hết cho 5 là:", previousForFive);
} else {
  while (true) {
    const nextForFive = previousForFive + currentForFive;
    previousForFive = currentForFive;
    currentForFive = nextForFive;

    if (previousForFive % 5 === 0) {
      console.log("Số Fibonacci đầu tiên chia hết cho 5 là:", previousForFive);
      break;
    }
  }
}

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy Fibonacci (bắt đầu từ 0, 1)
let previousForSum = 0;
let currentForSum = 1;
let fibonacciSum = 0;

for (let index = 0; index < 20; index++) {
  fibonacciSum += previousForSum;

  const nextForSum = previousForSum + currentForSum;
  previousForSum = currentForSum;
  currentForSum = nextForSum;
}

console.log("Tổng của 20 số Fibonacci đầu tiên là:", fibonacciSum);

// Bài 6: Tính tổng của 30 số tự nhiên đầu tiên chia hết cho 7
let sumOfMultiplesOfSeven = 0;
let countOfMultiplesOfSeven = 0;
let naturalNumber = 1;

while (countOfMultiplesOfSeven < 30) {
  if (naturalNumber % 7 === 0) {
    sumOfMultiplesOfSeven += naturalNumber;
    countOfMultiplesOfSeven++;
  }
  naturalNumber++;
}

console.log("Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là:", sumOfMultiplesOfSeven);

// Bài 7: In Fizz, Buzz hoặc FizzBuzz cho các số từ 1 đến 100
for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
