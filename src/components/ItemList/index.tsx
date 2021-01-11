import React from 'react';

import {Container, CourseImage, CourseTitle, CourseQuantity} from './styles';

interface ItemListPros {
  image: string;
  title: string;
  quantity: string;
}

const ItemList: React.FC<ItemListPros> = ({image, quantity, title}) => {
  return (
    <Container>
      <CourseImage source={image} />
      <CourseTitle>{title}</CourseTitle>
      <CourseQuantity>{quantity}</CourseQuantity>
    </Container>
  );
};

export default ItemList;
