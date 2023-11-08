// Write your solution in this file!
const employee ={
    name: "nobody",
    streetAddress: "somewhere"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = { ...employee }
    updatedEmployee[key] = value
    //Object.assign(employee, { key: value})
    
    return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = { ...employee }
    delete updatedEmployee[key]
    //Object.assign(employee, { key: value})
    return updatedEmployee
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    //const updatedEmployee = { ...employee }
    delete employee[key]
    //Object.assign(employee, { key: value})
    return employee
}
