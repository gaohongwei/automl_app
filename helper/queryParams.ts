function getFirstValue(options : Record<string, string>) {
  const firstKey = Object.keys(options)[0];
  return options[firstKey]
}

export { getFirstValue }