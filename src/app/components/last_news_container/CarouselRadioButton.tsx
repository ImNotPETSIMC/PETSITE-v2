import { Radio } from "@material-tailwind/react"
import { MouseEventHandler } from "react"

export type CarouselRadioButtonProps = {
    id: string,
    name: string,
    selected?: boolean,
    onclick?: MouseEventHandler<HTMLInputElement>
}

export const CarouselRadioButton = (props: CarouselRadioButtonProps) => {
    return (
        <>
            {props.selected ?
                <div className="flex items-center bg-w95-grey h-fit w-fit p-0.5 hover:cursor-pointer">
                    <label htmlFor={props.id} className="flex items-center">
                        <div className="bg-w95-blue drop-shadow h-3 w-3"></div>
                    </label>
                </div>
                :
                <div className="flex items-center bg-w95-grey h-fit w-fit p-0.5 hover:cursor-pointer">
                    <label htmlFor={props.id}>
                        <div className="bg-w95-light-grey transition-all duration-500 hover:bg-w95-blue/25 drop-shadow h-3 w-3"></div>
                    </label>
                </div>
            }
            <input type="radio" className="hidden" id={props.id} name={props.name} />
        </>
    )
}