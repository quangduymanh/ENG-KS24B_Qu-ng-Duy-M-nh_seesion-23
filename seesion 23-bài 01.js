let arr = [1, 22, 12, 8, 7, 9, 15, 30, 4, 11];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        arr2.push(arr[i]);
    }
}
if (arr2.length > 0) {
    document.writeln("Các số lớn hơn hoặc bằng 10 là" + arr2.join(' ') + "<br>");
} else {
    document.writeln("Không có số nào lớn hơn 10");
}