import type { NextPage } from "next";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "../../components/item/item-card.tsx";
import UserCard from "../../components/user/user-card.tsx";
import UserDescription from "../../components/user/user-description.tsx";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h1> Username: {username} </h1>
      <Grid container spacing={2}>
        <Grid item>
          <UserCard />
        </Grid>
        <Grid item>
          <UserDescription />
        </Grid>
      </Grid>
      <Box m={5}>
        <Divider>Keebs Collection</Divider>
      </Box>
      <Grid container spacing={2}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ItemCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserPage;
