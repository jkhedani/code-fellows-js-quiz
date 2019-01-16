// What does `count(5)` return?
const counting = async (n) => {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

const count = async (n) => {
  let c = await counting(n)
  c.shift(1)
  c.reverse()
  const d = c.pop()
  c = c.slice(1,3)
  c.pop()
  c.push(d)
  return c.join("")
}

count(5).then((res) => {
  console.log(res);
}).catch((e) => {
  console.error(e);
})
