import { getInitials } from '../helpers'

type Props = {
  size?: number
  image?: string
  children?: React.ReactNode
}

export default ({ size = 38, image, children }: Props) => {
  const string = children ? children.toString() : ''
  const text = string.split(' ').length > 1 ? getInitials(string) : string[0]

  return (
    <div style={{ backgroundImage: image ? `url(${image})` : '' }}>
      {!image && text}

      <style jsx>{`
        div {
          color: white;
          width: ${size}px;
          height: ${size}px;
          line-height: ${size}px;
          font-size: calc(${size}px * 0.35);
          font-weight: var(--weight-bold);
          letter-spacing: 0.035em;
          background-color: var(--accent);
          background-size: cover;
          background-position: center -5px;
          background-repeat: no-repeat;
          border-radius: 50%;
          box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
