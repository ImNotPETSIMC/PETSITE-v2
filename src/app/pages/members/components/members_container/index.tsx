import { Dispatch, SetStateAction } from "react"
import { MemberButton } from "../member_button"
import { Member } from "../member_card"

export type MembersContainerProps = {
    title: string,
    subtitle: string,
    members: Member[],
    onhover: Dispatch<SetStateAction<string>>,
    onclick: Dispatch<SetStateAction<boolean>>
}

export const MembersContainer = (props: MembersContainerProps) => {
    return ( 
        <div className='py-8 px-12 flex flex-col max-w-5xl font-ps2p'>
            <div>
                <h1 className='text-3xl'>{props.title}</h1>
                <p className='text-black/50 dark:text-white/50'>{props.subtitle}</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8 py-10'>
                {props.members.map((element, index) => 
                    <MemberButton 
                        key={element.name + index} 
                        {...element} 
                        onclick={() => props.onclick(false)} 
                        onmouseout={() => props.onhover("hello world")}
                        onmouseover={() => props.onhover(element.name)}
                    />)
                }
            </div>
        </div>
    )
}