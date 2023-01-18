import imagesData from "./images.json";
import {
  AppBar,
  Container,
  ImageList,
  ImageListItem,
  TextField,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
export const Photography = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6"> Photography </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "80px", textAlign: "center" }}>
        <Typography variant="h2">Welcome to my Photography</Typography>
        <Typography paragraph>One stop destination for your Photos</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={150} cols={4}>
          {imagesData.map((imageObj) => (
            <ImageListItem key={imageObj.id}>
              <img
                src={imageObj.img}
                alt={imageObj.name}
                style={{ height: "150px" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Container>
        <center>
          <form>
            <Typography variant="h4"> ContactUs</Typography>
            <TextField
              style={{ width: "50%", margin: "5px" }}
              type={"text"}
              label="name"
            />
            <br />
            <TextField
              style={{ width: "50%", margin: "5px" }}
              type={"email"}
              label="Email"
            />
            <br />
            <TextField
              style={{ width: "50%", margin: "5px" }}
              type={"number"}
              label="PhoneNumber"
            />
            <br />
            <TextField
              style={{ width: "50%", margin: "5px" }}
              type={"text"}
              label="Address"
            />
            <br />
            <TextField
              style={{ width: "50%", margin: "5px" }}
              type={"text"}
              label="Purpose"
            />
            <br />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </center>
      </Container>
    </div>
  );
};
