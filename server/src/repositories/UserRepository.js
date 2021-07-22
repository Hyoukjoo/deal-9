import db from "../db/db.js";

const create = async (username, location) => {
  const query = `/* SQL */
    INSERT INTO users (name, location) VALUES ('${username}', '${location}');
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

const findLocationByName = async (location) => {
  const query = `/* SQL */
    SELECT * FROM locations
    WHERE name = '${location}'
    LIMIT 1;
  `;

  const result = await db.query(query);

  return result;
};

const findLocationsOfUserByUserId = async (userId) => {
  const query = `/* SQL */
    SELECT * FROM users_locations
    WHERE user_id = '${userId}'
  `;

  const result = await db.query(query);

  return result;
};

const createLocation = async (userId, locationId) => {
  const query = `/* SQL */
    INSERT INTO users_locations (user_id, location_id) 
    VALUES ('${userId}', '${locationId}');
  `;

  const result = await db.query(query);

  return result;
};

const updateLocation = async (userId, location) => {
  const query = `/* SQL */
   UPDATE users 
   SET location = '${location}' 
   WHERE id = '${userId}';
`;

  const result = await db.query(query);

  return result;
};

const removeLocation = async (location) => {};

const UserRepository = {
  create,
  findByName,
  findLocationByName,
  findLocationsOfUserByUserId,
  createLocation,
  updateLocation,
  removeLocation,
};

export default UserRepository;
