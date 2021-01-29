import Page from '../components/page'
import Section from '../components/section'
import FakeList from '../components/fake-list'
import { getPlaceholderName } from '../helpers'

export default () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push(getPlaceholderName())
  }

  return (
    <Page>
      <Section>
        <h2>Home</h2>
      </Section>

      <FakeList />
    </Page>
  )
}
