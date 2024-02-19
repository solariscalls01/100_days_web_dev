const job = {
    title: 'developer',
    location: 'new york',
    salary: 5000
}

// Using Blueprints in js. Very similar to OOP in python creating classes. Requires the constructor() method 
class Job {
    constructor(title, location, salary) {
        this.title = title
        this.location = location
        this.salary = salary
    }
    
    // adding our own methods to our classes or blueprints. Don't need to add the "function" reserved word when adding methods to a class method
    describe() {
        console.log(`I'm a ${this.title} and work at ${this.location} and earn ${this.salary}`)
    }


}

// After creating the class, you need to initialize it using the "new" keyword.
const developer = new Job("Developer", "NY", 50000)
const chef = new Job("chef", "LA", 25000)

console.log(developer)      // output: Job {title: "developer", location: "NY", salary: 50000}
console.log(chef)           // output: Job { title: 'chef', location: 'LA', salary: 25000 }

developer.describe()        // output: I'm at Developer and work at NY and earn 50000
chef.describe()             // output: I'm a chef and work at LA and earn 25000