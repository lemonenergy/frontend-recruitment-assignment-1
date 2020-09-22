import React from 'react'
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router'

import { Title100, Body100 } from '../../components/Text'
import * as Grid from '../../components/Grid'
import { List, ListItem } from '../../components/List'
import Button from '../../components/Button'

import recommendations from './recommendations'

const Container = styled(Grid.Container)(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 768px;
    flex: 0 1 auto;
    overflow: auto;
    max-height: 100%;

    > ${Title100}, > ${Body100} {
      min-width: 100%;
    }

    > ${Title100} {
      margin-bottom: ${spacing(3)};
    }

    > ${Body100} {
      margin-bottom: ${spacing(2)};
    }

    > ${List} {
      margin-top: ${spacing(2)};
    }

    > ${Button} {
      margin: ${spacing(8)} 0 ${spacing(3)};
    }
  `,
)

const Intro = () => {
  const history = useHistory()

  const navigateToAssignment = () => {
    history.push('/assignment')
  }

  return (
    <Container>
      <Title100 id="#greetings">
        Hi, nice to meet you{' '}
        <span role="img" aria-labelledby="#greetings">
          🖖🏼
        </span>
      </Title100>
      <Body100>
        Thank you for your interest in the position as a frontend developer at
        Lemon Energy, we hope to have you aboard soon!
      </Body100>
      <Body100>
        We want to give the last instructions before you start your technical
        assignment:
      </Body100>
      <List>
        {recommendations.map((recommendation, index) => (
          <ListItem order={index + 1} key={`recommendation-${index + 1}`}>
            {recommendation}
          </ListItem>
        ))}
      </List>
      <Button onClick={navigateToAssignment}>Start</Button>
    </Container>
  )
}

export default Intro
