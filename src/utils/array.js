export function chunk(arr, n) {
  let leg = arr.length;
  let count = leg % n === 0 ? leg / n : (parseInt(leg / n) + 1);
  let resArr = [];
  for (let i = 0; i < count; i++) {
    let start = i * n;
    let end = start + n;
    resArr.push(arr.slice(start, end))
  }
  return resArr;
}