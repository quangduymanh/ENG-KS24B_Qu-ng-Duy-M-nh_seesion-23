let n =+prompt("Nhập số phần tử của mảng:");
if (isNaN(n) || n < 0) {
    document.writeln("Số lượng phần tử không được âm");
} else if (n === 0) {
    document.writeln("Mảng không có phần tử");
} else {
    let arr = [];
    let sum = 0;
    let number = false;
    for (let i = 0; i < n; i++) {
        let charInput = prompt(`Nhập ký tự thứ ${i + 1}:`);
        arr.push(charInput);
        let num = +(charInput);
        if (!isNaN(num)) {
            sum += num;
            number = true;
        }
    }
    document.writeln("Mảng: " +(arr) + "<br>");

    if (number) {
        document.writeln("Tổng các ký tự là số: " + sum);
    } else {
        document.writeln("Không có phần tử nào là số");
    }
}