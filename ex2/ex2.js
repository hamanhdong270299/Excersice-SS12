// Bài 1

const cDegree = +prompt(`Nhập vào °C muốn chuyển`);
const fDegree = (cDegree * 9 / 5) + 32;
console.log(`${fDegree}°F`)

// Bài 2

const meters = +prompt("Nhập số mét muốn đổi");
const feet = meters * 3.28084;
console.log(`${feet} feet`);

// Bài 3

const aDoDai = +(prompt("Nhập độ dài cạnh a:"));
const dienTich = aDoDai * aDoDai;

console.log(`Diện tích hình vuông là: ${dienTich}`);

// Bài 4

const canhA = +(prompt("Nhập cạnh a:"));
const canhB = +(prompt("Nhập cạnh b:"));
const dienTichHinhChuNhat = canhA * canhB;

console.log(`Diện tích hình chữ nhật là: ${dienTichHinhChuNhat}`);

// Bài 5

const sA = +(prompt("Nhập cạnh a:"));
const sB = +(prompt("Nhập cạnh b:"));
const dienTichTamGiacVuong = (sA * sB) / 2;

console.log(`Diện tích tam giác vuông là: ${dienTichTamGiacVuong}`);

// Bài 6

const a = +prompt("Nhập hệ số a:");
const b = +prompt("Nhập hệ số b:");

if (a === 0) {
  if (b === 0) {
    console.log("Phương trình có vô số nghiệm");
  } else {
    console.log("Phương trình vô nghiệm");
  }
} else {
  const x = -b / a;
  console.log(`Phương trình có nghiệm x = ${x}`);
}

// Bài 7

const a2 = +prompt("Nhập hệ số a của phương trình bậc 2:");
const b2 = +prompt("Nhập hệ số b của phương trình bậc 2:");
const c2 = +prompt("Nhập hệ số c của phương trình bậc 2:");

if (a2 === 0) {
  // Nếu a = 0, phương trình trở thành bx + c = 0.
  if (b2 === 0) {
    console.log(c2 === 0 ? "Phương trình có vô số nghiệm" : "Phương trình vô nghiệm");
  } else {
    console.log(`Phương trình trở thành bậc 1, có nghiệm x = ${-c2 / b2}`);
  }
} else {
  const delta = b2 ** 2 - 4 * a2 * c2;

  if (delta < 0) {
    console.log("Phương trình vô nghiệm trong tập số thực");
  } else if (delta === 0) {
    console.log(`Phương trình có nghiệm kép x = ${-b2 / (2 * a2)}`);
  } else {
    const x1 = (-b2 + Math.sqrt(delta)) / (2 * a2);
    const x2 = (-b2 - Math.sqrt(delta)) / (2 * a2);
    console.log(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
  }
}

// Bài 8: Kiểm tra một số có phải là tuổi hợp lệ hay không
const age = +prompt("Nhập tuổi cần kiểm tra:");

if (Number.isInteger(age) && age > 0 && age < 120) {
  console.log(`${age} là tuổi hợp lệ của một người`);
} else {
  console.log(`${age} không phải là tuổi hợp lệ của một người`);
}
