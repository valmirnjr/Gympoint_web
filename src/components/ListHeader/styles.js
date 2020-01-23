import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  font-size: 24px;

  aside {
    display: flex;
    height: 36px;

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #ee4d64;
      color: #fff;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 0 16px;
      width: 142px;
      font-size: 14px;

      &:hover {
        background: ${darken(0.06, "#ee4d64")};
      }
    }

    input {
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 100%;
      padding: 0 16px;
      background-image: ${props => `url(${props.icon})`};
    }
  }
`;
