import { Window } from "../window"

export type BreakWindowProps = {
    end?: boolean
}

export const BreakWindow = (props : BreakWindowProps) => {
    return (
        <>
            <div className='basis-full' />
            <div className={'basis-full ' +  (props.end ? 'flex justify-end max-w-7xl' : '-translate-x-40')}>
                <Window>
                    <div className='font-ps2p text-lg py-4 px-8'>
                        <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>"hello world"</span>)</span></p>
                    </div>
                </Window>
            </div>
            <div className='basis-full' />
        </>
    )
}