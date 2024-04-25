import { OrderList } from '@nxdev-react-monorepo-tailwind/orders';
import { SharedUi } from '@nxdev-react-monorepo-tailwind/shared-ui';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function App() {
  return (
    <div>
      <div className="bg-indigo-500 p-2 font-mono font-bold text-center">
        <h1>Inventory App: Hello, Tailwind!</h1>
      </div>
      <OrderList />
      <SharedUi />
      <Button>Show Inventory</Button>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
