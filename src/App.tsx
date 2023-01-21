import './App.css'

function App() {
	return (
		<>
			<head>
				<meta
					name="description"
					content="Shape Palette is a 2D logic puzzle game, manipulate shapes in order to venture through levels that are sure to test out your skills!"
				/>
				<meta
					property="og:description"
					content="Shape Palette is a 2D logic puzzle game, manipulate shapes in order to venture through levels that are sure to test out your skills!"
				/>
				<meta property="og:title" content="Team Lowercase" />
				<meta
					property="og:image"
					content="https://teamlowercase.com/logo512.png"
				/>
				<meta
					property="og:url"
					content="https://teamlowercase.com/shape-palette"
				/>
				<title>Shape Palette</title>
			</head>
			<video
				src="trailer.mp4"
				playsInline
				autoPlay
				muted
				loop
				width="100%"
				height="100%"
			/>
			<div className="absolute w-11/12 md:w-2/3 top-0 left-0 right-0 mx-auto pt-[20vh]">
				<div className="rounded-md p-5 bg-light">
					<img
						src="title.png"
						className=" max-h-56 mx-auto"
						alt="Shape Palette Logo"
					/>
					<iframe
						src="https://store.steampowered.com/widget/730160/"
						frameBorder="0"
						width="100%"
						height="190"
						title="Steam Store Widget"
						className="max-w-xl mx-auto"
					></iframe>
					<a
						href="mailto:shapePalette@teamlowercase.com"
						className="mx-auto block w-fit mt-2 text-white bg-secondary rounded-md p-2"
					>
						Contact
					</a>
				</div>
			</div>
		</>
	)
}

export default App
