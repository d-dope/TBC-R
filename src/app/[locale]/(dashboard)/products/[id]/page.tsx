"use client"; // Mark this as a Client Component

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '../../../../../../api';
import SingleProductForm from '../../../../components/SingleProductForm';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  picture_url: string;
  sale: number;
  // Add other fields if necessary
}

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          console.log(`Fetching product with ID: ${id}`); // Debug log
          const data = await getProductById(id);
          console.log('Product data:', data); // Debug log

          const product = data.products.rows.find((item: Product) => item.id === parseInt(id));
          if (product) {
            setProduct(product);
          } else {
            setError('Product not found');
          }
          setLoading(false);
        } catch (err) {
          console.error('Error fetching product:', err); // Debug log
          setError('Failed to fetch product');
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return <SingleProductForm product={product} />;
};

export default ProductDetail;
