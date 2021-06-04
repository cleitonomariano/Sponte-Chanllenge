/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Button from '../../Components/Button';
import Container from '../../Components/Container';
import Input from '../../Components/Input';

type ProductType = {
  Title: string;
  Width: number | null;
  Height: number | null;
  Length: number | null;
  BarCode: number | null;
  Weight: number | null;
  Price: number | null;
  Description: string;
};
const initialProduct: ProductType = {
  Title: '',
  Width: null,
  Height: null,
  Length: null,
  BarCode: null,
  Weight: null,
  Price: null,
  Description: '',
};
function titleMaxLength(number: number, name: string, value: string): boolean {
  return name === 'Title' && value.length > number;
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
    },
    [],
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
          name="Title"
          type="text"
          placeholder="Title"
          value={product.Title}
        />
        <Input
          onChange={handleChange}
          name="Width"
          type="number"
          placeholder="Width"
          value={String(product.Width)}
        />
        <Input
          onChange={handleChange}
          name="Height"
          type="number"
          placeholder="Height"
          value={String(product.Height)}
        />
        <Input
          onChange={handleChange}
          name="Length"
          type="number"
          placeholder="Length"
          value={String(product.Length)}
        />
        <Input
          onChange={handleChange}
          name="BarCode"
          type="number"
          placeholder="BarCode"
          value={String(product.BarCode)}
        />
        <Input
          onChange={handleChange}
          name="Weight"
          type="number"
          placeholder="Weight"
          value={String(product.Weight)}
        />
        <Input
          onChange={handleChange}
          name="Price"
          type="number"
          placeholder="Price:"
          value={String(product.Price)}
        />
        <textarea
          name="Description"
          placeholder=" Description"
          value={product.Description}
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
