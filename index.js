// GLOBAL
function dom(id) {
    return document.getElementById(id);
}

var btn = dom("btn");
var arr = [];
var your_array = dom("your_array");
btn.onclick = function(){
    var input_value = dom("input_value").value;
    arr.push(parseInt(input_value));
    console.log(arr);
    your_array.innerHTML = arr;
}

// Tinh tong cac so duong trong mang
var btn1 = dom("btn1");
btn1.onclick = function() {
    var sum = 0;
    var positive_sum = dom("positive_sum");
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] >= 0) {
            sum += arr[i];
        }
    positive_sum.innerHTML = sum;
    }
    if (sum === 0) {
        positive_sum.innerHTML = "Khong co so duong nao trong mang"
    }

}

// Đếm có bao nhiêu số dương trong mảng
var btn2 = dom("btn2");
btn2.onclick = function() {
    var count = 0;
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] >= 0) {
            count += 1;
        }
    }
    positive_count = dom("positive_count");
    positive_count.innerHTML = count;
}

// Tìm số nhỏ nhất trong mảng
var btn3 =  dom("btn3");
btn3.onclick = function() {
    var smallest = arr[0];
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    var smallest_num = dom("smallest_num");
    smallest_num.innerHTML = smallest;
}

// Tìm số dương nhỏ nhất trong mảng
var btn4 = dom("btn4");
var smallest_positive = dom("smallest_positive");
var positive_array = [];
btn4.onclick = function() {
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] > 0) {
            positive_array.push(arr[i]);
        }
    }
    smallest_positive.innerHTML = positive_array.sort()[0]
    if (positive_array.length === 0) {
        smallest_positive.innerHTML = "Khong co so duong nao trong mang"
    }
}

// Tìm số chẵn cuối cùng trong mảng
var btn5 = dom("btn5");
var last = -1;
btn5.onclick = function() {
    for (i = arr.length - 1; i >= 0; i --) {
        if (arr[i] % 2 === 0) {
            last = arr[i];
            break;
        }
    }
    var last_positive = dom("last_positive");
    last_positive.innerHTML = last;
    if (last === -1) {
        last_positive.innerHTML = "Khong co so chan nao trong mang";
    }
}

// Đổi chỗ 2 giá trị trong mảng theo vị trí
var btn6 = dom("btn6");
var swap = dom("swapped_array")
btn6.onclick = function() {
    var element1 = dom("element1").value;
    var element2 = dom("element2").value;
    var a = arr[element1];
    arr[element1] = arr[element2];
    arr[element2] = a;
    swap.innerHTML = arr; 
}

// Sắp xếp mảng theo thứ tự tăng dần
var btn7 = dom("btn7");
var sorted_array = dom("sorted_array");
btn7.onclick = function() {
    var sorted = arr.sort();
    sorted_array.innerHTML = sorted;
}

// Tìm số nguyên tố đầu tiên trong mảng
var btn8 = dom("btn8");
var first_prime = dom("first_prime");
btn8.onclick = function() {
    for (i = 0; i < arr.length; i ++) {
        var prime = 0;
        for (j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                prime = -1;
                break;
            }
        }
        if (prime === -1) {
            first_prime.innerHTML = "Khong co so nguyen to nao trong mang";
        } else if (prime === 0 && arr[i] > 1) {
            first_prime.innerHTML = arr[i];
            break;
        }
    }
}

// Tim so nguyen trong mang
var btn9 = dom("btn9");
var real_array = dom("real_array");
var arr1 = [];
btn9.onclick = function() {
    var real_num = dom("real_num").value;
    arr1.push(parseFloat(real_num));
    real_array.innerHTML = arr1;
}
btn10 = dom("btn10");
btn10.onclick = function() {
    var sum = 0;
    for (i = 0; i < arr1.length; i ++) {
        if (Number.isInteger(arr1[i]) === true) {
            sum += 1;
        }
    }
    var integer_count = dom("integer_count");
    integer_count.innerHTML = sum;
}

// So sánh số lượng số dương và số lượng số âm
var btn11 = dom("btn11");
var comparing_result = dom("comparing_result");
btn11.onclick = function() {
    var negative_comparing = 0;
    var positive_comparing = 0;
    for (i = 0; i < arr.length; i ++) {
        if (arr[i] < 0) {
            negative_comparing += 1;
        } else if (arr[i] > 0) {
            positive_comparing += 1;
        }
    }
    function comparing(a,b) {
        if (a > b) {
            comparing_result.innerHTML = "So duong nhieu hon so am"; 
        } else if (a < b) {
            comparing_result.innerHTML = "So am nhieu hon so duong"; 
        } else {
            comparing_result.innerHTML = "Ca 2 so bang nhau";
        }
    }
    comparing(positive_comparing,negative_comparing);
}