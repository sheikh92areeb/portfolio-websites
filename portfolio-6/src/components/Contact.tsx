import { contactHeadline, contactText, socialLinks } from "../data/appData";

const Contact = () => {
  return (
    <section id="contact" className="section">
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">

            <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                    {contactHeadline}
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
                    {contactText}
                </p>

                <div className="flex items-center gap-2 mt-auto">
                    {socialLinks.map(({ href, icon, alt }, key) => (
                        <a key={key} href={href} target="_blank" className="h-12 w-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[backgound-color,color] hover:bg-zinc-50/10 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up" >
                            <img src={icon} alt={alt} />
                        </a>
                    ))}
                </div>
            </div>

            <form action="https://formspree.io/f/xyzpvlpr" method="POST" className="xl:pl-10 2xl:pl-20">
                <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="label reveal-up">
                            Name
                        </label>
                        <input type="text" name="name" id="name" autoComplete="name" required placeholder="Name" className="text-field reveal-up" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="label reveal-up">
                            Email
                        </label>
                        <input type="email" name="email" id="email" autoComplete="email" required placeholder="Email" className="text-field reveal-up" />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="label reveal-up">Message</label>
                    <textarea name="message" id="message" placeholder="Message" required className="text-field resize-y min-h-32 max-h-80 reveal-up"></textarea>
                </div>

                <button type="submit" className="btn btn-primary [&]:max-w-full! w-full! justify-center reveal-up">
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
