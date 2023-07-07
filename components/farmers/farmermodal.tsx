import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Stepper, TextInput } from "@mantine/core";
import Image from "next/image";

export default function FarmerModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add new FEO"
        size="40%"
        styles={{
          title: {
            fontWeight: "bold",
          },
          root: {
            width: "900px !important",
          },
        }}
        className=""
      >
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          iconSize={32}
          color="#BF2018"
          styles={{
            separator: {
              backgroundColor: "#8F9198",
              border: "none",
              height: "5px",
              borderRadius: "35px",
              color: "white",
            },
            separatorActive: {
              backgroundColor: "#C81107",
            },
          }}
        >
          <Stepper.Step label="Details">
            <div className="flex flex-col gap-4">
              <TextInput
                placeholder="Enter Name"
                label="First Name"
                size="md"
                withAsterisk
                classNames={{
                  label: "text-[16px] mb-2",
                }}
              />
              <TextInput
                placeholder="Enter Name"
                label="Last Name"
                size="md"
                withAsterisk
                classNames={{
                  label: "text-[16px] mb-2",
                }}
              />
              <TextInput
                placeholder="Enter address"
                label="Email Address"
                size="md"
                withAsterisk
                classNames={{
                  label: "text-[16px] mb-2",
                }}
              />
              <TextInput
                placeholder="Phone number"
                label="Email Address"
                size="md"
                withAsterisk
                classNames={{
                  label: "text-[16px] mb-2",
                }}
              />
            </div>
          </Stepper.Step>
          <Stepper.Step label="Assign Location">
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step label="Confirm Entries">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </Modal>

      <Group
        position="center"
        classNames={{
          Group: "flex justify-between border-0 ",
        }}
      >
        <Button
          onClick={open}
          className="px-2 py-1 rounded-[10px] bg-[#BF2018] hover:bg-[#BF2018]"
        >
          <span style={{ display: "inline-block", marginInlineEnd: "4px" }}>
            <Image width={24} height={24} src="/add_circle.svg" alt="add" />
          </span>
          Add Farmers
        </Button>
      </Group>
    </>
  );
}
