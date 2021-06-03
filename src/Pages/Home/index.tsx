import React from 'react';
import Container from '../../Components/Container';

const Home: React.FC = () => (
  <>
    <Container>
      <h1>Home</h1>
      <table>
        <th>
          <td>Image</td>
          <td>Title</td>
          <td>BarCode</td>
          <td>Weight</td>
          <td>Value</td>
        </th>
      </table>
    </Container>
  </>
);

export default Home;
