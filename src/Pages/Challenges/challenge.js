import { ResponsiveDrawer } from "../Profile/SideNav";
import { ChallengesContent } from './ChallengesContent';
import { Timeline } from './Timeline';
import { Grid } from "@mui/material";

export const Challenges = () => {
    return (
        <div>
            <ResponsiveDrawer />
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                <ChallengesContent/>
                </Grid>
                <Grid item xs={8}>
                    <Timeline/>
                </Grid>
            </Grid>
        </div>
    )
}
