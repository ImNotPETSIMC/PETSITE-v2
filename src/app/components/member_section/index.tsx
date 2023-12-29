import { useState } from "react"
import { MembersContainer } from "../members_container"
import { Window } from "../window"
import { MemberButtonProps } from "../member_button"

export type MembersSectionProps = {
    title: string,
    subtitle: string,
    members: MemberButtonProps[]
}

export const MemberSection = (props: MembersSectionProps) => {
    const [current, setCurrent] = useState<string>('"hello world"');

    return (
        <div className="flex flex-col items-center gap-2 z-10 w-10/12 max-w-7xl ">
            <div className='translate-x-4 2xl:translate-x-20'>
                <Window>
                    <MembersContainer members={props.members} title={props.title} subtitle={props.subtitle} onhover={setCurrent}/>
                </Window>
            </div>
            <div>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>{current}</span>)</span></p>
                </div>
              </Window>
            </div>
        </div>

    )
}