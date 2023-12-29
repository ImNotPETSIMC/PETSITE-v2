import { useId } from "react"
import { MemberButton, MemberButtonProps } from "../member_button"

export type MembersContainerProps = {
    title: string,
    subtitle: string,
    members: MemberButtonProps[];
}

export const MembersContainer = (props: MembersContainerProps) => {
    const undefinedMember = {
        name: "members",
        title: "Membro não definido",
        id: useId(),
        icon: {
          src: "/images/undefined_member.png",
          alt: "Members Icon"
        }
    };

    while(props.members.length < 12) props.members.push(undefinedMember);

    return ( 
        <div className='py-8 px-12 flex flex-col max-w-5xl font-ps2p'>
            <div>
                <h1 className='text-3xl'>{props.title}</h1>
                <p className='text-black/50'>{props.subtitle}</p>
            </div>
            <div className='flex items-center flex-wrap justify-between gap-8 py-10'>
                {props.members.map((element, index) => { return <MemberButton key={element.id +"-"+ index} {...element} onclick={() => console.log()} />})}
            </div>
        </div>
    )
}