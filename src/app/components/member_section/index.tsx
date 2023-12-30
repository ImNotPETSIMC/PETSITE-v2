import { useState } from "react"
import { MembersContainer } from "../members_container"
import { Window } from "../window"
import { Member, MemberCard } from "../member_card"
import { Tutor, TutorCard } from "../tutor_card"

export type MembersSectionProps = {
    title: string,
    subtitle: string,
    second_title: string,
    second_subtitle: string,
    members: Member[],
    tutors: Tutor[],
    quantity: number
}

export const MemberSection = (props: MembersSectionProps) => {
    while (props.members.length < props.quantity) props.members.push({ name: "Membro não definido" });
    if (!props.tutors.length) props.tutors.push({ name: "Tutor não definido" });

    const [hideMemberCard, setHideMemberCard] = useState<boolean>(true);
    const [hideTutorCard, setHideTutorCard] = useState<boolean>(true);
    const [member, setMember] = useState<Member>(props.members[0]);
    const [tutor, setTutor] = useState<Member>(props.tutors[0]);
    const [text, setText] = useState<string>("hello world");

    return (
        <div className="translate-x-4 2xl:translate-x-20 flex flex-col basis-full">
            <div className="flex flex-col items-center gap-10 z-10 w-10/12 max-w-7xl">
                <Window>
                    <MembersContainer
                        members={props.members}
                        title={props.title}
                        subtitle={props.subtitle}
                        onhover={setText}
                        onclick={setHideMemberCard}
                    />
                </Window>
                <div className='relative bottom-1/4 -right-20 transition-all duration-500'>
                    {!hideMemberCard &&
                        <Window onclose={() => setHideMemberCard(true)}>
                            <MemberCard
                                onClickLeft={() => setMember(props.members[(props.members.length + props.members.indexOf(member) - 1) % props.members.length])}
                                onClickRight={() => setMember(props.members[(props.members.indexOf(member) + 1) % props.members.length])}
                                member={member}
                            />
                        </Window>
                    }
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 z-10 w-10/12 max-w-7xl">
                <Window>
                    <div className='font-ps2p text-lg py-4 px-8 z-10 w-max '>
                        <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>"{text}"</span>)</span></p>
                    </div>
                </Window>

                <Window>
                    <MembersContainer
                        members={props.tutors}
                        title={props.second_title}
                        subtitle={props.second_subtitle}
                        onhover={setText}
                        onclick={setHideTutorCard}
                    />
                </Window>
                <div className='relative bottom-1/3 transition-all duration-500'>
                    {!hideTutorCard &&
                        <Window onclose={() => setHideTutorCard(true)}>
                            <TutorCard
                                onClickLeft={() => setMember(props.members[(props.members.length + props.members.indexOf(member) - 1) % props.members.length])}
                                onClickRight={() => setMember(props.members[(props.members.indexOf(member) + 1) % props.members.length])}
                                member={tutor}
                            />
                        </Window>
                    }
                </div>
            </div>
        </div>


    )
}