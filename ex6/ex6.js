// Ex6: Menu chức năng, lặp lại cho đến khi người dùng chọn thoát
let userName = "";
let userAge = null;
let isRunning = true;

while (isRunning) {
  const choice = prompt(
    "MENU\n" +
    "1. Nhập tên người dùng\n" +
    "2. Nhập tuổi người dùng\n" +
    "3. In tên và tuổi\n" +
    "4. In bảng cửu chương\n" +
    "5. Kiểm tra số chẵn/lẻ\n" +
    "6. Tính tổng từ 1 đến N\n" +
    "7. In các số trong một dãy\n" +
    "8. Kiểm tra số nguyên tố\n" +
    "9. Đảo ngược chuỗi\n" +
    "10. Thoát\n\n" +
    "Nhập lựa chọn của bạn:"
  );

  if (choice === null) {
    isRunning = false;
    break;
  }

  switch (choice.trim()) {
    case "1": {
      const input = prompt("Nhập tên người dùng:");
      if (input !== null && input.trim() !== "") {
        userName = input.trim();
        alert("Đã lưu tên: " + userName);
      } else if (input !== null) {
        alert("Tên không được để trống.");
      }
      break;
    }

    case "2": {
      const input = prompt("Nhập tuổi người dùng:");
      if (input === null) break;
      const age = Number(input);
      if (Number.isInteger(age) && age >= 0) {
        userAge = age;
        alert("Đã lưu tuổi: " + userAge);
      } else {
        alert("Vui lòng nhập tuổi là số nguyên không âm.");
      }
      break;
    }

    case "3": {
      const name = userName || "Chưa nhập tên";
      const age = userAge === null ? "Chưa nhập tuổi" : userAge;
      alert("Tên: " + name + "\nTuổi: " + age);
      break;
    }

    case "4": {
      const input = prompt("Nhập số cần in bảng cửu chương:");
      if (input === null) break;
      const number = Number(input);
      if (!Number.isFinite(number)) {
        alert("Vui lòng nhập một số hợp lệ.");
        break;
      }
      const lines = [];
      for (let i = 1; i <= 10; i++) {
        lines.push(`${number} x ${i} = ${number * i}`);
      }
      alert(lines.join("\n"));
      break;
    }

    case "5": {
      const input = prompt("Nhập một số nguyên:");
      if (input === null) break;
      const number = Number(input);
      if (!Number.isInteger(number)) {
        alert("Vui lòng nhập một số nguyên.");
      } else {
        alert(number % 2 === 0 ? `${number} là số chẵn.` : `${number} là số lẻ.`);
      }
      break;
    }

    case "6": {
      const input = prompt("Nhập số nguyên N (N ≥ 1):");
      if (input === null) break;
      const n = Number(input);
      if (!Number.isSafeInteger(n) || n < 1) {
        alert("Vui lòng nhập số nguyên dương hợp lệ.");
        break;
      }
      alert(`Tổng các số từ 1 đến ${n} là: ${n * (n + 1) / 2}`);
      break;
    }

    case "7": {
      const input = prompt("Nhập dãy số, cách nhau bằng dấu phẩy hoặc khoảng trắng:");
      if (input === null) break;
      const values = input.trim().split(/[\s,]+/).filter(Boolean);
      const numbers = values.map(Number);
      if (numbers.length === 0 || numbers.some((number) => !Number.isFinite(number))) {
        alert("Dãy số không hợp lệ.");
      } else {
        alert("Các số trong dãy:\n" + numbers.join(", "));
      }
      break;
    }

    case "8": {
      const input = prompt("Nhập một số nguyên:");
      if (input === null) break;
      const number = Number(input);
      if (!Number.isSafeInteger(number)) {
        alert("Vui lòng nhập một số nguyên hợp lệ.");
        break;
      }
      let isPrime = number >= 2;
      for (let divisor = 2; divisor <= Math.sqrt(number) && isPrime; divisor++) {
        if (number % divisor === 0) isPrime = false;
      }
      alert(isPrime ? `${number} là số nguyên tố.` : `${number} không phải là số nguyên tố.`);
      break;
    }

    case "9": {
      const input = prompt("Nhập một chuỗi:");
      if (input !== null) {
        alert("Chuỗi đảo ngược: " + Array.from(input).reverse().join(""));
      }
      break;
    }

    case "10":
      isRunning = false;
      alert("Đã thoát chương trình.");
      break;

    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 10.");
  }
}