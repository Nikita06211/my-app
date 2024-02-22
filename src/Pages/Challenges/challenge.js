import { ResponsiveDrawer } from "../Profile/SideNav";
import { ChallengesContent } from './ChallengesContent';
import { Timeline } from './Timeline';
import { Grid } from "@mui/material";

import './challenge.css';

export const Challenges = () => {
    return (
        <div className="container">
            <div className="drawer">
                <ResponsiveDrawer />
            </div>
            
            <div className="challenge">
                <ChallengesContent/>
            </div>
            
            <div className="timeline">
                <Timeline/>
            </div>
        </div>
    )
}