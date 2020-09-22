import { createGlobalStyle, css } from 'styled-components'

const headers = [1, 2, 3, 4, 5, 6].map(n => `h${n}`).join(', ')

const GlobalStyles = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: ${colors.text.main};
      background-color: ${colors.background};
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      min-height: 0;
      max-height: 100%;
      overflow: hidden;
    }

    header,
    main {
      display: flex;
      flex-direction: column;
    }

    header {
      flex: 0 0 auto;
    }

    main {
      flex: 0 1 auto;
      min-height: 0;
      max-height: 100%;
      overflow: hidden;
    }

    ${headers}, p {
      margin: 0;
    }

    ${headers} {
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      letter-spacing: -1px;
    }
  `,
)

export default GlobalStyles
