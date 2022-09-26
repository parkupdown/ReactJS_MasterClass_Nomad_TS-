import React, { FormEvent, useState } from "react";
import styled, { keyframes } from "styled-components";
export default function App() {
  const [value, setValue] = useState<string | number>("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.dir(e.currentTarget[0]); //변화를 일으키는놈 <여기에 들어감!>
  }; // 이벤트가 어디서왔지<어떤이벤트가 변화를일으키지>

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="usename"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
