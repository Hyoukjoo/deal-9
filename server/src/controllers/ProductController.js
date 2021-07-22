import ProductRepository from "../repositories/products.js";

const getProducts = async (req, res) => {
  try {
    const { locationId, categoryId } = req.query;
    const proudcts = await ProductRepository.getProducts({
      locationId,
      categoryId,
    });
    res.status(200).send(proudcts);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "서버 에러!" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { userId, locationId, title, content, status, images, categories } =
      req.body;
    await ProductRepository.createProduct({
      userId,
      locationId,
      title,
      content,
      status,
      images,
      categories,
    });

    res.status(204).send();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "서버 에러!" });
  }
};

const ProductController = {
  getProducts,
  createProduct,
};

export default ProductController;
