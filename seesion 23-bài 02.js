let arr = [1, 2, 3, 4, 5, 6];
if (arr.length === 0) {
    document.writeln("Không có số lớn nhất");
} else {
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    document.writeln("Số lớn nhất" + max + "<br>");
    document.writeln("Vị trí" + index);
}