let n = +prompt("Nhập số phần tử của mảng:");
if (isNaN(n) || n < 0) {
    document.writeln("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    document.writeln("Mảng không có phần tử");
} else {
    let arr = [];
    let num = [];
    for (let i = 0; i < n; i++) {
        let num1 = prompt(`Nhập ký tự thứ ${i + 1}:`);
        let num2 = num1.charAt(0);  
        arr.push(num2);
        if (!isNaN(num2) && num2 >= '0' && num2 <= '9') {
            num.push(num2);
        }
    }
    document.writeln("Mảng: " + (arr) + "<br>");
    if (num.length > 0) {
        document.writeln("Ký tự số trong mảng: " + num.join(" "));
    } else {
        document.writeln("Không có ký tự số");
    }
}