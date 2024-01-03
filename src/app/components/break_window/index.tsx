import { Window } from "../window"

export type BreakWindowProps = {
    end?: boolean
}

export const BreakWindow = (props : BreakWindowProps) => {
    return (
        <div className="w-full flex justify-center">
            <div className={"w-full flex " + (props.end ? 'justify-end lg:translate-x-10' : 'lg:-translate-x-10')}>
                <Window>
                    <div className='font-ps2p text-lg py-4 px-8'>
                        <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black dark:text-white'>"hello world"</span>)</span></p>
                    </div>
                </Window>
            </div>
        </div>
    )
}