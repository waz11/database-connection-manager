
interface ITableField {
  id: string;
  title: string;
}

const tableFields: ITableField[] = [
  { id: "name", title: "Database Name" },
  { id: "username", title: "Username" },
  { id: "type", title: "Database Type" },
];

const Table = ({ data }: any) => {
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
