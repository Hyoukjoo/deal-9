import db from "./db.js";

const insertUser = async (name) => {
  const query = `/* SQL */
    INSERT INTO users (name) VALUES ('${name}');
  `;
  return await db.query(query);
};

const selectUser = async (name) => {
  const query = `/* SQL */
    SELECT * FROM users 
    WHERE name = '${name}'
    LIMIT 1;
  `;

  const result = await db.query(query);
  return result[0][0] || null;
};

export { insertUser, selectUser };
