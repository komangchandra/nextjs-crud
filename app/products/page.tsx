import { PrismaClient } from "@prisma/client";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";
import Navbar from "../navbar";
const prisma = new PrismaClient();

const getProducts = async () => {
  const response = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      categoryId: true,
      category: true,
    },
  });
  return response;
};

const getCategories = async () => {
  const response = await prisma.category.findMany();
  return response;
};

const Product = async () => {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <>
      <Navbar />
      <div className="container w-9/12 mt-10 mx-auto">
        <div className="mb-2 ">
          <AddProduct categories={categories} />
        </div>
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>Rp {Number(product.price).toLocaleString()}</td>
                <td>{product.category.name}</td>
                <td className="flex justify-center gap-2">
                  <UpdateProduct categories={categories} product={product} />
                  <DeleteProduct product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
