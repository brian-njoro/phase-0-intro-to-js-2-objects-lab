
const employee = {
    name: `Brian`,
    streetAddress: `2622 sukari`
}

// update employee without changing original
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee}
    newEmployee [key] = value
    return newEmployee
}

// destructively change employee details
function destructivelyUpdateEmployeeWithKeyAndValue () {
    return employee.name = `sam` , employee.streetAddress = `12 Broadway`
}

// delete employee details without changing original
function deleteFromEmployeeByKey(employee, key) {
    const anotherEmployee = {...employee} 
    delete anotherEmployee.key
     return anotherEmployee
}

// destructively delete employee details
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    return delete employee.key
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, `name`))
console.log(employee)


