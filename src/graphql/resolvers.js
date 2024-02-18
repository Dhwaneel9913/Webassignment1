const User = require('../models/User');
const Employee = require('../models/Employee');

const resolvers = {
  Query: {
    getAllEmployees: async () => {
      const employees = await Employee.find();
      return employees.map(employee => ({
        id: employee._id.toString(),
        ...employee._doc,
      }));
    },
    searchEmployeeById: async (_, { eid }) => {
      return await Employee.findById(eid);
    },
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      await user.save();
      return user;
    },
    login: async (_, { usernameOrEmail, password }) => {
      const user = await User.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        password,
      });
      return user;
    },
    addNewEmployee: async (_, employeeData) => {
      const employee = new Employee(employeeData);
      await employee.save();
      return {
        id: employee._id.toString(),
        ...employee._doc,
      };
    },
    updateEmployeeById: async (_, { eid, ...updateData }) => {
      return await Employee.findByIdAndUpdate(eid, updateData, { new: true });
    },
    deleteEmployeeById: async (_, { eid }) => {
      return await Employee.findByIdAndDelete(eid);
    },
  },
};

module.exports = resolvers;
