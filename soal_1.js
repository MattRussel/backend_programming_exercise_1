function prima(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

console.log("Angka prima diantara 1 hingga 1000:");
for (let i = 2; i <= 1000; i++) {
    if (prima(i)) {
        console.log(i);
    }
}