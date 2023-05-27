function hello() {
    return "Hello world"
}

function print(name, callback) {
    return name + callback()
}

const x = print("Deo", hello)
console.log(x)