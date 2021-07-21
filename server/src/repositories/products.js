import db from "../db/db.js";

const createProduct = async ({
  userId,
  locationId,
  title,
  content,
  status,
  images,
  categories,
}) => {
  const query = `/* SQL */
    INSERT INTO products (user_id, location_id, title, content, status, thumbnail)
    VALUES ('${userId}', '${locationId}', '${title}', '${content}', '${status}', '${
    images[0]
  }');

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
  const query = categoryId
    ? `/* SQL */
      SELECT p.* FROM products as p
      JOIN ( 
        SELECT * FROM products_categories WHERE category_id = ${categoryId}
        ) as pc ON p.id = pc.product_id      
      WHERE location_id = ${locationId}
    `
    : `/* SQL */
      SELECT * FROM products
      WHERE location_id = ${locationId}
    `;
  const result = await db.query(query);
  return result[0];
};

const ProductRepository = {
  createProduct,
  getProducts,
};

export default ProductRepository;
