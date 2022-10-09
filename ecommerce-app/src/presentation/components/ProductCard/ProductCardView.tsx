import React from "react";
import { Card, Button, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { TProduct } from "../../../domain/entities";
import { styled } from "./ProductCardStyled";

const { Meta } = Card;

type Props = {
  product: TProduct,
  onPressProduct: (product: TProduct) => void,
  onAddToCart: (product: TProduct) => void,
};
const ProductView: React.FC<Props> = ({ product, onPressProduct, onAddToCart }) => {
  return (
    <>
      <Card
        hoverable
        style={styled.card}
        cover={<img alt={product.name} src={product.image} />}
        onClick={() => onPressProduct(product)}
      >
        <Meta
          title={product.name}
          description={
            <div>
              <Rate value={product.rate} disabled />
              <h3>R$ {product.price.toFixed(2).replace(".", ",")}</h3>
              <p>em {product.maxParcels}x no cartão de crédito</p>
            </div>
          }
        />
        <Button
          onClick={(e) => {
            onAddToCart(product);
            e.stopPropagation();
          }}
          style={styled.button}
          block
          icon={<ShoppingCartOutlined />}
        >
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  );
};

export default ProductView;