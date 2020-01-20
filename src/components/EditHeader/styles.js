import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 24px;

  aside {
    display: flex;
    height: 36px;

    button {
      display: inline-flex;
      align-items: center;
      border: none;
      outline: none;
      background: #ddd;
      color: #fff;
      border-radius: 4px;
      padding: 0px 16px;
      width: 112px;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background: ${darken(0.06, "#ddd")};
      }

      &:last-child {
        background: #ee4d64;
        margin-left: 16px;

        &:hover {
          background: ${darken(0.12, "#ee4d64")};
        }
      }
    }
  }
`;
