import type { FC } from "react"
import type { ButtonProps } from "../data/dataInterfaces";

// Button Primary
const ButtonPrimary: FC<ButtonProps> = ({href, target = '_self', label, icon, classes}) => {
  return (
    href ? (
      <a href={href} target={target} className={'btn btn-primary ' + classes}>
        {label}
        {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>: undefined}
      </a>
    ) : (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>: undefined}
      </button>
    )
  )
}

// Button Outline
const ButtonOutline: FC<ButtonProps> = ({href, target = '_self', label, icon, classes}) => {
  return (
    href ? (
      <a href={href} target={target} className={'btn btn-outline ' + classes}>
        {label}
        {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>: undefined}
      </a>
    ) : (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>: undefined}
      </button>
    )
  )
}

export { 
  ButtonPrimary,
  ButtonOutline 
}
