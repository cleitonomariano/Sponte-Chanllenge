/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
// import { Form } from '@unform/web';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { ProductType } from '../../types/product';
import * as api from '../../utils/api';

const initialProduct: ProductType = {
  title: '',
  width: null,
  height: null,
  length: null,
  barCode: null,
  weight: null,
  price: null,
  description: '',
};
function titleMaxLength(number: number, name: string, value: string): boolean {
  return name === 'title' && value.length > number;
}
const RegisterProduct: React.FC = () => {
  const [product, setProduct] = React.useState<ProductType>(initialProduct);
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      if (titleMaxLength(100, name, value)) return;
      setProduct({
        ...product,
        [name]: value,
      });
    },
    [product],
  );
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      api.registerProduct(product);
    },
    [product],
  );
  return (
    <Container>
      <h1>Register Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <img src="" alt="" />
        </div>
        <Input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          value={product.title}
        />
        <Input
          onChange={handleChange}
          name="width"
          type="number"
          placeholder="Width"
          value={String(product.width)}
        />
        <Input
          onChange={handleChange}
          name="height"
          type="number"
          placeholder="Height"
          value={String(product.height)}
        />
        <Input
          onChange={handleChange}
          name="length"
          type="number"
          placeholder="Length"
          value={String(product.length)}
        />
        <Input
          onChange={handleChange}
          name="barCode"
          type="number"
          placeholder="BarCode"
          value={String(product.barCode)}
        />
        <Input
          onChange={handleChange}
          name="weight"
          type="number"
          placeholder="Weight"
          value={String(product.weight)}
        />
        <Input
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Price:"
          value={String(product.price)}
        />
        <Input
          onChange={handleChange}
          type="text"
          name="description"
          placeholder=" Description"
          value={product.description}
        />
        <br />
        <Button className="cancelar" type="submit">
          Cancelar
        </Button>
        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
};

export default RegisterProduct;
