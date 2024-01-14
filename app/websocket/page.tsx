'use client'
import React, { useState, useEffect } from 'react';

const WebSocketClient = () => {
  const [message, setMessage] = useState<string[]>()
  useEffect(() => {
    const socket = new WebSocket('wss://techstore-backend.onrender.com');

    // Evento de abertura de conexão WebSocket
    socket.addEventListener('open', (event) => {
      console.log('Conectado ao servidor WebSocket');
    });

    // Evento de recebimento de mensagem do servidor
    socket.addEventListener('message', (event) => {
      console.log(`Mensagem recebida do servidor: ${event.data}`);
      setMessage(event.data)
    });

    // Limpar a conexão ao desmontar o componente
    return () => {
      socket.close();
    };
  }, []); // O segundo argumento vazio garante que o useEffect seja executado apenas uma vez

  return (
    <div className='w-full flex items-center justify-center flex-col bg-black py-2 px-2'>
      <h1 className='text-white font-bold text-[19px] mb-2'>WebSocket Client</h1>
        <p className='text-white font-bold text-[19px]'>{message}</p>
    </div>
  );
};

export default WebSocketClient;