// This is a poorly implemented "condensing" title
// Please test your PWA on iPhone SE sizes

import Link from 'next/link'

type Props = {
	loaded: boolean
}

const UnnecessarilyComplexTitle = ({ loaded }: Props) => (
	<Link href='/'>
		<a>
			<h1 className={loaded ? 'loaded' : ''}>
				<span>Progressive</span>
				<span>WebApp</span>
			</h1>

			<style jsx>{`
				a {
					position: absolute;
					z-index: 3;
				}

				h1 {
					color: var(--text);
					padding-right: var(--gap-small);
					width: 100%;
					line-height: 32px;
					font-size: 18px;
					font-weight: 500;
					letter-spacing: 0.0035em;
					background: var(--base);
					transition: var(--transition-colors);
				}

				h1 span {
					color: var(--text);
					position: relative;
					bottom: 0;
					left: 0;
					transition: 150ms opacity 1s ease-in-out, 150ms bottom 1s ease-in-out,
						150ms left 1s ease-in-out, var(--transition-colors);
				}

				h1.loaded span:nth-child(1) {
					opacity: 0;
					left: -1rem;
				}

				h1.loaded span:nth-child(2) {
					left: -6.3rem;
				}
			`}</style>
		</a>
	</Link>
)

export default UnnecessarilyComplexTitle
