'use client';

import { Radio } from "@material-tailwind/react";
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
    },
    custom?: string
}

export const FolderButton = (props: FolderButtonProps) => {
    return (
        <div className={"min-w-fit font-ps2p text-xs text-center hover:bg-w95-grey dark:hover:bg-white/20 " + (props.custom ? ` ${props.custom}` : "w-[30%]")}>
            <Radio
                id={props.id}
                name={props.name}
                label={
                    <label htmlFor={props.id} className={"hover:cursor-pointer"} onClick={props.onclick}>
                        <div className="flex flex-col gap-2 items-center">
                            <Image {...props.icon} style={{ height: "auto", width: "auto" }} />
                            <p>{props.title}</p>
                        </div>
                    </label>
                }
                crossOrigin={undefined}
                style={{ display: "none" }}
            />
        </div>
    )
}

