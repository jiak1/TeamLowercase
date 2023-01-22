import './App.css'
import { Helmet } from 'react-helmet'

export default function Home() {
	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Team Lowercase is an Australian Indie Game Development Studio by Jack Donaldson & Robert Hart"
				/>
				<meta
					property="og:description"
					content="Team Lowercase is an Australian Indie Game Development Studio by Jack Donaldson & Robert Hart"
				/>
				<meta property="og:title" content="Team Lowercase" />
				<meta property="og:image" content="https://teamlowercase.com/tl.png" />
				<meta property="og:url" content="https://teamlowercase.com" />
				<link rel="icon" href="tl.ico" />
				<link rel="apple-touch-icon" href="tl.png" />
				<title>Team Lowercase</title>
			</Helmet>
			<div className="mx-auto block w-fit mt-8 md:mt-[20vh] px-8 text-center">
				<h1 className="font-medium text-6xl">Team Lowercase</h1>
				<p className="mt-6">
					An Australian indie game studio created by{' '}
					<a
						href="https://jackdonaldson.net"
						target="_blank"
						className="font-medium"
						rel="noreferrer"
					>
						Jack Donaldson
					</a>{' '}
					&{' '}
					<a
						href="https://www.roberthart.com.au"
						target="_blank"
						className="font-medium"
						rel="noreferrer"
					>
						Robert Hart
					</a>
				</p>
				<h2 className="mt-20 font-medium text-3xl">Our Games</h2>
				<a href="/shape-palette">
					<img
						src="shapePalette.png"
						className="rounded-md mt-12"
						alt="Shape Palette"
					/>
				</a>
				<a href="https://jiak1.itch.io/retract">
					<img
						src="retract.png"
						className="rounded-md mt-12"
						alt="Shape Palette"
					/>
				</a>
				<h3 className="mt-12 font-medium text-3xl">Contact</h3>
				<p className="mt-6 mb-14">
					If you want to reach out, feel free to email us at{' '}
					<a
						href="mailto:contact@teamlowercase.com"
						className="font-medium"
						target="_blank"
						rel="noreferrer"
					>
						contact@teamlowercase.com
					</a>
				</p>
				<br />
			</div>
		</>
	)
}
