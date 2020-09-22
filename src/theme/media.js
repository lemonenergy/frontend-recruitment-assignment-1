import { css } from 'styled-components'

// media
const createMedia = (min, max) => (...styles) => css`
  @media screen and (min-width: ${min}px) ${max
      ? css`and (max-width: ${max}px)`
      : ''} {
    ${css(...styles)}
  }
`
const media = { only: {} }

media.sm = (...styles) => css`
  ${createMedia(768)`${css(...styles)}`}
`

media.only.sm = (...styles) => css`
  ${createMedia(768, 1023)`${css(...styles)}`}
`

media.md = (...styles) => css`
  ${createMedia(1024)`${css(...styles)}`}
`

media.only.md = (...styles) => css`
  ${createMedia(1024, 1439)`${css(...styles)}`}
`

media.lg = (...styles) => css`
  ${createMedia(1440)`${css(...styles)}`}
`

media.only.lg = media.lg

export default media
