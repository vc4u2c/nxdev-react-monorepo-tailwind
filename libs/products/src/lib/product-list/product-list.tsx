import { Button } from '@/components/ui/button';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className="bg-blue-500 p-2 font-mono font-semibold text-center">
      <h2>Product List</h2>
      <Button>Show Products</Button>
    </div>
  );
}

export default ProductList;
