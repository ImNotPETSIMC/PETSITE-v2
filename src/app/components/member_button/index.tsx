'use client';

import Image from "next/image"
import { MouseEventHandler } from "react";

export type MemberButtonProps = {
    name: string,
    id: string, 
    onclick?: MouseEventHandler<HTMLLabelElement>, 
    icon: { 
        src: string,  
        alt: string
    }
}

export const MemberButton = (props: MemberButtonProps) => {
    return (
        <>
            <div className="flex justify-center items-center basis-[12%]">
                <label htmlFor={props.id} className="border-4 border-w95-blue border-solid font-ps2p text-xs text-center" onClick={props.onclick}>
                    <Image {...props.icon} width={150} height={150} />
                </label>  
            </div>
            <input type="radio" style={{display: "none"}} name={props.name} id={props.id}></input>
        </>
    )
}