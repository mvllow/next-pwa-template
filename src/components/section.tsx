type Props = {
  children: React.ReactNode
}

const Section = ({ children }: Props) => (
  <section>
    {children}

    <style jsx>{`
      section {
        padding: var(--gap);
      }
    `}</style>
  </section>
)

export default Section
