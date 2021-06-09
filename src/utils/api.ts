import { ProductType } from '../types/product';
// eslint-disable-next-line import/extensions
import fireDb from '../dataBase/firebase';

export const registerProduct = (product: ProductType): void => {
  fireDb.child('Products').push(product);
};
