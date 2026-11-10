// Bài 1: In 10 số đầu tiên của dãy Fibonacci bằng console.log
let previous = 0;
let current = 1;
const fibonacci = [];

for (let index = 0; index < 10; index++) {
  fibonacci.push(previous);
  const next = previous + current;
  previous = current;
  current = next;
}

console.log("Bài 1 - 10 số Fibonacci đầu tiên:", fibonacci.join(", "));

// Bài 2: Tính giai thừa của một số nguyên dương bằng console.log
const factorialNumber = Number(prompt("Bài 2 - Nhập một số nguyên dương để tính giai thừa:"));

if (Number.isSafeInteger(factorialNumber) && factorialNumber > 0) {
  let factorial = 1n;
  for (let value = 2n; value <= BigInt(factorialNumber); value++) {
    factorial *= value;
  }
  console.log(`Bài 2 - ${factorialNumber}! = ${factorial}`);
} else {
  console.log("Bài 2 - Giá trị nhập vào không phải số nguyên dương hợp lệ.");
}

// Bài 3: In bốn tam giác vuông, với góc vuông ở các vị trí khác nhau
document.write("<h2>Bài 3: In tam giác vuông</h2>");
const triangleHeight = Number(prompt("Bài 3 - Nhập chiều cao tam giác (1-30):"));

if (Number.isInteger(triangleHeight) && triangleHeight >= 1 && triangleHeight <= 30) {
  const triangles = [[], [], [], []];

  for (let row = 1; row <= triangleHeight; row++) {
    triangles[0].push("*".repeat(row));
    triangles[1].push("*".repeat(triangleHeight - row + 1));
    triangles[2].push(" ".repeat(triangleHeight - row) + "*".repeat(row));
    triangles[3].push(" ".repeat(row - 1) + "*".repeat(triangleHeight - row + 1));
  }

  document.write('<pre style="display:flex;gap:3em;">');
  for (const triangle of triangles) {
    document.write(triangle.join("\n") + "\n\n");
  }
  document.write("</pre>");
} else {
  document.write("<p>Chiều cao không hợp lệ.</p>");
}

// Bài 4: In hình chữ nhật rỗng
document.write("<h2>Bài 4: In hình chữ nhật rỗng</h2>");
const rectangleWidth = Number(prompt("Bài 4 - Nhập chiều rộng hình chữ nhật (2-60):"));
const rectangleHeight = Number(prompt("Bài 4 - Nhập chiều cao hình chữ nhật (2-30):"));

if (Number.isInteger(rectangleWidth) && rectangleWidth >= 2 && rectangleWidth <= 60 &&
    Number.isInteger(rectangleHeight) && rectangleHeight >= 2 && rectangleHeight <= 30) {
  const rectangleRows = ["*".repeat(rectangleWidth)];
  for (let row = 0; row < rectangleHeight - 2; row++) {
    rectangleRows.push("*" + " ".repeat(rectangleWidth - 2) + "*");
  }
  rectangleRows.push("*".repeat(rectangleWidth));
  document.write("<pre>" + rectangleRows.join("\n") + "</pre>");
} else {
  document.write("<p>Kích thước không hợp lệ.</p>");
}

// Bài 5: Tính lãi ngân hàng theo hình thức lãi kép (lãi mẹ đẻ lãi con)
const principal = Number(prompt("Bài 5 - Nhập số tiền ban đầu:"));
const months = Number(prompt("Bài 5 - Nhập số tháng cho vay:"));
const monthlyInterestRate = Number(prompt("Bài 5 - Nhập lãi suất hàng tháng (%, ví dụ 1.5):"));

if (Number.isFinite(principal) && principal > 0 &&
    Number.isInteger(months) && months >= 0 &&
    Number.isFinite(monthlyInterestRate) && monthlyInterestRate >= 0) {
  const finalAmount = principal * (1 + monthlyInterestRate / 100) ** months;
  const interestEarned = finalAmount - principal;
  console.log("Bài 5 - Tổng tiền sau thời gian vay:", finalAmount.toFixed(2));
  console.log("Bài 5 - Tiền lãi nhận được:", interestEarned.toFixed(2));
} else {
  console.log("Bài 5 - Vui lòng nhập số tiền dương, số tháng nguyên không âm và lãi suất không âm.");
}