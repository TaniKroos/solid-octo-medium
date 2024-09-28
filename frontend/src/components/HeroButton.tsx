


export const HeroButton = ({text}:{text:String}) => {
    return (<button className="relative   px-4  mr-3 bg-[#f5ddb7] text-[#181818] text-md font-black rounded-lg shadow-[2px_2px_5px_rgba(24,24,24,0.41),inset_2px_2px_10px_rgba(255,255,255,0.69)] transition-all duration-300 ease-in-out hover:py-2.5 hover:rounded-[8px_8px_24px_24px]">
    <span className="icon-1 absolute top-[-250%] left-1/2 transform -translate-x-1/2 w-0 h-auto transition-all duration-500 ease-in-out z-[-1]"></span>
    <span className="icon-2 absolute top-[-200%] left-[90%] transform -translate-x-1/2 w-0 h-auto transition-all duration-500 ease-in-out z-[-2]"></span>
    <span className="icon-3 absolute top-[-130%] left-[20%] transform -translate-x-1/2 w-0 h-auto transition-all duration-500 ease-in-out z-[-2]"></span>
    <span className="icon-4 absolute top-[-300%] left-[10%] transform -translate-x-1/2 w-0 h-auto transition-all duration-500 ease-in-out z-[-2]"></span>
    <span className="icon-5 absolute top-[-350%] left-[90%] transform -translate-x-1/2 w-0 h-auto transition-all duration-500 ease-in-out z-[-2]"></span>
    {text}
</button>
)
}