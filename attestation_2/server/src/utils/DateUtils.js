module.exports = {
  DateToString: (d) => {
    const o = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(d).toLocaleString('ru', o);
  },
};
