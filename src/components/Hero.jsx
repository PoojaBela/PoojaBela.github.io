const HeroSection = () => {
    return ( 
        <section className="flex flex-col gap-10 h-[40vh] md:h-[60vh]">
            <div className="">
                <p className="text-[14px] md:text-[20px]">Hii👋 I'm, </p>
                <p className="text-[30px] md:text-[40px] font-bold">Pooja Belaramani</p>
                <p className="text-[25px] md:text-[35px]">I'm a Frontend web developer.</p>
            </div>
            <p className="text-md md:text-lg">I like building <span className="underline decoration-4 decoration-[#26292b]">beautiful</span> and <span className="underline decoration-4 decoration-[#26292b]">user-friendly</span> website. Thank you for visiting my portfolio site. I hope you enjoy exploring my work and getting to know more about me.</p>
        </section>
     );
}
 
export default HeroSection;