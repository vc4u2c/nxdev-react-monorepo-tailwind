import { Button } from './components/ui/button';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <>
      <div className="bg-red-500 p-2 font-mono font-semibold text-center">
        <h2>Shared UI</h2>
      </div>
      <Button>Show UI</Button>
    </>
  );
}

export default SharedUi;
