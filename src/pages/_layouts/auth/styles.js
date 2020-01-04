import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  max-height: 448px;
  height: 100%;
  max-width: 360px;
  width: 100%;

  text-align: center;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 50px;
  }

  h1 {
    margin-top: 12px;
    font-size: 30px;
    color: #ee4d64;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 20px 30px 50px 30px;

    strong {
      text-align: left;
      margin-bottom: 8px;
      margin-top: 10px;
    }

    input {
      width: 300px;
      height: 45px;
      padding: 13px 15px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: 0;
      background: #fff;
      font-size: 16px;
      transition: background 0.2s;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: red;
      align-self: flex-start;
      font-weight: bold;
      margin: 0 0 5px;
    }

    button {
      height: 45px;
      background: #ee4d64;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: 5px;

      strong {
        font-size: 16px;
      }

      &:hover {
        background: ${darken(0.06, "#ee4d64")};
      }
    }
  }
`;
