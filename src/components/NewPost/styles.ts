import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { styled } from "styled-components";

export const NewPostContainer = styled.div`
  position: relative;
  top: 0.5rem;

  background-color: ${(props) => props.theme["white"]};
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem 1rem;

  margin-bottom: 8rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  header {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;

    textarea {
      width: 100%;

      resize: none;
      overflow: hidden;
      overflow: -moz-hidden-unscrollable;
      background: ${(props) => props.theme["gray-100"]};
      padding: 0.875rem;
      height: 3rem;
      border: 0;
      line-height: 1.4;
      color: ${(props) => props.theme["gray-900"]};
      margin-top: 1rem;
      border-radius: 8px;
    }

    textarea::placeholder {
      font-weight: 500;
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  form {
    width: 100%;
    &:focus-within header button {
      visibility: visible;
      max-height: none;
    }
    header {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const Title = styled(DialogTitle)`
  color: ${(props) => props.theme["green-400"]};
`;

export const ModalOverlay = styled(DialogOverlay)`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;
  z-index: 60;
  backdrop-filter: blur(10px);
`;

export const ModalContent = styled(DialogContent)`
  background-color: white;
  border-radius: 8px;
  position: fixed;
  z-index: 70;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 60rem;
  max-height: 85vh;
  padding: 25px;

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid ${(props) => props.theme["gray-100"]};
    border-radius: 4px;
    padding: 1rem;
  }

  button:first-of-type {
    margin-right: 1rem;
  }

  .Editor {
    margin: 1rem 0;
    width: 100%;
    height: 20rem;
  }

  .xIcon {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      filter: opacity(0.4);
    }
  }

  .headerModal {
    display: flex;
    justify-content: space-between;
  }

  .PublishButton {
    padding: 0.875rem 1.25rem;
    font-weight: bold;
    background-color: ${(props) => props.theme["purple-500"]};
    color: ${(props) => props.theme["white"]};
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;

    &[type="submit"]:not(:disabled):hover {
      border: 0;
      filter: brightness(0.9);
      transition: all 0.3s;
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .Cancel {
    padding: 0.875rem 1.25rem;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["red-400"]};
    color: ${(props) => props.theme["red-400"]};
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme["red-400"]};
      color: white;
    }
  }
`;
