export interface ITableField {
  id: string;
  title: string;
}

interface IProps {
  tableFields: ITableField[];
  data: any[];
}

const Table = ({ tableFields, data }: IProps) => {
  return (
    <table>
      <tr>
        {tableFields.map((field) => (
          <th key={field.id}>{field.title}</th>
        ))}
      </tr>
      <tbody>
        {data.map((row: any) => (
          <tr>
            {tableFields.map((field) => (
              <td>{row[field.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
