import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const HText = ({children}:Props) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
        {children}
    </h2>
  )
}