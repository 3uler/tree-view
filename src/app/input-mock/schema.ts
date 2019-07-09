export const schema = {
  a: {
    readonly: true
  },
  d: {
    values: [1, 3, 4],
    readonly: false
  },
  e: {
    minimalLength: 5
  },
  obj: {
    o2: {
      range: {
        from: 10,
        to: 100
      }
    }
  }
};
