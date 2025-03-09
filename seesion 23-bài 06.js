let arrays = ["", 0, 5, 10, "Hello world!"];
for (let i = 0; i < arrays.length; i++) {
    let arr = arrays[i];
    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j]) {
            newArr.push(arr[j]);
        }
    }
    document.writeln(arr);
    document.writeln(newArr);
}
