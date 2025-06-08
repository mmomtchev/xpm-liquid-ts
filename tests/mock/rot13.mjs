export default function (Liquid) {
  this.registerFilter('rot13', (x) => {
    return x
      .replace(/[a-z]/gi,
        (letter) =>
          String.fromCharCode(letter.charCodeAt(0) +
            (letter.toLowerCase() <= 'm' ? 13 : -13)));
  });
};
