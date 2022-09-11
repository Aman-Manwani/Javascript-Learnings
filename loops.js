//for loop

let sum = 0;
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1);
  console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
console.log(i);

// while loop
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while(i<n){
  console.log(i)
  i++;
}
//do while loop
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 10;
do{
  console.log(i)
  i++;
}while (i < n) 

