import Page from '@/components/page'
import Section from '@/components/section'

const Recipes = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Ingredients</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Like any good recipe, we appreciate community offerings to cultivate a
					delicous dish.
				</p>
			</div>
		</Section>

		<Section>
			<h3 className='font-medium'>Thanks to</h3>

			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://unsplash.com' className='underline'>
						Unsplash
					</a>{' '}
					for high quality images
				</li>

				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://teenyicons.com' className='underline'>
						Teenyicons
					</a>{' '}
					for lovely icons
				</li>
			</ul>
		</Section>
	</Page>
)

export default Recipes
