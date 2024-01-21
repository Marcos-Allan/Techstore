import { useMyContext } from "@/providers/theme"

export default function Loader(){
    
    const states:any = useMyContext()
    const { theme, keyword, setKeyword } = states

    return(
        <div className={`flex items-center justify-center w-full`}>
          <div className={`
          w-12 h-12 border-4
          border-transparent border-solid rounded-full animate-spin
          ${theme == 'light' ? 'border-t-h-gray-300' : 'border-t-h-white-200'}
          `}></div>
        </div>
    )
}