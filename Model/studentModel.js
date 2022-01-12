import students from '../data/StudentJson.json';

export const findAll = () => {
  const data = students;
  return new Promise((resolve) => {
    resolve(data);
  });
};

export const findById = (id) => {
  // eslint-disable-next-line eqeqeq
  const data = students.find((elem) => elem.ID == id);
  return new Promise((resolve) => {
    resolve(data);
  });
};
