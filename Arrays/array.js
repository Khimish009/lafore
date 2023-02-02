class HighArray {
    array
    length = 0

    constructor(size) {
        this.array = new Array(size)
    }

    insert(value) {
        this.array[this.length] = value
        this.length++
    }

    find(searchKey) {
        for(let i = 0; i < this.length; i++) {
            if (this.array[i] === searchKey) {
                return true
            }
        }
        return false
    }

    delete(searchKey) {
        let i

        for(i = 0; i < this.length; i++) {
            if(this.array[i] === searchKey) {
                break;
            }
        }

        if(i === this.length) return false

        for(let j = i; j < this.length; j++) {
            this.array[j] = this.array[j + 1]
        }
        this.length--
        return true
    }

    removeMax() {
        if(this.length === 0) return -1

        let maxValue = this.array[0]

        for(let i = 1; i < this.length; i++) {
            if(this.array[i] > maxValue) {
                maxValue = this.array[i]
            }
        }

        this.delete(maxValue)
        return maxValue
    }

    display() {
        console.log(this.array)
    }

    getLength() {
        return this.length
    }
}

const arr = new HighArray(100)

arr.insert(1)
arr.insert(2)
arr.insert(3)
arr.insert(4)
arr.insert(5)
arr.insert(6)
arr.insert(99)
arr.insert(7)
arr.insert(8)
arr.insert(9)

if (arr.find(7)) {
    console.log('Find elem');
} else {
    console.log("Can't elem");
}

console.log(arr.delete(5));

arr.display()
console.log(arr.removeMax());
arr.display()
console.log(arr.getLength());
