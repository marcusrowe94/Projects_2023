
class Employee{
    constructor(name, salary, title, manager = null){
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        if(manager !== null){
            manager.addEmployee(this)
        }
    }
    calculateBonus(multiplier){
        return this.salary * multiplier
    }


}
const newEmployee = new Employee('Krystal', 200000, "Engineer")
console.log(newEmployee)
module.exports = Employee;
