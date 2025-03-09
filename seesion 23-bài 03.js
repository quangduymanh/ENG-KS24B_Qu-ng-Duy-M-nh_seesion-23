let n = +prompt("Nhập số phần tử của mảng:");
while (isNaN(n)) {
    n = +prompt("Vui lòng nhập số nguyên hợp lệ:");
}
if (n < 0) {
    document.writeln("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    document.writeln("Mảng không có phần tử");
} else {
    let arr = [];
    let i = 0;
    while (i < n) {
        let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);

        if (!isNaN(num)) {
            arr.push(num);
            i++;
        } else {
            alert("Vui lòng nhập một số hợp lệ!");
        }
    }

    let num1 = 0;
    for (let value of arr) {
        if (value < 0) {
            num1++;
        }
    }
    document.writeln("Mảng: " +(arr)+ "<br>");
    document.writeln("Số số nguyên âm: " + num1);
}