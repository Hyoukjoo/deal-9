import db from "../db/db.js";

const createUser = async (name) => {
  const query = `/* SQL */
    INSERT INTO users (name) VALUES ('${name}');
  `;

  const result = await db.query(query);

  return result;
};

const findByName = async (name) => {
  const query = `/* SQL */
    SELECT * FROM users 
    WHERE name = '${name}'
    LIMIT 1;
  `;

  const result = await db.query(query);

  return result;
};

const createLocation = async (location) => {};

const removeLocation = async (location) => {};

const UserRepository = {
  createUser,
  findByName,
  createLocation,
  removeLocation,
};

export default UserRepository;
