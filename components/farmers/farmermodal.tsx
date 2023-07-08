import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Stepper,
  TextInput,
  Popover,
  Select,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "NG",
    placeholder: "+234 (0) 000-0000-000",
  },
  {
    name: "KE",
    placeholder: "+254 (0) 000-0000-000",
  },
  {
    name: "UG",
    placeholder: "+256 (0) 000-0000-000",
  },
  {
    name: "USA",
    placeholder: "+1 (0) 000-0000-000",
  },
];

export default function FarmerModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [country, setCountry] = useState([]);
  const [selected, setSelected] = useState([]);
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
            borderRadius: "10px",
          },
          close: {},
        }}
      >
        <div className="pt-10">
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
              <div className="flex flex-col gap-4 ">
                <TextInput
                  placeholder="Enter Name"
                  label="First Name"
                  size="md"
                  withAsterisk
                  required
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                <TextInput
                  placeholder="Enter Name"
                  label="Last Name"
                  size="md"
                  withAsterisk
                  required
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                <TextInput
                  placeholder="Enter address"
                  label="Email Address"
                  size="md"
                  withAsterisk
                  required
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                <div className="flex relative">
                  <div className="absolute top-10 left-10 z-30">
                    <Popover width={75} position="bottom" withArrow shadow="md">
                      <Popover.Target>
                        <Image
                          width={24}
                          height={24}
                          src="/arrowDown.svg"
                          alt="arrow"
                          className="cursor-pointer"
                        />
                      </Popover.Target>
                      <Popover.Dropdown className="rounded-md">
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-1">
                            <h4>KE</h4>
                          </div>

                          <div className="flex gap-1">
                            <h4>UG</h4>
                          </div>

                          <div className="flex gap-1">
                            <h4>NG</h4>
                          </div>

                          <div className="flex gap-1 ">
                            <h4>US</h4>
                          </div>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
                  <TextInput
                    placeholder="Phone number"
                    label="Email Address"
                    size="md"
                    withAsterisk
                    required
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: "px-16 focus:border-[#C1C2C6]",
                    }}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={nextStep}
                    className="bg-[#bf2018] text-[#fff] hover:bg-[#bf2018]"
                  >
                    Assign Location
                    <span className="ms-2">
                      <Image
                        width={16}
                        height={16}
                        src="/forward.svg"
                        alt="forward"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step label="Assign Location">
              <div className="flex flex-col gap-6">
                <Select
                  label="Country"
                  placeholder="Select Country"
                  searchable
                  nothingFound="No options"
                  data={["Nigeria", "Kenya", "Uganda", "USA"]}
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                <Select
                  label="State"
                  placeholder="Select State"
                  searchable
                  nothingFound="No options"
                  data={["Nigeria", "Kenya", "Uganda", "USA"]}
                  classNames={{
                    label: "text-[16px] mb-2",
                    input:
                      "bg-[#F5F5F6] border-[#C1C2C6] focus:border-[#C1C2C6]",
                  }}
                />
                <Select
                  label="City"
                  placeholder="Select City"
                  searchable
                  nothingFound="No options"
                  data={["Nigeria", "Kenya", "Uganda", "USA"]}
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: "bg-[#F5F5F6]  focus:border-[#C1C2C6]",
                  }}
                />
              </div>
              <div className="mt-6 flex justify-between">
                <Button
                  variant="default"
                  onClick={prevStep}
                  className="bg-none text-[#4A4C58] hover:bg-none"
                >
                  <span className="me-2">
                    <Image width={16} height={16} src="/back.svg" alt="back" />
                  </span>
                  Details
                </Button>
                <Button
                  onClick={nextStep}
                  className="bg-[#bf2018] text-[#fff] hover:bg-[#bf2018]"
                >
                  Assign Location
                  <span className="ms-2">
                    <Image
                      width={16}
                      height={16}
                      src="/forward.svg"
                      alt="forward"
                    />
                  </span>
                </Button>
              </div>
            </Stepper.Step>
            <Stepper.Step label="Confirm Entries">
              Step 3 content: Get full access
              <div>
                <Button
                  variant="default"
                  onClick={prevStep}
                  className="bg-[#bf2018] text-white"
                >
                  Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
              </div>
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </div>
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
