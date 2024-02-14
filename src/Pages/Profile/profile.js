
import React from 'react';
import { ResponsiveDrawer } from './SideNav';
import { ProfileContent } from './ProfileContent';

export const Profile = () => {
    return (
        <div>
            <ResponsiveDrawer />
            <ProfileContent />
        </div>

    );
};
