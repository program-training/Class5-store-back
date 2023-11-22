import {
  getProductByIdFromJsonFile,
  getProductsFromJsonFile,
} from "../dal/productsDal";
import chalk from "chalk";
import ProductInterface from "../interfaces/ProductInterface";

export const getProducts = async () => {
  try {
    const products = await getProductsFromJsonFile();
    return products;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getProductById = async (productId: string) => {
  try {
    const getProductFromMDB = await getProductByIdFromJsonFile(productId);
    console.log(getProductFromMDB);
    return getProductFromMDB;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

type OrderFromClient = {
  productId: string;
  requiredQuantity: number
}
export const getProductsInStock = async (arr: OrderFromClient[]) => {
  try {
    const products = await getProductsFromJsonFile() as ProductInterface[];
    const productsExist = products.filter((product) => {
      return arr.some((order) => {
        if (order.productId === product.id && product.quantity - order.requiredQuantity >= 0) {
          return true
        }
        return false;
      });
    })
    if (arr.length !== productsExist.length) throw new Error("some product is out of stock")
    return productsExist
  } catch (error) {
    return Promise.reject(error); 
  }
} 


// export const decreaseProduct = async (
//   productId: string,
//   quantityToSubtract: number
// ) => {
//   try {
//     if (!productId) {
//       throw new Error("Invalid productId");
//     }
//     const productDetailsResponse = await fetch(`/api/products/${productId}`);

//     if (!productDetailsResponse.ok) {
//       throw new Error("Failed to fetch product details");
//     }

//     const productData = await productDetailsResponse.json();

//     let currentStockQuantity = productData.quantityInStock;
//     currentStockQuantity -= quantityToSubtract;

//     const updateStockResponse = await fetch(
//       `/api/products/${productId}/stock`,
//       {
//         method: "PUT",
//         // headers: {
//         //   "Content-Type": "application/json",
//         // },
//         // body: JSON.stringify({ quantityInStock: currentStockQuantity }),
//       }
//     );

//     if (!updateStockResponse.ok) {
//       throw new Error("Failed to update product stock");
//     }

//     return true;
//   } catch (error) {
//     console.error("Error decreasing product stock quantity:", error);
//     return Promise.reject(error);
//   }
// };
