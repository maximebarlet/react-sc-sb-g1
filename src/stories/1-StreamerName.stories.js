import React from 'react';
import StreamerName from '../ui/molecules/StreamerName';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'StreamerName',
    component: StreamerName,
    decorators: [withKnobs],
};

export const noCertified = () => <StreamerName 
    text={
        text("Text", "Ponce")
    }
    certified={
        (boolean("Certified", false))
    }
/>;

export const Certified = () => <StreamerName 
    text={
        text("Text", "Ponce")
    }
    certified={
        (boolean("Certified", true))
    }
/>;