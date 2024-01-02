import { useState } from "react"
import { MembersContainer } from "../members_container"
import { Window } from "../../../../components/window"
import { Member, MemberCard } from "../member_card"
import { Tutor, TutorCard } from "../tutor_card"

export type MembersSectionProps = {
    members: {
        title: string,
        subtitle: string,
        minQuantity: number,
        content: Member[]
    }
    tutors: {
        title: string,
        subtitle: string,
        content: Tutor[]
    },
    loading?: boolean
}

export const MemberSection = ({ members, tutors, loading }: MembersSectionProps) => {
    while (members.content.length < members.minQuantity) members.content.push({ name: "Membro não definido" });
    if (!tutors.content.length) tutors.content.push({ name: "Tutor não definido" });

    const [hideMemberCard, setHideMemberCard] = useState<boolean>(true);
    const [hideTutorCard, setHideTutorCard] = useState<boolean>(true);
    const [member, setMember] = useState<Member>(members.content[0]);
    const [tutor, setTutor] = useState<Tutor>(tutors.content[0]);
    const [text, setText] = useState<string>("hello world");

    return (
        <>
            <div className={"gap-10 flex flex-col items-center" + (loading && "blur")} >
                <div className="flex flex-col items-center relative">
                    <Window>
                        <MembersContainer
                            members={members.content}
                            title={members.title}
                            subtitle={members.subtitle}
                            onhover={setText}
                            onclick={[setHideMemberCard, setMember]}
                        />
                    </Window>
                    <div className='z-10 p-4 absolute -bottom-1/2 lg:-right-24 transition-all duration-500'>
                        {!hideMemberCard &&
                            <Window onclose={() => setHideMemberCard(true)}>
                                <MemberCard
                                    onClickLeft={() => setMember(members.content[(members.content.length + members.content.indexOf(member) - 1) % members.content.length])}
                                    onClickRight={() => setMember(members.content[(members.content.indexOf(member) + 1) % members.content.length])}
                                    member={member}
                                />
                            </Window>
                        }
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <Window>
                        <div className='font-ps2p text-lg py-4 px-8 z-10'>
                            <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black dark:text-white'>"{text}"</span>)</span></p>
                        </div>
                    </Window>
                </div>
                <div className="flex flex-col items-center relative">
                    <Window>
                        <MembersContainer
                            members={tutors.content}
                            title={tutors.title}
                            subtitle={tutors.subtitle}
                            onhover={setText}
                            onclick={[setHideTutorCard, setTutor]}
                        />
                    </Window>
                    <div className='z-10 p-4 absolute -top-1/2 transition-all duration-500'>
                        {!hideTutorCard &&
                            <Window onclose={() => setHideTutorCard(true)}>
                                <TutorCard
                                    onClickLeft={() => setTutor(tutors.content[(tutors.content.length + tutors.content.indexOf(tutor) - 1) % tutors.content.length])}
                                    onClickRight={() => setTutor(tutors.content[(tutors.content.indexOf(tutor) + 1) % tutors.content.length])}
                                    member={tutor}
                                />
                            </Window>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}