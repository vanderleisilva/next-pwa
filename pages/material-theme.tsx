import dynamic from "next/dynamic";
import Container from "../components/container";
import { useTheme} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const ReactJson = dynamic(import("react-json-view"), { ssr: false });

const MaterialTheme = () => {
  const theme = useTheme();

  return (
    <Container>
      <Typography children="Material Theme" />
      <ReactJson
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={false}
        collapsed={1}
        src={theme}
      />
    </Container>
  );
};

export default MaterialTheme;
