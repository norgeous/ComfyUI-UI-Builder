const calculateColumnCount = ({
  containerWidth,
  containerHeight,
  naturalImageWidth,
  naturalImageHeight,
  gapSizePx,
  imageCount,
}) => {
  const aspect = naturalImageHeight / naturalImageWidth;
  const aspectInv = naturalImageWidth / naturalImageHeight;

  const columnCounts = Array.from({ length: imageCount }, (_, i) => i + 1); // array of numbers

  // figure out the actual area each image will have for every column count
  const areas = columnCounts.map(columnCount => {
    const rowCount = Math.ceil(imageCount / columnCount);

    const hGaps = gapSizePx * (columnCount - 1);
    const vGaps = gapSizePx * (rowCount - 1);

    // the maximal size of each cell in the grid, given the current layout
    const cellWidthMax = (containerWidth - hGaps) / columnCount;
    const cellHeightMax = (containerHeight - vGaps) / rowCount;

    const displayImageWidth = Math.min(
      naturalImageWidth,
      cellWidthMax,
      cellHeightMax / aspect,
    );
    const displayImageHeight = Math.min(
      naturalImageHeight,
      cellHeightMax,
      cellWidthMax / aspectInv,
    );

    const area = displayImageWidth * displayImageHeight;

    return area;
  });

  // find index of item in areas with largest area
  const index = areas.reduce(
    (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
    0,
  );

  // add one
  const columnCount = index + 1;

  return columnCount;
};

export default calculateColumnCount;
