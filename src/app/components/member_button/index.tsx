'use client';

import Image from "next/image"
import { MouseEventHandler } from "react";

export type MemberButtonProps = {
    name: string,
    id: string,
    title: string,
    onclick?: MouseEventHandler<HTMLLabelElement>,
    onmouseover?: MouseEventHandler<HTMLLabelElement>,
    onmouseout?: MouseEventHandler<HTMLLabelElement>,
    icon: { 
        src: string,  
        alt: string
    }
}

export const MemberButton = (props: MemberButtonProps) => {
    return (
        <>
            <div className="flex justify-center items-center basis-[12%]">
                <label htmlFor={props.id} className="relative border-4 border-w95-blue border-solid font-ps2p text-xs text-center" onClick={props.onclick} onMouseOver={props.onmouseover} onMouseOut={props.onmouseout}>
                    <div className="w-full h-full top-0 left-0 absolute hover:bg-w95-blue/40 hover:animate-pulse z-10 transition-all"></div>
                    <Image {...props.icon} width={150} height={150} />
                </label>  
            </div>
            <input type="radio" style={{display: "none"}} name={props.name} id={props.id}></input>
        </>
    )
}