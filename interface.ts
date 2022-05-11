var Employee = /** @class */ (function () {
    function Employee(salary) {
        var _this = this;
        this.getPerson = function (name, age) {
            _this.name = name;
            _this.age = age;
            return "Employee Name is: " + name + ', age is: ' + age + ' and salary is: ' + _this.salary;
        };
        this.salary = salary;
    }
    return Employee;
}());
var ep1 = new Employee(55000);
console.log(ep1.getPerson('Mallika', 21));
var ep2 = new Employee(76000);
console.log(ep2.getPerson('Bhosale', 23));
