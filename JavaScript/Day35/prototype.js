function Developer(name) {
    this.name = name;
}

Developer.prototype.introduce = function() {
    return "Hello, I am " + this.name;
};

const dev = new Developer("Fatima");

console.log(dev.introduce());