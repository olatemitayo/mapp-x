import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";

export default function FarmerModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
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
