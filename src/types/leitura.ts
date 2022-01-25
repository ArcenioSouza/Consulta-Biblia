export interface ILeitura {
   book: {abbrev: {pt: string, en: string}, 
      name: string, 
      author: string, 
      group: string, 
      version: string
   },
   chapter: {number: number, verses: number}
   verses: []
}