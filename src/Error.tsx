import { Helmet } from 'react-helmet'
import './App.css'

export default function ErrorPage() {
	return (
		<>
			<Helmet>
				<title>404 Not Found</title>
				<link rel="icon" href="tl.ico" />
			</Helmet>
			<div className="mx-auto block w-fit mt-[20%] px-8">
				<h1>Oops!</h1>
				<br />
				<p>
					This page doesn't appear to exist... are you sure the URL is correct?
					<br />
					<br />
					You might want to{' '}
					<a href="/" className="font-medium">
						return to the home page?
					</a>
				</p>
			</div>
		</>
	)
}
