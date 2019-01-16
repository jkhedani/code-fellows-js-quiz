// What should we expect in our console?
const obj = {
  a: "one",
  x: "two",
  y: "three",
  z: "four"
}

delete obj.x

const a = Object.keys(obj)
a.sort()
a.reverse()

console.log(obj[a[0]]);
