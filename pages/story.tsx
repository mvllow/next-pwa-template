import Page from '@/components/page'
import Section from '@/components/section'

const Story = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Story</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					&quot;I confess that when this all started, you were like a picture
					out of focus to me. And it took time for my eyes to adjust to you, to
					make sense of you, to really recognize you.&quot;
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://twosentencestories.com/vision' className='underline'>
						Vision
					</a>
					, a two sentence story
				</p>
			</div>
		</Section>
	</Page>
)

export default Story
