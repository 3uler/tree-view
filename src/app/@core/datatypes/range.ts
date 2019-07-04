export interface IRange {
  from: number;
  to: number;
}

export class Range {
  from: number;
  to: number;

  constructor(obj: IRange) {
    if (obj && !(obj.from && obj.to)) {
      throw new Error('Invalid Range');
    }
    this.from = obj.from;
    this.to = obj.to;
  }
}
