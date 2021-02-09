import Page from '@/components/page'

const Recipes = () => (
	<Page>
		<section className='mt-20'>
			<h2 className='text-xl font-semibold'>Ingredients</h2>

			<p className='mt-2 text-gray-600 dark:text-gray-400'>
				Like any good recipe, we appreciate community offerings to cultivate a
				delicous dish.
			</p>
		</section>

		<section className='mt-10'>
			<h3 className='font-medium'>Thanks to</h3>

			<ul className='space-y-2 px-6 py-2 text-sm text-gray-600 dark:text-gray-400 list-disc'>
				<li>
					<a href='https://unsplash.com' className='underline'>
						Unsplash
					</a>{' '}
					for high quality images
				</li>
				<li>
					<a href='https://teenyicons.com' className='underline'>
						Teenyicons
					</a>{' '}
					for lovely icons
				</li>
			</ul>
		</section>
	</Page>
)

export default Recipes
