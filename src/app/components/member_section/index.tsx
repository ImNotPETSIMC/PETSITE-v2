import { useState } from "react"
import { MembersContainer } from "../members_container"
import { Window } from "../window"
import { Member, MembersCard } from "../member_card"

export const undefinedMember : Member = {
    name: "Membro não definido",
    spotify_track_url: "4AFsRbaLKRWo3dDtjDFA2V"
};

export type MembersSectionProps = {
    title: string,
    subtitle: string,
    members: Member[]
}

export const MemberSection = (props: MembersSectionProps) => {
    if(props.title == 'Membros') while(props.members.length < 12) props.members.push(undefinedMember);

    const [currentText, setCurrentText] = useState<string>('"hello world"');

    return (
        <div className="flex flex-col basis-full relative">
            <div className="flex flex-col items-center gap-2 z-10 w-10/12 max-w-7xl">
                <div className='translate-x-4 2xl:translate-x-20 group'>
                    <Window>
                        <MembersContainer members={props.members} title={props.title} subtitle={props.subtitle} onhover={setCurrentText}/>
                    </Window>
                    <div className='absolute top-0 translate-x-4 translate-y-20 lg:translate-x-32 z-10 opacity-0 group-has-[:checked]:opacity-100'>
                        <Window>
                            <MembersCard member={undefinedMember} />
                        </Window>
                    </div>
                </div>
                <div>
                <Window>
                    <div className='font-ps2p text-lg py-4 px-8'>
                    <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>{currentText}</span>)</span></p>
                    </div>
                </Window>
                </div>
            </div>
        </div>

    )
}