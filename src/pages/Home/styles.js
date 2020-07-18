import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 320px calc(100% - 320px);
  grid-template-rows: 100%;
  grid-template-areas: 'sidenav map';
  overflow-y: none;

  @media screen and (max-width: 1024px) {
    overflow-y: scroll;
    grid-template-columns: 100%;
    grid-template-rows: 70vh 30vh;
    grid-template-areas:
      'map'
      'sidenav';
    padding: 0 0.5rem;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.white};
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.white};
    }
  }
`

export const SideForm = styled.div`
  display: flex;
  grid-area: sidenav;
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

  button {
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
