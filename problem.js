var t = 'anagram'
var v = 'nagaram'
console.log(t[1])
// console.log("is working")
// console.log(result)
var map = new Map
for (i = 0; 1 < t.length; i++) {
    if (map[t[i]]) {
        map[t[i]]++
    } else { map[t[1]] = 1 }
}
console.log(map)