const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, salary, title, manager, employee){
        super(name, salary, title, manager, employee)
        this.employees = []
    }
    addEmployee(employee){
        this.employees.push(employee)
        return
    }
    _totalSubSalary(){
    let sum = 0
    this.employees.forEach((employee) => {
            if(employee instanceof Manager){
                sum += employee.salary + employee._totalSubSalary()
            }
            else{
                sum += employee.salary
            }

    })
    return sum
 }
calculateBonus( multiplier){
    return multiplier *( this._totalSubSalary(this) + this.salary)
}

}


const splinter = new Manager('Splinter', 100000, 'Sensai');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// splinter.addEmployee(leo);
// splinter.addEmployee(mikey);
// splinter.addEmployee(donnie);
// splinter.addEmployee(raph);

console.log('After: ', splinter);


module.exports = Manager;
