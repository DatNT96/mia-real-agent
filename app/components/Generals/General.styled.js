
import styled, { css } from 'styled-components';

export const DefaultButton = styled.button`
  color: ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.primaryColor};
  text-align: center;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 6px 12px;
  font-size: 14px;
  min-width: 70px;
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }
  ${({ submit }) => submit && css`
    background-color:  ${props => props.theme.submitColor};
  `};
  ${({ cancel }) => cancel && css`
    background-color:  ${props => props.theme.cancelColor};
  `};
  ${({ error }) => error && css`
    background-color:  ${props => props.theme.errorColor};
  `};
`;

export const Return = styled.div`
  cursor: pointer;
  i {
    margin-right: 10px;
    @media (max-width: 840px) {
      margin-right: 0px;
    }
  }
`;

export const PopupOverlayStyled = styled.div`
  content: '';
  width: 100vw;
  height: 100vh;
  background: transparent;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  ${({ isOverlay }) => isOverlay
    && css`
      background: ${props => props.theme.secondaryColor};
      opacity: 0.5;
      z-index: 4;
    `};
`;

export const IconStyled = styled.i`
  ${({ close }) => close
    && css`
      border-radius: 100%;
      border: 1px solid ${props => props.theme.iconCloseColor};
      font-size: 14px;
      color: ${props => props.theme.iconCloseColor};
      margin: 0px 2px;
      &:hover {
        border-color: ${props => props.theme.iconCloseHoverColor};
        color: ${props => props.theme.iconCloseHoverColor};
      }
    `};
  ${({ add }) => add
    && css`
      border-radius: 100%;
      border: 1px solid ${props => props.theme.iconAddColor};
      font-size: 14px;
      color: ${props => props.theme.iconAddColor};
      margin: 0px 2px;
      &:hover {
        border-color: ${props => props.theme.iconAddHoverColor};
        color: ${props => props.theme.iconAddHoverColor};
      }
    `};
  ${({ more }) => more
    && css`
      border-radius: 100%;
      border: 1px solid ${props => props.theme.iconMoreColor};
      font-size: 14px;
      color: ${props => props.theme.iconMoreColor};
      margin: 0px 2px;
      &:hover {
        border-color: ${props => props.theme.iconMoreHoverColor};
        color: ${props => props.theme.iconMoreHoverColor};
      }
    `};

  ${({ active }) => active
    && css`
      color: ${props => props.theme.submitColor} !important;
    `};
  ${({ shipping }) => shipping
    && css`
      font-size: 60px;
      margin-left: 15px;
    `};
`;

export const RadioButtonToggle = styled.div`
  input[type='checkbox'] {
    &.toggle {
      display: inline-block;
      appearance: none;
      width: 44px;
      height: 22px;
      background-color: ${props => props.theme.secondaryColor};
      position: relative;
      border-radius: 30px;
      box-shadow: none;
      transition: all 300ms ease-in-out;
      &:hover:after {
        background-color: ${props => props.theme.secondaryColor};
      }
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 18px;
        height: 18px;
        background-color: ${props => props.theme.secondaryColor};
        top: 2px;
        left: 2px;
        border-radius: 50%;
        transition: all 300ms ease-in-out;
      }
    }
    &:checked.toggle {
      box-shadow: inset 0 0 0 15px ${props => props.theme.submitColor};
      &:after {
        left: 23px;
        background-color: ${props => props.theme.secondaryColor};
      }
    }
  }
`;

export const HeaderTitleWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.secondaryColor};
  min-height: 21.43px;
  background-color: ${props => props.theme.secondaryColor};
  color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-family: 'Proxima Nova Light';
`;

export const ActionModalWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-top: 1px solid ${props => props.theme.secondaryColor};
`;

export const ActionGroupWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 200px;
  padding: 15px;
  box-shadow: 0 -4px 5px -3px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.secondaryColor};
  width: 100%;
  z-index: 1;
  border-top: 1px solid ${props => props.theme.secondaryColor};
  height: 65px;
  max-height: 65px;
  @media (max-width: 1280px) {
    left: 50px;
  }
