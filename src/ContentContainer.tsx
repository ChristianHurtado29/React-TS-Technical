import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";
import { useMemo } from "react";

export type Field = "first" | "last"


const ContentContainer = ({name, handleNameUpdate}: { name: Name, handleNameUpdate:(field: Field , newName: string) => void }) => {
  /*
    const numOfFactors =() => {
    // This takes a long time to run
    return primeFactorize().length
  }
  */
 /* the function numOfFactors() was causing performance issues everytime users would type in the input box, the reason
    being that numOfFactors was invoked and being called on every time the ContentContainer component was rerendered. For this
    fix I decided that the useMemo React hook was most appropriate so we could call this function once upon mounting.
    This was achieved by setting the dependency array to empty and therefore storing the value of the function just once and not after every rerender.
 */
  const numOfFactors = useMemo(() => {
    return primeFactorize().length;
  },[]) 

  return (
    <div className="container">
      <h5>{`Important Number: ${numOfFactors}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
