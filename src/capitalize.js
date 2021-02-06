const capitalize = (text) => {
  if (text === '') {
    return '';
  }

  const [firstSymbol, ...restText] = text;
  return `${firstSymbol.toUpperCase()}${restText.join('')}`;
};

export default capitalize;
