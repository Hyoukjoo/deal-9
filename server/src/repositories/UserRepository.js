import db from "../db/db.js";

const create = (username, location) => {
  const query = `/* SQL */
    INSERT INTO users (name, location) VALUES ('${username}', '${location}');
  `;

  const result = db.query(query);

  return result;
};

const findUserById = (userId) => {
  const query = `/* SQL */
    SELECT * FROM users 
    WHERE id = '${userId}'
  `;

  const result = db.query(query);

  return result;
};

const findUserByName = (name) => {
  const query = `/* SQL */
    SELECT * FROM users 
    WHERE name = '${name}'
    LIMIT 1;
  `;

  const result = db.query(query);

  return result;
};

const findLocationById = (locationId) => {
  const query = `/* SQL */
    SELECT * FROM locations
    WHERE id = '${locationId}'
    LIMIT 1;
  `;

  const result = db.query(query);

  return result;
};

const findLocationByName = (location) => {
  const query = `/* SQL */
    SELECT * FROM locations
    WHERE name = '${location}'
    LIMIT 1;
  `;

  const result = db.query(query);

  return result;
};

const findLocationsOfUserByUserId = (userId) => {
  const query = `/* SQL */
    SELECT * FROM users_locations
    WHERE user_id = '${userId}'
  `;

  const result = db.query(query);

  return result;
};

const createLocation = (location) => {
  const query = `/* SQL */
    INSERT INTO locations (name) 
    VALUES ('${location}');
  `;

  const result = db.query(query);

  return result;
};

const addLocation = (userId, locationId) => {
  const query = `/* SQL */
    INSERT INTO users_locations (user_id, location_id) 
    VALUES ('${userId}', '${locationId}');
  `;

  const result = db.query(query);

  return result;
};

const updateUserLocation = (userId, location) => {
  const query = `/* SQL */
    UPDATE users 
    SET location = '${location}' 
    WHERE id = '${userId}';
  `;

  const result = db.query(query);

  return result;
};

const removeLocation = (userId, locationId) => {
  const query = `/* SQL */
    DELETE FROM users_locations 
    WHERE user_id = '${userId}'
    AND location_id = '${locationId}'
  `;

  const result = db.query(query);

  return result;
};

const UserRepository = {
  create,
  findUserById,
  findUserByName,
  findLocationById,
  findLocationByName,
  findLocationsOfUserByUserId,
  createLocation,
  addLocation,
  updateUserLocation,
  removeLocation,
};

export default UserRepository;
