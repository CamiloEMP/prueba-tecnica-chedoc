import type { Entry, ProgramType } from '~/types'

export const filterPrograms = (programs: Entry[], programType: ProgramType) => {
  return programs.filter(program => program.programType === programType && program.releaseYear > 0)
}

export const sortProgramByTitle = (programs: Entry[]) => {
  return programs.toSorted((a, b) => a.title.localeCompare(b.title))
}
