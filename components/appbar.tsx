import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const links = [
	{ label: 'Story', href: '/story' },
	{ label: 'Recipes', href: '/recipes' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='pt-safe w-full bg-gray-900 fixed top-0'>
			<header className='bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-800'>
				<div className='mx-auto px-6 max-w-screen-md h-20 flex items-center justify-between'>
					<Link href='/'>
						<a>
							<h1 className='font-medium'>Rice Bowl</h1>
						</a>
					</Link>

					<nav className='space-x-6 flex items-center'>
						<div className='hidden sm:block'>
							<div className='space-x-6 flex items-center'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-indigo-500 dark:text-indigo-400'
													: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<div className='w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full shadow-inner overflow-hidden'>
							<Image
								src='https://images.unsplash.com/photo-1612480797665-c96d261eae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
								alt='Gluten Free'
								width='256'
								height='256'
							/>
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
