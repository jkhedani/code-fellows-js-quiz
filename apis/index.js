// What happens when I run this in a NodeJS runtime?
fetch("https://google.com").then(res => {
  console.log(res);
});

// What is the value of `a`?
const a = Math.round(Date.now() / 1000)
console.log(a);
