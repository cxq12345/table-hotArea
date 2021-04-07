const getTableHotArea = (data, func) => {
  const { columns, style, title } = data;
  const { tableRowClick = () => {}, showOptions = null } = func;
  const hotColumns = columns.map((col) => {
    return {
      ...col,
      onCell: (record) => ({
        onClick: (event) => {
          tableRowClick(record, event);
        },
      }),
    };
  });
  const columnsFull = [...hotColumns];
  if (showOptions) {
    columnsFull.push({
      key: "identifyNumber",
      dataIndex: "identifyNumber",
      title: "操作" || title,
      width: style?.width || 120,
      align: style?.align || "left",
      render: (statu, record) => showOptions(record),
    });
  }
  return columnsFull;
};
export { getTableHotArea };
