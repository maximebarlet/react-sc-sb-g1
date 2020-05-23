import React from 'react';
import { action } from '@storybook/addon-actions';
import StreamerName, { colors, type } from '../ui/molecules/StreamerName';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { icons } from "../ui/molecules/StreamerName";

export default {
    title: "Name",
    component: StreamerName,
    decorators: [withKnobs],
  };
  
  const defaultValueType = "primary";
  
  const defaultValueColor = colors.brand_primary;
  
  export const Name = () => (
    <StreamerName
      type={select("Type", type, defaultValueType)}
      text={text("Text", "Ponce")}
      iconRight={select("Icon right", icons, icons.default)}
    />
  );