import { FormEvent, useState } from "react";

export default function StateRecap() {
  const [value, setValue] = useState<string | number>("");

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  console.log(value);
  return (
    <div>
      <form>
        <input onChange={onChange} type="text" placeholder="이름" />
      </form>
      <h1>{value === "" ? "비어있습니다" : value}</h1>
    </div>
  );
}
