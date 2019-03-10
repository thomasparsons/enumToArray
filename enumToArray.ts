const enumToArray = (enumValue: any): string[] => {
  return Object.keys(enumValue)
    .map((i) => enumValue[i])
}

export default enumToArray
