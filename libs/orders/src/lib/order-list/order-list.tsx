import { Button } from '@/components/ui/button';

/* eslint-disable-next-line */
export interface OrderListProps {}

export function OrderList(props: OrderListProps) {
  return (
    <div className="bg-green-500 p-2 font-mono font-semibold text-center">
      <h2>Order List</h2>
      <Button>Show Orders</Button>
    </div>
  );
}

export default OrderList;
