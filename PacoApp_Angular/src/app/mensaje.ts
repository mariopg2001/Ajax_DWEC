export interface Mensaje {
    titulo: string;
    descripcion: string;
    tipo: 'info' | 'exito' | 'aviso' | 'error';
}