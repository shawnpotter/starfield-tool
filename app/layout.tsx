import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const barlow = Barlow({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Starfield Tools | Spotter Dev',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${barlow.className} bg-black bg-topo-dark`}>
				<div className='bg-zinc-900/50 h-screen'>
					<Navbar />
					<div className=''>{children}</div>
				</div>
			</body>
		</html>
	)
}
