import { Field } from "./ContentContainer";

const TextInput = ({ value, handleNameUpdate, name }: { name: string, value: Field, handleNameUpdate:(field: "first" | "last", newName: string) => void } ) => {
  
  /*
  TODO: add debounce method to reduce number of calls on api for BONUS question.
  */
  return (
    <div className="field">
      {`${value}: `}
      <input
        value={name}
        onChange={(e) => handleNameUpdate(value, e.target.value)}
      />
    </div>
  );
};

export default TextInput