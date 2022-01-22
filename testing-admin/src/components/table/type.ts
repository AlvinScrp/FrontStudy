export interface Page {
  index: number
  size: number
  total: number
}
export interface Column {
  fixed?: string | boolean
  prop?: string
  label?: string
  align?: string
  width?: number
  minWidth?: number
  formatter?: (row: any, column: any, cellValue: any, index: any) => any

  // constructor(
  //   fixed?: string | boolean,
  //   prop?: string,
  //   label?: string,
  //   align?: string,
  //   width?: number,
  //   minWidth?: number,
  //   format?: (value: any) => string
  // ) {
  //   this.prop = prop
  //   this.label = label
  //   this.align = align
  //   this.width = width
  //   this.minWidth = minWidth
  //   this.format = format
  // }
}
