import { useNavigate } from "react-router-dom";

const NavigateButton = ({ label, route }: any) => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(route)}>{label}</button>;
};

export default NavigateButton;
