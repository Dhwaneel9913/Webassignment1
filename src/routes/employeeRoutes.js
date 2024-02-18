const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/employees', async (req, res) => {
  const employees = await employeeController.getAllEmployees();
  res.json(employees);
});

router.get('/employees/:eid', async (req, res) => {
  const employee = await employeeController.getEmployeeById(req.params.eid);
  res.json(employee);
});

router.post('/employees', async (req, res) => {
  const newEmployee = await employeeController.createEmployee(req.body);
  res.json(newEmployee);
});

router.put('/employees/:eid', async (req, res) => {
  const updatedEmployee = await employeeController.updateEmployeeById(
    req.params.eid,
    req.body
  );
  res.json(updatedEmployee);
});

router.delete('/employees/:eid', async (req, res) => {
  const deletedEmployee = await employeeController.deleteEmployeeById(
    req.params.eid
  );
  res.json(deletedEmployee);
});

module.exports = router;
