import { Button } from "@mui/material";

const CustomButton = ({ label, icon, onClick, href, disabled = false }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      onClick={onClick}
      href={href}
      disabled={disabled}
      sx={{
        bgcolor: disabled ? "#bfd4e8" : "#8fbce5",
        color: "white",
        borderRadius: "25px",
        padding: "10px 30px",
        textTransform: "none",
        fontSize: "1rem",
        fontFamily: '"EB Garamond", serif',
        fontWeight: "bold",
        boxShadow: "none",
        "&:hover": {
          bgcolor: disabled ? "#bfd4e8" : "#8eb3ca",
          boxShadow: disabled ? "none" : "0 4px 10px rgba(0,0,0,0.1)",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
