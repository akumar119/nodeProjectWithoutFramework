import { findAll, findById } from '../Model/studentModel';

// @desc Get all students
// @api- /studentList
export const getStudentList = async (req, res) => {
  const students = await findAll();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(students));
};

// @desc Get student by id
// @api- /student/id
export const getStudent = async (req, res, id) => {
  const student = await findById(id);
  if (!student) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Data not found' }));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(student));
  }
};
