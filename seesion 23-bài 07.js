let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(num);
    }
    console.log("Mảng đã nhập:", arr);
    let max1 = arr[0];
    let max2 = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max1) {
            max1 = arr[i];
        }
    }
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max1) {
            if (!found || arr[i] > max2) {
                max2 = arr[i];
                found = true;
            }
        }
    }
    if (!found) {
        console.log("Không có số lớn thứ hai trong mảng");
    } else {
        console.log("Số lớn thứ hai là:", max2);
    }
}
