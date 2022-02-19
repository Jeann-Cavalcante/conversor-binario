import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #cecece;
  }

  input {
    outline: none;
    height: 50px;
    width: 350px;
    border: solid 1px #cecece;
    border-radius: 10px;

    &:focus {
      border: solid 3px #fbff4f;
    }
  }

  textarea {
    margin-top: 30px;
    width: 350px;
    height: 100px;
    cursor: not-allowed;

    &:focus {
      cursor: not-allowed;
      outline: none;
      border: solid 3px #fbff4f;
    }
  }
`;
