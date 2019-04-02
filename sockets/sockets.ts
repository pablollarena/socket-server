import { Socket } from 'socket.io';

export const desconectar = (cliente: Socket) => {
    console.log('Cliente Desconectado');
}

//Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: { de: string, cuerpo: string}) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);
    });
}