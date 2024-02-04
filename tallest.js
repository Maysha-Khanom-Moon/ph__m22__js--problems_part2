const height = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

max = 0;
for (const i in height) {
    max = getMax(max, height[i]);
}

console.log(max);