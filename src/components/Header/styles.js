import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #ccc;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    div {
      display: flex;
      border-right: 1px solid #ccc;

      img {
        width: 45px;
      }

      h1 {
        color: #ee4d64;
        margin: 0 30px 0 12px;
      }
    }

    menu {
      margin-left: 20px;

      a {
        margin: 0 10px;
        text-decoration: none;
        color: #999;
        font-weight: bold;
        font-size: 15px;
      }

      .active {
        color: #444;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      color: #666;
    }

    button {
      color: #de3b3b;
      border: none;
      background: none;
      outline: none;
      margin-top: 4px;
    }
  }
`;
