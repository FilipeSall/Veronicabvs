export interface CasesInterface {
    id: number;
    nome: string;
    projeto: string;
    tipoDeCase?: 'sucesso' | 'premiado'
    path:string
    data:string
}