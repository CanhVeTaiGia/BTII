import { NextResponse } from 'next/server';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const minPrice = parseFloat(url.searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(url.searchParams.get('maxPrice') || '1000');

  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products: Product[] = await res.json();
    
    const filteredProducts = products.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );

    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error('Error fetching products', error);
    return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
  }
}
