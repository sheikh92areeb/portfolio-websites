import { assets } from "../assets/assets";

const yearsFrom = (year: number): number => {
  const currentYear = new Date().getFullYear()
  return currentYear - year
}

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Satisfied Clients',
    number: 30
  },
  {
    label: 'Years of experience',
    number: yearsFrom(2022)
  },
];

const aboutBio = "Hi, I’m Areeb — a professional web developer specializing in creating visually stunning, user-friendly, and high-performance websites. With expertise in modern web technologies, I bring your ideas to life through creative design and efficient coding. My goal is to deliver websites that not only look exceptional but also drive results, boost user engagement, and rank higher in search engines."

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    {aboutBio}
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))}
                    <img src={assets.favicon} alt="Logo" width={30} height={30} className="ml-auto md:w-[40px]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
