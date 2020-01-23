import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  min-width: 600px;
  width: 100%;
  margin: 0 auto;

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

    input,
    select {
      width: 100%;
      height: 45px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0 16px;
      font-size: 16px;
      margin-bottom: 20px;
      background: #fff;

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
