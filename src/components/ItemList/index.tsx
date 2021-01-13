import React from 'react';

import {
  Container,
  ContainerImage,
  CourseImage,
  CourseTitle,
  CourseQuantity,
} from './styles';

interface ItemListPros {
  image: string;
  title: string;
  quantity: string;
}

const ItemList: React.FC<ItemListPros> = ({
  image,
  quantity,
  title,
  children,
}) => {
  return (
    <Container activeOpacity={0.6}>
      <ContainerImage>
        <CourseImage source={image} />
        {children}
      </ContainerImage>
      <CourseTitle>{title}</CourseTitle>
      <CourseQuantity>{quantity}</CourseQuantity>
    </Container>
  );
};

export default ItemList;
