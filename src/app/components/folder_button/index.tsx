import Image from "next/image"

export type FolderButtonProps = {
    name: string,
    title: string, 
    id: string, 
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
            <label htmlFor={props.id} className="font-ps2p text-xs basis-1/4">
                <div className="flex flex-col gap-2 items-center">
                    <Image {...props.icon} />
                    <p>{props.title}</p>
                </div>
            </label>
            <input type="radio" style={{display: "none"}} name={props.name} id={props.id}></input>
        </>
    )
}