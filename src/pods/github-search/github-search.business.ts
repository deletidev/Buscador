export const totalPages = (linkHeader: string, page: number): number => {
  const lastPattern = /(?<=<)([\S]*)(?=>; rel="Last")/i;
  const last = linkHeader.match(lastPattern);
  const regex = /page=(\d+)/;

  if (last) {
    const match = last[0].match(regex);
    if (match) {
      return parseInt(match[1]);
    }
  }
  return page;
};
