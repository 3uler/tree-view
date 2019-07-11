export const schema = {
  hello: {
    readonly: true
  },
  'ddd ddd': {
    values: [1, 3, 4],
    readonly: false
  },
  Eee: {
    minimalLength: 5
  },
  Object: {
    o2: {
      range: {
        from: 10,
        to: 100
      }
    },
    o3: {
      readonly: true
    },
    o4: {
      readonly: true
    }
  }
};
