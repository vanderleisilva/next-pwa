import { useState, useEffect } from "react";
import { Snackbar } from "@material-ui/core";

export const IsOnline = () => {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    setInterval(() => setConnected(window.navigator.onLine), 500);
  }, []);

  return (
    <Snackbar
      open={!connected}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      message="No connection found, working offline"
    />
  );
};
