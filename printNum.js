function print(start, end) {
  let sum = '';
  let totalSum = 0;


  for (let i = start; i <= end; i++) {
    sum += i + ' ';
    totalSum += i;

  }
  console.log(sum);
  console.log(`Sum: ${totalSum}`);



}
print(5, 10);