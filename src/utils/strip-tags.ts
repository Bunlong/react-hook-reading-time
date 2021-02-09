function stripTags(text: string) {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  const reg = new RegExp(pattern, 'gi');
  return text.replace(reg, '');
}

export default stripTags;
