import { assets } from "../assets/assets";
import { footerHeadline, sitemap, socialLinks } from "../data/appData";
import { ButtonPrimary } from "./Buttons";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              {footerHeadline}
            </h2>
            <ButtonPrimary href="mailto:mareebsheikh92@gmail.com" label="Start Project" icon="chevron_right" classes="reveal-up" />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ href, label }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up">Social Links</p>
              <ul>
                {socialLinks.map(({ href, alt }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{alt}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src={assets.favicon} alt="Logo" width={40} height={40} />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">Areeb Sheikh</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
