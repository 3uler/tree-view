export interface IRange {
  from: number;
  to: number;
}

export class Range {
  from: number;
  to: number;

  constructor(obj: IRange) {
    Range.validateRange(obj);
    this.from = obj.from;
    this.to = obj.to;
  }

  private static validateRange(obj: IRange): void {
    const keys = Object.keys(obj);
    if (!(keys.includes('from') && keys.includes('to'))) {
      throw new Error('Invalid Range specified');
    }
    if (typeof obj.from !== 'number' || typeof obj.to !== 'number') {
      throw new Error('Range must be of type number');
    }
  }
}
