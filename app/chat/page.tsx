'use client'
import { useMyContext } from '@/providers/theme';
import { useState, useEffect, useRef } from 'react';

interface Msg{
  text: string,
  user: string,
  id: number,
}

const WebSocketClient = () => {

  const chatBox:any = useRef()
  
  const states:any = useMyContext()
  const { theme, menuOpen, toggleMenuOpen, userS } = states
  const [yourId, setYourId] = useState<any>(Math.floor(Math.random() * 9999))
  const [messages, setMessages] = useState<Msg[]>([]);
  const [webSocket, setWebSocket] = useState<any>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  

  useEffect(() => {
    menuOpen == true && toggleMenuOpen()
    const ws = new WebSocket('wss://techstore-backend.onrender.com');
  
    ws.addEventListener('open', (event) => {
      console.log('Conectado ao servidor WebSocket');
      setWebSocket(ws)
    });
  
    ws.addEventListener('message', (event) => {
      const data = event.data;
    
      if (data instanceof Blob) {
        const reader = new FileReader();
    
        reader.onload = function () {
          const textData = reader.result;
          console.log('Dados lidos do Blob:',textData);
          console.log(`${JSON.parse(textData as any).user}: ${JSON.parse(textData as any).text}`);
          setMessages((prevMessages:any) => [...prevMessages,
            {
              user: JSON.parse(textData as any).user,
              text: JSON.parse(textData as any).text,
              id: JSON.parse(textData as any).id
            }
          ]
          )
        };
    
        reader.readAsText(data);
      } else {
        try {
          const parsedData = JSON.parse(data);
          console.log('Mensagem JSON recebida do servidor:', parsedData);
        } catch (error) {
          console.error('Erro ao fazer parse da mensagem JSON:', error);
        }
      }
    });
    
    return () => {
      ws.close();
    };
  }, []);
  
  useEffect(() => {
    rolarAteOFinal()
  },[messages])

  const rolarAteOFinal = () => {
    if (chatBox.current) {
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }
  };

  const handleInputChange = (event:any) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
  
    if (webSocket && newMessage.trim() !== '') {
      const messageToSend = {
        text: newMessage,
        user: userS.isLogged == true ? userS.name : `user${yourId}`,
        id: yourId
      };
  
      webSocket.send(JSON.stringify(messageToSend));
      setNewMessage('');
    } else {
      return
    }
  }

  return (
    <div
      className={`
          screen
          ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
          relative
          w-full overflow-x-hidden flex flex-wrap flex-col justify-start items-center pt-[80px]
      `}
    >   
        <div
          ref={chatBox}
          className={`
            h-[calc(100%-60px)] w-full flex flex-col items-center px-3 py-2 overflow-y-scroll
            scrollbar-none lg:scrollbar-thin
            ${theme == 'light'
                ? 'lg:scrollbar-track-h-white-200 lg:scrollbar-thumb-h-gray-300'
                : 'lg:scrollbar-track-h-gray-300 lg:scrollbar-thumb-h-white-200'
            }
          `}
        >
          {messages && messages.map((msg) => (
            <>
              {msg.id !== yourId ? (
                <div key={Math.random() * 999999999999} className={`
                ${theme == 'light' ? 'text-black' : 'text-white'}
                ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
                  max-w-[200px] m-1 p-3 rounded-[8px] self-start rounded-es-none flex flex-col text-black
                `}>
                  <span className={`text-[#008cff] font-semibold text-[14px]`}>{msg.user}</span>
                  {msg.text}
                </div>
              ):(
                <div className={`
                ${theme == 'light' ? 'bg-[#c7fd9e]' : 'bg-[#075e54]'}
                max-w-[200px] m-1 p-3 rounded-[8px] self-end rounded-ee-none
                ${theme == 'light' ? 'text-black' : 'text-white'}
                `}>
                  {msg.text}
                </div>
              )}
            </>
          ))}

        </div>

        <form
          className={`w-full h-[60px] fixed bottom-0 left-0 flex flex-row items-center justify-center mt-3 px-4 pb-3 border-t pt-3
            ${theme == 'light' ? 'border-h-gray-300' : 'border-h-white-200'}
          `}
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            onChange={handleInputChange}
            value={newMessage}
            className={`
              flex-grow-[1] max-w-[420px] border ps-2 py-1
              ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
              ${theme == 'light' ? 'border-h-gray-300' : 'border-h-white-200'}
              ${theme == 'light' ? 'text-black' : 'text-white'}
              ${theme == 'light' ? 'focus:outline-h-gray-300' : 'focus:outline-h-white-200'}
              placeholder:${theme == 'light' ? 'text-black' : 'text-white'}
              outline-[0.5px]
            `}
            placeholder='Digite Sua Mensagem'
          />
          <input type='submit' className={`
              px-3 border border-s-0 py-1
              ${theme == 'light' ? 'bg-h-white-200' : 'bg-h-gray-300'}
              ${theme == 'light' ? 'text-black' : 'text-white'}
              ${theme == 'light' ? 'border-h-gray-300' : 'border-h-white-200'}
            `}
          />
        </form>

    </div>
  );
};

export default WebSocketClient;