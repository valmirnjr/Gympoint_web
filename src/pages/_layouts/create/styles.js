import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1000px;
  min-width: 600px;
  width: 100%;
  margin: 0 auto;

  header {
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
  }

  main {
    background: #fff;
    border-radius: 4px;
    padding: 30px;

    strong {
      color: #444;
      font-size: 14px;
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      height: 45px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0 16px;
      font-size: 16px;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0px;
      }
    }

    div {
      display: inline-flex;
      width: 100%;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        margin: 0 8px;

        &:first-child {
          margin-left: 0px;
        }

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
`;
