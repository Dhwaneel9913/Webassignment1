const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  salary: { type: Number, required: true },
});

employeeSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
