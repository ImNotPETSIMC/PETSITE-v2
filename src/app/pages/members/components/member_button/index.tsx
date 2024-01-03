'use client';

import Image from "next/image"
import { MouseEventHandler, useId } from "react";

export type MemberButtonProps = {
    name?: string,
    photo?: string,
    onclick?: MouseEventHandler<HTMLLabelElement>,
    onmouseover?: MouseEventHandler<HTMLLabelElement>,
    onmouseout?: MouseEventHandler<HTMLLabelElement>
}

export const MemberButton = (props: MemberButtonProps) => {
    const memberButtonId = useId();
    
    return (
        <>
            <div className="flex justify-center items-center basis-[12%] min-w-24">
                <label htmlFor={memberButtonId} className="relative h-28 w-28 aspect-square border-4 border-w95-blue border-solid font-ps2p text-xs text-center" onClick={props.onclick} onMouseOver={props.onmouseover} onMouseOut={props.onmouseout}>
                    <Image 
                        src={props.photo ? ("data:image/jpeg;base64," + props.photo) : "/images/undefined_member.png"} 
                        alt={(props.name ? props.name : "Membro Não Definido") + "'s Photo"} 
                        fill
                    />
                    <div className="w-full h-full top-0 left-0 absolute hover:bg-w95-blue/40 hover:animate-pulse transition-all"></div>
                </label>  
            </div>
            <input type="radio" style={{display: "none"}} name={"member-button"} id={memberButtonId}></input>
        </>
    )
}