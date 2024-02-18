const Employee = require('../models/Employee');

const getAllEmployees = async () => {
  return await Employee.find();
};

const getEmployeeById = async (eid) => {
  return await Employee.findById(eid);
};

const createEmployee = async (employeeData) => {
  const employee = new Employee(employeeData);
  await employee.save();
  return employee;
};

const updateEmployeeById = async (eid, updateData) => {
  return await Employee.findByIdAndUpdate(eid, updateData, { new: true });
};

const deleteEmployeeById = async (eid) => {
  return await Employee.findByIdAndDelete(eid);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
