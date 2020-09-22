import React from 'react'
import { Body100 } from '../../components/Text'
import Link from '../../components/Link'

const recommendations = [
  <>
    Read the <Link href="#">assignment instructions</Link> carefully;
  </>,
  <>
    Take your time, we are not evaluating how fast you complete the assignment,{' '}
    <Body100 as="span" bold>
      so don&apos;t rush it;
    </Body100>
  </>,
  <>
    There are all kinds of bugs in this application, including{' '}
    <Body100 as="span" bold>
      broken tests and design contradictions.{' '}
    </Body100>
    Document bugs that you couldn&apos;t fix and what you&apos;ve tried to do
    so;
  </>,
  <>
    <Body100 as="span" bold>
      Commit your code all the time!
    </Body100>{' '}
    We suggest you to commit when you install a dependency, fix a bug,
    create/fix a test, or implement a new component. We give more weight to how
    your development process was than how many bugs you fixed and, this is the
    only way we can evaluate that. <br />
    At Lemon, we use Conventional Commits as our commit message standard, and to
    automate packages and applications version management, if you want to give
    it a try, here&apos;s a{' '}
    <Link href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">
      reference
    </Link>{' '}
    you can follow.
  </>,
]

export default recommendations
