import Navbar from "./Navbar"

const Hero = () => {
    return (
        <main className="hero_main flex sm:flex-col xs:flex-col m-auto ">
            <Navbar />
            <div className="flex flex-col items-center justify-between space-y-4 text-center sm:max-w-full m-auto max-w-[80%]">
                <h1 className=" m-auto  text-white text-[36px] sm:text-[48px] leading-normal mt-1  italic w-[50%]">
                    Welcome to<br /> <span className="text-orange-600 ">Halchemy Interior</span> <br /> Design
                </h1>
                <p className=" text-white text-[18px]  mt-2 italic leading-8 tracking-wider sm:leading-relaxed">
                    Welcome to Halchemy Interior's , we believe in transforming spacious to reflect the unique personalities of clinge. With years of experince in interior design we are dedicated to creating visually stunning and functional interiors  that blend aesthetics with practicality where you're looking for a complete home make over, a stylish office revamp or a small room redesign. Our team bring creativity precision and attention to detail into every project.
                </p>
            </div>
        </main>
    )
}
export default Hero