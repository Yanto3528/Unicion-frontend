export default (
  element,
  padding = 20,
  minRows = 1,
  maxRows = 5,
  lineHeight = 15
) => {
  const previousRows = element.rows;
  element.rows = minRows; // reset number of rows in textarea
  const textareaScrollHeight = element.scrollHeight - padding;

  const currentRows = ~~(textareaScrollHeight / lineHeight);

  if (currentRows === previousRows) {
    element.rows = currentRows;
  }

  if (currentRows >= maxRows) {
    element.rows = maxRows;
    element.scrollTop = element.scrollHeight;
  }
  return currentRows < maxRows ? currentRows : maxRows;
};
