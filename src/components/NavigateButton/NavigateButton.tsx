import "./NavigateButton.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ label, route }: any) => {
  const navigate = useNavigate();

  return (
    <Button
      className="ron"
      onClick={() => navigate(route)}
      variant="outlined"
      size="large"
    >
      {label}
    </Button>
  );
};

export default NavigateButton;
