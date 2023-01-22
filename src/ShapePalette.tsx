import './App.css'
import { Helmet } from 'react-helmet'

function ShapePalette() {
	return (
		<>
			<Helmet>
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
					content="https://teamlowercase.com/shape-palette"
				/>
				<link rel="icon" href="favicon.ico" />
				<link rel="apple-touch-icon" href="logo512.png" />
				<title>Shape Palette</title>
			</Helmet>
			<video
				src="/promo.mp4"
				className="trailer"
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
					<p className="mt-6 text-center">
						Have a question or issue? Email us at{' '}
						<a
							href="mailto:shapepalette@teamlowercase.com"
							className="font-medium"
							target="_blank"
							rel="noreferrer"
						>
							shapepalette@teamlowercase.com
						</a>
						<br />
						You can also view our{' '}
						<a
							href="/shape-palette/presskit"
							className="font-medium"
							rel="noreferrer"
						>
							presskit here
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default ShapePalette