`;

export const SubmitButtonStyled = styled.button`
  color: ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.submitColor};
  text-align: center;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 6px 12px;
  font-size: 14px;
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const CancelButtonStyled = styled.button`
  text-align: center;
  border: 1px solid ${props => props.theme.secondaryColor};
  border-radius: 3px;
  padding: 6px 12px;
  margin-left: 10px;
  font-size: 14px;
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorMessageStyled = styled.div`
  color: ${props => props.theme.errorColor};
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  & > button {
    cursor: pointer;
    max-width: 200px;
    background-color: #556080;
    color: ${props => props.theme.secondaryColor};
    border: ${props => props.theme.secondaryColor};
    margin: 0px 5px;
    font-weight: 600;
    &:hover {
      outline: 0;
      box-shadow: none;
      background-color: transparent;
      border: 1px solid #556080;
      color: #2f353a;
    }
    & > i {
      margin-right: 4px;
    }
  }
`;

export const RibbonStatusWrapper = styled.div`
  position: absolute !important;
  top: -5px;
  left: -5px;
  overflow: hidden;
  width: 96px;
  height: 94px;
  border-bottom-right-radius: 92px;
`;

export const TimeSelectWrapper = styled.div`
  position: relative;
  font-size: 15px;
`;

export const TimeSelectTitleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  i {
    margin-left: 3px;
    font-size: 18px;
  }
`;

export const CustomDateWrapper = styled.div`
  padding: 5px;
`;

export const TimeSelectItemsWrapper = styled.div`
  width: 258px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
`;

export const ItemsAndDateWrapper = styled.div`
  position: relative;
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
`;

export const ConfirmModalWrapper = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  border-radius: 7px;
  border: 1px solid ${props => props.theme.secondaryColor};
  box-shadow: 0 3px 9px #00000080;
  position: fixed;
  top: 50px;
  left: calc(50% - 200px);
  width: 460px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  z-index: 5;
`;

export const HistoryWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.secondaryColor};
  border-bottom: 1px solid ${props => props.theme.secondaryColor};
`;

export const HistoryListWrapper = styled.div`
  margin-bottom: 10px;
`;

export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    content: '';
    border-left: 1px solid ${props => props.theme.secondaryColor};
    position: absolute;
    left: 162px;
    top: 0;
    bottom: 0;
  }
  &:last-child {
    &:before {
      content: none;
    }
  }
`;

export const HistoryTime = styled.div`
  color: #999;
  flex: 0 0 140px;
  font-size: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const HistoryContent = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: relative;
  flex: 1;
  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
  i {
    margin-right: 10px;
    background: ${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.secondaryColor};
    border-radius: 50%;
    flex: 0 0 25px;
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }
`;

export const HistoryText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  span {
    margin-right: 10px;
  }
`;

export const HistoryAuthor = styled.div`
  margin-top: 1px;
  font-size: 11px;
  color: #777;
  span {
    font-family: 'Proxima Nova Bold';
  }
`;

export const HistoryComment = styled.div`
  width: 100%;
  position: relative;
  input,
  textarea {
    width: 100%;
    font-size: 13px;
    border: 1px solid #b0c0d6;
    border-radius: 3px;
    background: ${props => props.theme.secondaryColor};
    padding: 2px 8px;
    outline: none;
    &:hover {
      border-color: ${props => props.theme.submitColor};
    }
    &::placeholder {
      font-size: 13px;
      font-style: italic;
      color: #999;
    }
  }
  textarea {
    min-height: 60px;
    padding: 5px 10px;
  }
  button {
    background-color: ${props => props.theme.submitColor};
    text-align: center;
    border: 1px solid transparent;
    border-radius: 3px;
    color: ${props => props.theme.secondaryColor} !important;
    padding: 6px 12px !important;
    margin-top: 10px;
    &:hover {
      background-color: ${props => props.theme.iconMoreColor};
      border-color: ${props => props.theme.iconMoreColor};
    }
  }
`;

export const ViewMoreAction = styled.div`
  margin-bottom: 10px;
  button {
    font-size: 13px;
    color: ${props => props.theme.submitColor};
    padding: 0px;
  }
`;

export const AdjustmentTableWrapper = styled.div`
  padding: 30px 20px 30px;
`;
