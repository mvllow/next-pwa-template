import Avatar from './avatar'
import { getPlaceholderName } from '../helpers'

const FakeList = () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    data.push(getPlaceholderName())
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item}>
          <Avatar>{item}</Avatar>
          <h4>{item}</h4>
        </li>
      ))}

      <style jsx>{`
        li {
          color: var(--fg);
          padding: var(--gap-small);
          background: var(--base);
          display: flex;
          align-items: center;
          transition: var(--transition-colors);
        }

        li:not(:last-child) {
          border-bottom: 1px solid var(--divider);
        }

        h4 {
          color: var(--fg);
          margin-left: var(--gap-small);
          font-weight: 500;
          letter-spacing: 0.0035em;
        }
      `}</style>
    </ul>
  )
}

export default FakeList
