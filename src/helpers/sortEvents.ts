export const sortEvents = (arr: any[]) => arr.sort((a, b) => +(new Date(b.date)) - +(new Date(a.date))).map((e: any) => {
  return { ...e, date: new Date(e.date).getFullYear() }
})

