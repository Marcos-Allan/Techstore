'use client'
import { useMyContext } from "@/providers/theme"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface Props{
    decreasePage: any,
    increasePage: any,
    page: string
}

export default function Pagination(props: Props){

    const states:any = useMyContext()
    const { theme } = states

    return(
        <div
          className={`
          ${theme == 'light' ?  'bg-h-white-200' : 'bg-h-gray-300'}
          w-10/12 flex flex-row justify-around mb-8 py-2 lg:w-8/12 rounded-[32px]
          `}
        >

          <div onClick={() => props.decreasePage()}>
            <HiChevronLeft
            className={`
              ${theme == 'light' ? 'text-black' : 'text-white'}
              text-[22px]`}
            />
          </div>

          <p className={`${theme == 'light' ? 'text-black' : 'text-white'}`}>
            {props.page}
          </p>

          <div onClick={() => props.increasePage()}>
            <HiChevronRight
              className={`
                ${theme == 'light' ? 'text-black' : 'text-white'}
                text-[22px]`}
              />
          </div> 
        </div>
    )
}