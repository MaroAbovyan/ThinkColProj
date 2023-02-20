
// Some Array methodes from inside

const arr = [
    {name: "Ponchik", prise: 100},
    {name: "Perashki", prise: 200},
    {name: "Gata", prise: 150},
    {name: "Blinchik", prise: 300}
]

Array.prototype.fakeReduce = function(fn, acc) {
    for (let i=0; i<this.length; i++) {
        // console.log(acc)
        acc = fn(acc, this[i], i, this);
    }
    return acc;
}

const newReducedArr = arr.fakeReduce((total1, item1) => {
    return item1.prise + total1
}, 0)

console.log(newReducedArr)



Array.prototype.fakeMap = function(fn) {
    const newArr = []
    for(let i=0; i<this.length; i++) {
        newArr.push(fn(this[i], i, this));

    }
    return(newArr)
}

const newMapedArr = arr.fakeMap((pr, l, arr) => {
    console.log(pr, l, arr)
    return (pr)
})

console.log(newMapedArr)


Array.prototype.FakeForEach = function(fn) {
    for(let i=0; i<this.length; i++) {
        return(fn(this[i], i, this))
    }
}

let newForEachedArr = arr.FakeForEach((name) => {
    console.log(name.name)
})
