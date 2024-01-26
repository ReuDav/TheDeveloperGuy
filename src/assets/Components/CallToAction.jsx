const CallToAction = () => {
    return(
        <header>
            <div id="CallToAction" className="flex lg:flex-row items-center md:justify-evenly flex-col lg:p-16 md:p-8 p-4">
                <div className="lg:w-1/2 w-3/4 md:p-8 p-4">
                    <h1 className="text-3xl font-bold">Learn Python now, don't wait until new year!</h1>
                    <p className="text-lg">My course and tutoring skills will help you to land your first job in IT, with the relevant and most wanted skills! The course is on sale, for <strike>400€</strike> <strong> 300€!!! </strong>     </p>
                    <button type="button" className="bg-green-500 p-4 rounded-xl my-4 text-white block md:m-0 mx-auto">Enroll now!</button>
                </div>
                <img src="/PythonCourseImage.webp" alt="" className="md:max-w-md sm:max-w-sm max-w-xs w-full pointer-events-none"/>
            </div>
        </header>
    )
}
export default CallToAction;