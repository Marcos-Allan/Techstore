'use client'
import { useMyContext } from '@/providers/theme';
import React, { useState, useEffect } from 'react';

interface Msg{
  text: string,
  user: string
}

const WebSocketClient = () => {
  
  const states:any = useMyContext()
  const { theme } = states

  const [message, setMessage] = useState<Msg[]>([])
  const [text, setText] = useState<string>('')

  useEffect(() => {
    const socket = new WebSocket('wss://techstore-backend.onrender.com');

    socket.addEventListener('open', (event) => {
      console.log('Conectado ao servidor WebSocket');
    });

    socket.addEventListener('message', (event) => {
      console.log(`Mensagem recebida do servidor: ${event.data}`);
      setMessage([...message as any, {
        text: event.data,
        user: 'Oruam'
      }])
    });

    return () => {
      socket.close();
    };
  }, [message]);

  return (
    <div
      className={`
          screen
          ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
          relative
          w-full min-h-screen overflow-x-hidden flex flex-wrap flex-col justify-end items-center pt-[80px]
          scrollbar-none lg:scrollbar-thin
          ${theme == 'light'
              ? 'lg:scrollbar-track-h-white-200 lg:scrollbar-thumb-h-gray-300'
              : 'lg:scrollbar-track-h-gray-300 lg:scrollbar-thumb-h-white-200'
          }
      `}
    >
      <h1 className={`font-bold text-[19px] mb-2 ${theme == 'light' ? 'text-black' : 'text-white'} mt-2`}>WebSocket Client</h1>
        
        <div className={`
          flex-grow-[1] border border-h-gray-300 border-x-0 w-full flex flex-col px-3 py-2
        `}>

          <div className={`bg-white max-w-[200px] m-1 p-3 rounded-[8px] self-end rounded-ee-none`}>
            My message
          </div>
          {message && message.map((msg) => (
            <div key={Math.random() * 999999999999} className={`bg-white max-w-[200px] m-1 p-3 rounded-[8px] self-start rounded-es-none flex flex-col`}>
              <span className={`text-[#4c00ff] font-semibold text-[14px]`}>{msg.user}</span>
              {msg.text}
            </div>
          ))}

        </div>

        <form
          className={`w-full flex flex-row items-center justify-center mt-3 pb-3`}
          onSubmit={(e) => {
            e.preventDefault()
            setMessage([...message as any, {
              text: text,
              user: 'Marcos'
            }])
            setText('')
          }}
        >
          <input
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
            className={`
              flex-grow-[1] max-w-[420px] border ps-2 py-1
              ${theme == 'light' ? 'bg-h-white-100' : 'bg-h-black-500'}
              ${theme == 'light' ? 'border-h-gray-300' : 'border-h-white-200'}
              placeholder:${theme == 'light' ? 'text-black' : 'text-white'}
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