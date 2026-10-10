function welcome(){
    console.log("Welcome " + this.name);
}

const user = {
    name: "Fatima"
};

let greet = welcome.bind(user);
greet();