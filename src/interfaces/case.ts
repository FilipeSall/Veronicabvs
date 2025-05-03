export interface CasesInterface {
    id: number;
    nome: string;
    projeto: string;
    tipoDeCase?: 'sucesso' | 'premiado'
    path:string
    data:string
    bgColor:string,
    imgHover:string
}

export interface pushNotificationsInterface {
    alt:string
    video:string
    topImg:string
}