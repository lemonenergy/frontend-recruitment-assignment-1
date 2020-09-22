import React, { useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import * as Grid from '../../components/Grid'
import { Title200 } from '../../components/Text'
import Card from '../../components/Card/Card'
import CardGrid from '../../components/Card/CardGrid'
import { ReactComponent as RepositoryIcon } from '../../images/RepositoryIcon.svg'
import { ReactComponent as GistIcon } from '../../images/GistIcon.svg'
import useUsers from '../../hooks/useUsers'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

const Container = styled(Grid.Container)(
  ({ theme: { spacing } }) => css`
    ${Title200} {
      margin-bottom: ${spacing(4)};
    }

    flex: 0 1 auto;
    max-height: 100%;
    overflow: hidden;
  `,
)

const loadingAnimation = keyframes`
  0% {
    width: 40px;
  }

  100% {
    width: 90%;
  }
`

const loadingEndAnimation = keyframes`
  99% {
    width: 100%;
  }

  100% {
    width: 0;
  }
`
const LoadingBar = styled.div(
  ({ theme: { colors }, isLoading }) => css`
    width: 100%;
    height: 4px;
    position: fixed;
    top: 0;
    left: 0;
    &:before {
      content: '';
      background-color: ${colors.primary.main};
      display: block;
      height: 100%;
      animation: ${isLoading
          ? css`
              ${loadingAnimation} 300s
            `
          : css`
              ${loadingEndAnimation} 1.4s
            `}
        ease forwards;
    }
  `,
)

const formatStats = ({ repos, gists }) => [
  {
    icon: <RepositoryIcon />,
    value: repos,
  },
  {
    icon: <GistIcon />,
    value: gists,
  },
]

const Assignment = () => {
  const [{ loading, error, users = [] }, { fetchMore }] = useUsers()

  const listRef = useRef()

  const handleUserClick = login => {
    // eslint-disable-next-line no-alert
    const decision = window.confirm(
      `You wiil be redirected to ${login}'s profile`,
    )

    if (decision) window.location.href = `https://github.com/${login}`
  }

  useInfiniteScroll(listRef, fetchMore)

  // eslint-disable-next-line no-console
  if (error) console.error(error)

  return (
    <Container as="section">
      <LoadingBar isLoading={loading} />
      <Title200>Github users</Title200>
      <CardGrid data-testid="card_grid" ref={listRef}>
        {users.map((user, i) => (
          <Card
            overline={user.name}
            title={user.login}
            description={user.bio}
            stats={formatStats(user)}
            image={<img src={user.avatar} alt={user.login} />}
            key={user.login}
            data-testid={`card_${i}`}
            onClick={() => {
              handleUserClick(user.login)
            }}
          />
        ))}
      </CardGrid>
    </Container>
  )
}

export default Assignment
