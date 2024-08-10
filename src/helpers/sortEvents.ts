export const sortEvents = (arr: any[]) => arr.map((e: any) => {
  return { ...e, date: e.date.replace(/(\d+[.])(\d+[.])/, '$2$1') }
})
  .sort((a, b) => +(new Date(b.date)) - +(new Date(a.date)))

