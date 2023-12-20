export default function Message() {
   return (
        <div
            className="fixed bottom-4 bg-h-white-200 h-auto opacity-90 w-10/12 p-4 overflow-hidden rounded-[8px] pb-[60px] border-[1px] border-solid border-h-gray-300"
        >
            <p
                className="text-black text-center"
            >Parece que você ainda não fez login, faça para aproveitar o maximo possivel dos dados</p>
            <div
                className="absolute w-full bottom-0 left-0 bg-h-gray-300 flex items-center py-2 justify-center h-[46px]"
            >
                <p
                    className="text-center"
                >
                    Fazer Login
                </p>
            </div>
        </div>
    )
}