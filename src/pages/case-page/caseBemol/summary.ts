import { SummaryInterface } from "../../../interfaces/case";

export const summary: SummaryInterface = {
    bg: '#4c31e0',
    color: '#FFFFFF',
    items: [
        {
            id: '1.1',
            href: '#chapter-1-1',
            isSpecial: false,
            readingTime: 3,
            title: 'Resgatando clientes no fluxo de empréstimo por notificações segmentadas',
            subtitle: 'Apoio: Equipe de Marketing e equipe de Dados.'
        },
        {
            id: '1.2 e 1.3',
            href: '#chapter-1-2',
            isSpecial: false,
            readingTime: 1,
            title: 'Outras entregas',
        },
        {
            id: '1.4',
            href: '#chapter-1-4',
            isSpecial: true,
            readingTime: 0.5,
            title: 'Escolha da data do vencimento das parcelas de empréstimo (prévia)',
            specialNote: 'Case exclusivo para apresentação pessoal)'
        }
    ],
}