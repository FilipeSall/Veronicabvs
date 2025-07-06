export const formatCaseValue = (caseValue: string): string => {
  switch (caseValue.toLowerCase()) {
    case 'sucesso':
      return 'Case de sucesso';
    case 'premiado':
      return 'Case premiado';
    default:
      return caseValue;
  }
};