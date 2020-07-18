import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px calc(100% - 320px);
  grid-template-rows: 100%;
  grid-template-areas: 'sidenav header';
`

export const SideForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > *:last-child {
    margin-top: 1.2rem;
  }
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 0.8rem;

  span {
    color: ${props => props.theme.colors.sunset};
    font-size: 0.7rem;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #aaa;
    font-size: 1rem;
    padding-left: 5px;
    color: #fff;
    background: rgba(0, 0, 0, 0);
    display: block;
    font-size: 0.8rem;

    &:hover:enabled {
      transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-bottom: 3px solid #aaa;
    }

    &:focus {
      transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-bottom: 3px solid #aaa;
    }
  }
`
