import { ProductList } from "@nxdev-react-monorepo-tailwind/products";
import { SharedUi } from "@nxdev-react-monorepo-tailwind/shared-ui";

export function App() {
  return (
    <div>
      <div className="bg-indigo-500 p-2 font-mono font-bold text-center">
        <h1>Store App: Hello, Tailwind!</h1>
      </div>
      <ProductList />
      <SharedUi />
    </div>
  );
}

export default App;
