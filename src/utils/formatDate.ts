const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('br-BR').format(date);

export default formatDate;
