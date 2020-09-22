import React from 'react'
import styled, { css } from 'styled-components'
import { Title200, Overline100, Body100, Body200 } from '../Text'

const PartialContainer = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    padding: ${spacing(1)} ${spacing(2)};
  `,
)

const Image = styled.div(
  ({ theme: { spacing } }) => css`
    margin-right: ${spacing(2)};
    svg,
    img {
      border-radius: 100%;
    }
  `,
)

const Info = styled.div(() => css``)

const Body = styled(PartialContainer)(
  ({ theme: { spacing, colors } }) => css`
    padding-top: ${spacing(2)};

    ${Image} {
      flex: 0 0 64px;
      height: 64px;

      svg,
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    ${Info} {
      overflow: hidden;
      > p,
      > h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      ${Title200} {
        color: ${colors.text.title};
        margin-bottom: ${spacing(1)};
      }

      > ${Body200} {
        min-height: 48px;
        max-width: 100%;
      }
    }
  `,
)

const Separator = styled.hr(
  ({ theme: { colors } }) => css`
    margin: 0;
    border-top: 1px solid ${colors.secondary};
  `,
)

const Container = styled.div(
  ({ theme: { colors } }) => css`
    border: 1px solid ${colors.secondary};
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      border-color: ${colors.primary.main};
      box-shadow: 1px 2px 6px 0 rgba(189, 189, 189, 0.7);
    }
  `,
)

const Footer = styled(PartialContainer)(
  ({ theme: { colors, spacing } }) => css`
    > ${Body100} {
      svg {
        vertical-align: middle;
        height: 16px;
      }

      color: ${colors.text.caption};
    }

    > *:not(:last-child) {
      margin-right: ${spacing(2)};
    }
  `,
)

const Card = ({
  overline = '',
  image = '',
  title = '',
  description = '',
  stats = [],
  onClick,
  className,
  'data-testid': testId,
}) => {
  return (
    <Container
      className={className}
      data-testid={testId}
      onClick={onClick}
      role="button"
    >
      <Body>
        <Image data-testid="image">{image}</Image>
        <Info>
          <Overline100 data-testid="overline">{overline}</Overline100>
          <Title200 as="h3" data-testid="title">
            {title}
          </Title200>
          <Body200 data-testid="description">{description}</Body200>
        </Info>
      </Body>
      <Separator />
      <Footer>
        {stats.map(({ icon, value }, i) => (
          <React.Fragment key={`stats_${i + 1}`}>
            <Body100 data-testid={`stats_${i}`}>
              <span>{icon} </span>
              {value}
            </Body100>
          </React.Fragment>
        ))}
      </Footer>
    </Container>
  )
}

export default styled(Card)``
