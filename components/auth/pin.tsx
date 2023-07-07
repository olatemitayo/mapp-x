import React from "react";
import { PinInput, Group } from "@mantine/core";

export default function Pin() {
  return (
    <Group position="center">
      <PinInput length={4} />
    </Group>
  );
}
