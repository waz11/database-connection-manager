import { useParams } from "react-router-dom";

const ConnectionDetails = () => {
  const { id } = useParams();

  return <div>Connection Details {id}</div>;
};

export default ConnectionDetails;
