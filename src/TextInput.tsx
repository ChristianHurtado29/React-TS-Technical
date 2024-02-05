import { Field } from "./ContentContainer";

const TextInput = ({ value, handleNameUpdate, name }: { name: string, value: Field, handleNameUpdate:(field: "first" | "last", newName: string) => void } ) => {
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