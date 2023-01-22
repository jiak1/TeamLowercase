import { Helmet } from 'react-helmet'
import './App.css'

const images = [
	'horizontal.png',
	'logo.png',
	'small.png',
	'vertical.png',
	'background.png',
]

export default function SPPresskit() {
	return (
		<>
			<Helmet>
				<title>Shape Palette - Presskit</title>
				<meta
					name="description"
					content="Shape Palette is a 2D logic puzzle game, manipulate shapes in order to venture through levels that are sure to test out your skills!"
				/>
				<meta
					property="og:description"
					content="Shape Palette is a 2D logic puzzle game, manipulate shapes in order to venture through levels that are sure to test out your skills!"
				/>
				<meta property="og:title" content="Shape Palette" />
				<meta
					property="og:image"
					content="https://teamlowercase.com/logo512.png"
				/>
				<meta
					property="og:url"
					content="https://teamlowercase.com/shape-palette/presskit"
				/>
				<link rel="icon" href="favicon.ico" />
				<link rel="apple-touch-icon" href="logo512.png" />
			</Helmet>
			<div className="mx-auto w-fit mt-16 px-8 flex max-w-6xl flex-col md:flex-row">
				<div>
					<img
						src="/title.png"
						className=" max-h-56 mx-auto"
						alt="Shape Palette Logo"
					/>
					<h2 className="mt-2 font-medium text-lg text-center md:text-left">
						Quick Summary
					</h2>
					<table className="mt-4 table-auto cellTable mx-auto md:mx-0">
						<tbody>
							<tr>
								<td>Name</td>
								<td>Shape Palette</td>
							</tr>
							<tr>
								<td>Release Date</td>
								<td>1st February, 2023</td>
							</tr>
							<tr>
								<td>Genre</td>
								<td>Puzzle</td>
							</tr>
							<tr>
								<td>Website</td>
								<td>
									<a
										href="https://teamlowercase.com/shape-palette"
										target="_blank"
										className="font-medium"
										rel="noreferrer"
									>
										teamlowercase.com/shape-palette
									</a>
								</td>
							</tr>
							<tr>
								<td>Platforms</td>
								<td>Windows</td>
							</tr>
							<tr>
								<td>Stores</td>
								<td>
									<a
										href="https://store.steampowered.com/app/730160/Shape_Palette/"
										target="_blank"
										className="font-medium"
										rel="noreferrer"
									>
										Steam
									</a>
								</td>
							</tr>
							<tr>
								<td>Developers</td>
								<td>
									<a
										href="https://teamlowercase.com"
										target="_blank"
										className="font-medium"
										rel="noreferrer"
									>
										Team Lowercase
									</a>
									<br />
									<a
										href="https://jackdonaldson.net/"
										target="_blank"
										className="font-medium"
										rel="noreferrer"
									>
										Jack Donaldson
									</a>
									<br />
									<a
										href="https://www.roberthart.com.au/"
										target="_blank"
										className="font-medium"
										rel="noreferrer"
									>
										Robert Hart
									</a>
								</td>
							</tr>
							<tr>
								<td>Location</td>
								<td>Sydney, AU</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>
									<a
										href="mailto:press@teamlowercase.com"
										target="_blank"
										className="font-medium"
										rel="noreferrer"
									>
										press@teamlowercase.com
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="mt-8 md:ml-8 md:mt-0">
					<div className="border-primary border-[1px] rounded-lg p-4">
						<h2 className="font-medium text-2xl">Description</h2>
						<p className="mt-4">
							Shape Palette is a 2D puzzle game that offers simple gameplay
							which builds with each stage introducing new rules & challenges.
							Place, combine, splash & maneuver around obstacles in numerous
							shape-bending puzzles.
							<br />
							<br />
						</p>
						<span className="font-medium text-lg">Features</span>
						<ul className="list-disc list-inside mt-2">
							<li>Focus On Puzzle Solving With Minimal & Simple Visuals</li>
							<li>Play 49 Different Hand Crafted Levels</li>
							<li>
								Evolving Game Mechanics Including Combining, Splashing & Various
								Shape Types
							</li>
							<li>Play Entirely With A Mouse!</li>
							<li>Difficulty Ramping Including Challenging Bonus Levels</li>
						</ul>
					</div>
					<div className="border-primary border-[1px] rounded-lg p-4 mt-8">
						<h2 className="font-medium text-2xl mb-4">Trailer</h2>
						<video
							src="/trailer.mp4"
							autoPlay
							muted
							loop
							controls
							className="rounded-md"
						/>
						<p className="mt-2">
							You can also view the trailer on{' '}
							<a
								href="https://www.youtube.com/watch?v=Ff7s2dLoxAI"
								target="_blank"
								rel="noreferrer"
								className="font-medium"
							>
								Youtube here
							</a>
						</p>
					</div>
					<div className="border-primary border-[1px] rounded-lg p-4 mt-8">
						<h2 className="font-medium text-2xl mb-4">Screenshots</h2>
						<div className="flex flex-wrap justify-between">
							{[...Array(13)].map((x, i) => (
								<a
									href={`/screenshots/shape-palette/${i + 1}.jpg`}
									target="_blank"
									rel="noreferrer"
									key={i}
								>
									<img
										src={`/screenshots/shape-palette/${i + 1}.jpg`}
										className="xl:max-w-[22rem] mb-4"
										alt="Game screenshot"
									/>
								</a>
							))}
						</div>
					</div>
					<div className="border-primary border-[1px] rounded-lg p-4 mt-8">
						<h2 className="font-medium text-2xl mb-4">Promotional Images</h2>
						<div className="flex flex-col">
							{images.map((x, i) => (
								<a
									href={`/images/shape-palette/${x}`}
									target="_blank"
									rel="noreferrer"
									key={x}
								>
									<img
										src={`/images/shape-palette/${x}`}
										className="mb-4 max-h-[200px] border-primary rounded-md p-2"
										alt="Promotional"
									/>
								</a>
							))}
						</div>
					</div>

					<div className="border-primary border-[1px] rounded-lg p-4 mt-8">
						<h2 className="font-medium text-2xl mb-4">Stores</h2>
						<iframe
							src="https://store.steampowered.com/widget/730160/"
							frameBorder="0"
							width="100%"
							height="190"
							title="Steam Store Widget"
						></iframe>
					</div>
					<div className="border-primary border-[1px] rounded-lg p-4 mt-8">
						<h2 className="font-medium text-2xl">Something Missing?</h2>
						<p className="mt-4">
							If something is missing or you just want to reach out, feel free
							to email us at{' '}
							<a href="mailto:press@teamlowercase.com" className="font-medium">
								press@teamlowercase.com
							</a>
						</p>
					</div>
				</div>
			</div>
			<br />
			<br />
		</>
	)
}
