import db from "../db/db.js";

const createProduct = async ({
  userId,
  locationId,
  title,
  content,
  status,
  images,
  categories,
  price,
}) => {
  categories = Array.isArray(categories) ? categories : [categories];

  const query = `/* SQL */
    INSERT INTO products (user_id, location_id, title, content, status, thumbnail, price)
    VALUES ('${userId}', '${locationId}', '${title}', '${content}', '${status}', '${
    images[0]
  }', '${price}');

    SET @inserted_proudct_id = LAST_INSERT_ID();

    INSERT INTO product_images (product_id, src) 
    VALUES ${images
      .map((src) => `(@inserted_proudct_id, '${src}')`)
      .join(", ")};

    INSERT INTO products_categories (product_id, category_id) 
    VALUES ${categories
      .map((categoryId) => `(@inserted_proudct_id, '${categoryId}')`)
      .join(", ")};
  `;

  const result = await db.query(query);
  return result;
};

const getProducts = async ({ locationId, categoryId }) => {
  // TODO: WHERE location_id = ${locationId} 추가

  const query = categoryId
    ? `/* SQL */
      SELECT p.* FROM products as p
      JOIN ( 
        SELECT * FROM products_categories WHERE category_id = ${categoryId}
        ) as pc ON p.id = pc.product_id            
    `
    : `/* SQL */
      SELECT * FROM products      
    `;
  const result = await db.query(query);
  return result[0];
};

const getProduct = async (id) => {
  const query = `/* SQL */
      SELECT p.*, u.name username, l.name location FROM products p
      JOIN users u ON u.id = p.user_id
      JOIN locations l on l.id = p.location_id
      WHERE p.id = ${id}
    `;
  const result = await db.query(query);
  if (result[0].length) {
    return result[0][0];
  }
  return null;
};

const getProductCategories = async (productId) => {
  const query = `/* SQL */
      SELECT c.* FROM categories c
      JOIN (SELECT * FROM products_categories WHERE product_id = ${productId}) pc
      ON c.id = pc.category_id;
    `;
  const result = await db.query(query);
  return result[0];
};

const ProductRepository = {
  createProduct,
  getProducts,
  getProduct,
  getProductCategories,
};

export default ProductRepository;
