import "./ConnectionField.scss";

interface IProps {
  title: string;
  value?: string;
}

const ConnectionField = ({ title, value = "" }: IProps) => (
  <div className="connection-field">
    <div>{title}</div>
    <div>{value}</div>
  </div>
);

export default ConnectionField;
