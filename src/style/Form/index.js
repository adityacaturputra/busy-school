import styled from 'styled-components';
import theme from '../../config/theme';

const Form = styled.div`
  ::before {
    display: block;
    content: "Tambah Mata Kuliah";
    padding: 0 0 36px 0;
    font-size: 24px;
    font-weight: 500;
    color: ${theme.color.black_70};
    text-align: center;
  }
  height: 100%;
  overflow-y: auto;
  label {
    font-size: 18px;
    font-weight: 500;
    color: ${theme.color.black_100};
    margin-bottom: 8px;
    display: block;
  }
  input[type="text"] {
    width: 256px;
    padding: 4px;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.color.black_70};
    border: none;
    border-bottom: 2px solid ${theme.color.black_30};
    :focus {
    outline: none;
    border-bottom: 2px solid ${theme.color.black_100};
    }
  }
  input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
  }
  label.day {
    cursor: pointer;
    display: inline-block;
    background-color: #fff;
    font-weight: 400;
    padding: 6px 12px;
    margin: 2px;
    font-size: 16px; 
    color: ${theme.color.black_70};
    border: 2px solid ${theme.color.black_10};
  }
  input[type="radio"]:checked + label {
    border-color: ${theme.color.black_50};
  }
  label:hover {
  background-color: ${theme.color.black_10};
  }
  input[type="time"] {
      color: ${theme.color.black_70};
      font-weight: 500;
      padding: 4px;
      margin-bottom: 24px;
      border: none;
      outline: none;
    border: 2px solid ${theme.color.black_30};
  }
  button {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      color: ${theme.color.black_100};
      margin-top: 36px;
      padding: 12px 24px;
    background-color: ${theme.color.black_10};
    outline: none;
    border: 2px solid ${theme.color.black_50};
    &:hover {
        background-color: ${theme.color.black_30};
    }
    &:active {
        background-color: ${theme.color.black_50};
    }
  }
`;

export default Form;
