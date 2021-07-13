import db from "./db.js";

const createTables = async () => {
  const createUsersTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT,
      name VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    )    
  `;

  const createLocationsTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS locations (
      id INT AUTO_INCREMENT,
      name VARCHAR(255),
      PRIMARY KEY (id)
    )    
  `;

  const createProductsTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT,
      user_id INT NOT NULL,
      location_id INT NOT NULL,
      title VARCHAR(255),
      description VARCHAR(255),
      status VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      FOREIGN KEY (location_id) REFERENCES locations (id),
      FOREIGN KEY (user_id) REFERENCES users (id)
    )    
  `;

  const createCategoriesTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT,
      name VARCHAR(255),
      PRIMARY KEY (id)
    )    
  `;

  const createProductsCategoriesTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS products_categories (
      id INT AUTO_INCREMENT,
      category_id INT NOT NULL,
      product_id INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (category_id) REFERENCES categories (id),
      FOREIGN KEY (product_id) REFERENCES products (id)
    )    
  `;

  const createFavoritesTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS favorites (
      id INT AUTO_INCREMENT,
      user_id INT NOT NULL,
      product_id INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (product_id) REFERENCES products (id)
    )    
  `;

  const createProductImagesTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS product_images (
      id INT AUTO_INCREMENT,
      src VARCHAR(255),
      product_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      FOREIGN KEY (product_id) REFERENCES products (id)
    )    
  `;

  const createUsersLocationsTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS users_locations (
      id INT AUTO_INCREMENT,
      user_id INT NOT NULL,
      location_id INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (location_id) REFERENCES locations (id)
    )    
  `;

  const createChatRoomsTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS chat_rooms (
      id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      owner_id INT NOT NULL,
      buyer_id INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (product_id) REFERENCES products (id),
      FOREIGN KEY (owner_id) REFERENCES users (id),
      FOREIGN KEY (buyer_id) REFERENCES users (id)
    )    
  `;

  const createChatsTable = `/* SQL */
    CREATE TABLE IF NOT EXISTS chats (
      id INT AUTO_INCREMENT,
      message VARCHAR(255),
      is_read BOOLEAN,
      user_id INT NOT NULL,
      chat_room_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (chat_room_id) REFERENCES chat_rooms (id)
    )    
  `;

  await Promise.all(
    [
      createUsersTable,
      createLocationsTable,
      createProductsTable,
      createCategoriesTable,
      createProductsCategoriesTable,
      createFavoritesTable,
      createProductImagesTable,
      createUsersLocationsTable,
      createChatRoomsTable,
      createChatsTable,
    ].map((query) => db.query(query))
  );
};

export default createTables;
