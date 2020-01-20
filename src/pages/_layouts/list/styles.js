import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1000px;
  min-width: 600px;
  width: 100%;
  margin: 0 auto;

  main {
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
  }

  table {
    background: #fff;
    width: 100%;
    padding: 30px 30px;
    border-radius: 4px;
    font-size: 16px;
    text-align: left;

    thead th {
      color: #444;
      padding-bottom: 4px;
    }

    tbody tr:last-child td {
      border-bottom: 0;
      padding-bottom: 0;
    }

    tbody td {
      color: #666;
      font-weight: normal;
      line-height: 20px;
      padding: 16px 0;
      text-decoration: none;
      font-size: 15px;
      border-bottom: 1px solid #eee;
    }

    &:last-child {
      text-align: right;
    }

    a {
      color: #4d85ee;
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: #de3b3b;

      margin-left: 23px;
    }

    .left {
      text-align: left;
    }

    .center {
      text-align: center;
    }
  }
`;

export const PlansTable = styled.table`
  background: #fff;
  width: 100%;
  padding: 30px 30px;
  border-radius: 4px;
  font-size: 16px;
  text-align: left;

  thead th {
    color: #444;
    padding-bottom: 4px;
  }

  tbody tr:last-child td {
    border-bottom: 0;
    padding-bottom: 0;
  }

  tbody td {
    color: #666;
    font-weight: normal;
    line-height: 20px;
    padding: 16px 0;
    text-decoration: none;
    font-size: 15px;
    border-bottom: 1px solid #eee;

    &.duration {
      text-align: center;
    }

    &.price {
      text-align: center;
    }

    &:last-child {
      text-align: right;
    }

    a {
      color: #4d85ee;
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: #de3b3b;

      margin-left: 23px;
    }
  }

  #title {
    width: 40%;
  }

  #duration {
    text-align: center;
    width: 25%;
  }

  #price {
    text-align: center;
  }
`;
