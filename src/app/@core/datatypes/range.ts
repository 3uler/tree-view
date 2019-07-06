export interface IRange {
  from: number;
  to: number;
}

export class Range {
  from: number;
  to: number;

  constructor(obj: IRange) {
    this.from = obj.from;
    this.to = obj.to;
  }
}
