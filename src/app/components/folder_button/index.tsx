'use client';

import Image from "next/image"
import { MouseEventHandler } from "react";

export type FolderButtonProps = {
    name: string,
    title: string, 
    id: string, 
    text: string,
    onclick?: MouseEventHandler<HTMLLabelElement>, 
    icon: { 
        src: string,  
        alt: string, 
        width: number, 
        height: number 
    }
}

export const FolderButton = (props: FolderButtonProps) => {
    return (
        <>
            <label htmlFor={props.id} className="font-ps2p text-xs w-[30%] text-center" onClick={props.onclick}>
                <div className="flex flex-col gap-2 items-center">
                    <Image {...props.icon} />
                    <p>{props.title}</p>
                </div>
            </label>
            <input type="radio" style={{display: "none"}} name={props.name} id={props.id}></input>
        </>
    )
}