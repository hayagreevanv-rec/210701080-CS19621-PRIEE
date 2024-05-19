import lostIcon from "../assets/images/lostpage.svg"

const ErrorPage = () => {
	return (
		<div className='flex flex-col h-screen w-screen justify-center items-center'>
			<img src = {lostIcon} alt="Lost person icon" className="h-[200px] w-[200px]"/>
			<br/>
			<h1 className='text-3xl text-red-900'>Oops! Seems like somebody has lost their way</h1>
			<h2>This path does not exist</h2>
		</div>
  	)
}

export default ErrorPage