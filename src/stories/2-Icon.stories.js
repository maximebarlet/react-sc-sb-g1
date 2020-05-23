import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { colors } from "../ui/molecules/StreamerName";
import StreamerIcon, { icons } from "../ui/atoms/Icon";

export default {
  title: "Icon",
  component: StreamerIcon,
  decorators: [withKnobs],
};

const defaultValueColor = colors.brand_purple;

export const Icon = () => (
  <StreamerIcon
    icon={select("Icon", icons, "certification")}
  />
);
