// // Bài 1

// let numbA = +prompt("Nhập vào số a");
// let numbB = +prompt("Nhập vào số b");

// if(numbA % numbB === 0) {
//     alert("a chia hết cho b");
// } else {
//     alert("a không chia hết cho b");
// }

// // Bài 2

// let age = +prompt("Nhập số tuổi");
// document.write("Số tuổi là: ", age + "-->" );

// if(age < 15) {
//     alert("Không đủ điều kiện vào lớp 10!")
//     document.write("Không đủ điều kiện vào lớp 10!\n");
// } else {
//     alert("Đủ điều kiện vào lớp 10!")
//     document.write(`Đủ điều kiện vào lớp 10!\n`);
// }

// // Bài 3

// let randomNumber = +prompt("Nhập một số bất kỳ");

// if(randomNumber < 0) {
//     alert(`${randomNumber} Nhỏ hơn "0"`);
// } else {
//     alert(`${randomNumber} Lớn hơn "0"`);
// }

// // Bài 4

// let numberA = +prompt("Nhập số a");
// let numberB = +prompt("Nhập số b");
// let numberC = +prompt("Nhập số c");

// if(numberA <= numberC && numberB <= numberC) {
//     alert(`Giá trị lớn nhắt là ${numberC}`);
// } else if (numberB <= numberA && numberC <= numberA) {
//     alert(`Giá trị lớn nhắt là ${numberA}`);
// } else if(numberC <= numberB && numberA <= numberB) {
//     alert(`Giá trị lớn nhắt là ${numberB}`);
// }

// Bài 5

let testPoint1 = +prompt(`Nhập điểm bài kiểm tra 1`);
let testPoint2 = +prompt(`Nhập điểm bài kiểm tra 2`);
let testPoint3 = +prompt(`Nhập điểm bài kiểm tra 3`);
let testPointMidTerm = +prompt(`Nhập điểm bài kiểm tra giữa kỳ`);
let testPointFinal = +prompt(`Nhập điểm bài kiểm tra cuối kỳ`);
let avg = ((testPoint1 + testPoint2 + testPoint3) + 2 * testPointMidTerm + 3 * testPointFinal) / (3 + 5);
if(avg <= 10) {
    if(avg <= 3.5) {
    alert(`Điểm trung bình là ${avg} -> học lực "Yếu"`);
} else if(avg > 3.5 && avg < 6.5) {
    alert(`Điểm trung bình là ${avg} -> học lực "Trung bình"`);
} else if(avg >= 6.5 && avg <= 8.5) {
    alert(`Điểm trung bình là ${avg} -> học lực "Khá"`);
} else if(avg > 8.5 && avg <= 9.5) {
    alert(`Điểm trung bình là ${avg} -> học lực "Giỏi"`);
} else {
    alert(`Điểm trung bình là ${avg} -> học lực "Xuất Sắc"`);
}
} else if(avg > 10) {
    alert(`Nhập lại số điểm`);
}
