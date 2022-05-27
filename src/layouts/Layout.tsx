import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Grid container spacing={3} >
        <Grid item lg={2}>
          <Sidebar />
        </Grid>
        <Grid item lg={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
