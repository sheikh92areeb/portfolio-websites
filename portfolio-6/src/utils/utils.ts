export const yearsFrom = (year: number): number => {
  const currentYear = new Date().getFullYear()
  return currentYear - year
}

export const ratings = new Array(5)
ratings.fill({icon: 'star',style: { fontVariationSettings: '"FILL" 1' } })