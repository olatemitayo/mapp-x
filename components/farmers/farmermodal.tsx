import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Stepper,
  TextInput,
  Text,
  rem,
  Popover,
  Select,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { FileWithPath } from "react-dropzone";
const countryUrl = "";
const stateUrl = "";
const cityUrl = "";

interface DetailsProps {
  img?: null | FileWithPath;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  latOne: string;
  longOne: string;
  latTwo: string;
  longTwo: string;
  latThree: string;
  longThree: string;
}

export default function FarmerModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const [imgPreview, setImgPreview] = useState("");
  const [imgSize, setImgSize] = useState(0);
  const [fileName, setFileName] = useState("");
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const initialDetails = {
    img: null,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    latOne: "",
    longOne: "",
    latTwo: "",
    longTwo: "",
    latThree: "",
    longThree: "",
  };
  const [details, setDetails] = useState<DetailsProps>(initialDetails);

  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/fieldofficers/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await res.json();

      setDetails(initialDetails);
      console.log(data);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  //to get data for the country
  const countryFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(countryUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setCountry(
        data.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  //to get data for the state
  const stateFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(stateUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setState(
        data.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  //to get data for the city
  const cityFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(cityUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setCity(
        data.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };

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
        {/* DETAILS MODAL  */}
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
            {/* DETAILS  */}
            <Stepper.Step label="Details" completedIcon={1}>
              <div className="flex flex-col gap-4 ">
                {/* DROPZONE  */}
                <div>
                  <Dropzone
                    onDrop={(files) => {
                      const reader = new FileReader();
                      setDetails({
                        ...details,
                        img: files[0],
                      });
                      setFileName(files[0].name);
                      setImgSize(files[0].size);
                      const data = files[0].size;
                      console.log(data / 1024);
                      reader.readAsDataURL(files[0]);

                      reader.onload = () => {
                        setImgPreview(reader.result as string);
                      };
                    }}
                    // onReject={(files) => console.log("rejected files", files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    styles={{
                      root: {
                        border: "1px dashed #F2A29D",
                        "&:hover": {
                          border: "1px dashed #F2A29D",
                        },
                      },
                    }}
                  >
                    <Group
                      className="flex flex-col"
                      position="center"
                      spacing="xl"
                      style={{ minHeight: rem(220), pointerEvents: "none" }}
                    >
                      <Dropzone.Accept>
                        <IconUpload size="3.2rem" stroke={1.5} />
                      </Dropzone.Accept>
                      <Dropzone.Reject>
                        <IconX size="3.2rem" stroke={1.5} />
                      </Dropzone.Reject>
                      {imgPreview ? (
                        <div className="flex flex-col items-center justify-center gap-2 ">
                          <div className="rounded-[11px] p-[1px] border border-[#7C827D]">
                            <Image
                              src={imgPreview}
                              alt=""
                              width={150}
                              height={150}
                            />
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <span className=" text-davy-grey text-14">
                              {fileName}
                            </span>
                            <span className=" text-phillipine-silver text-[10px]">
                              {imgSize}MB Image
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Dropzone.Idle>
                            <div className="flex flex-col items-center justify-center gap-1">
                              <Image
                                src={"/add_photo.svg"}
                                alt={"add_photo.svg"}
                                width={47.73}
                                height={47.73}
                              />
                            </div>
                          </Dropzone.Idle>

                          <Link href={"/"}>
                            <Button
                              className="w-full mt-2 rounded-lg text-engineering"
                              styles={{
                                root: {
                                  background: "#F8E7E7 !important",
                                  height: "50px",
                                  "&:hover": {
                                    background: " !important ",
                                  },
                                },
                              }}
                            >
                              Choose File
                            </Button>
                          </Link>
                        </>
                      )}
                    </Group>
                  </Dropzone>
                </div>

                {/* ENTER FIRST NAME  */}
                <TextInput
                  placeholder="Enter First Name"
                  label="First Name"
                  size="md"
                  withAsterisk
                  required
                  value={details.first_name}
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      first_name: e.target.value,
                    });
                  }}
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                {/* ENTER LAST NAME  */}
                <TextInput
                  placeholder="Enter Last Name"
                  label="Last Name"
                  size="md"
                  withAsterisk
                  required
                  value={details.last_name}
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      last_name: e.target.value,
                    });
                  }}
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                {/* ENTER EMAIL ADDRESS  */}
                <TextInput
                  placeholder="Enter Email address"
                  label="Email Address"
                  size="md"
                  withAsterisk
                  required
                  value={details.email}
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      email: e.target.value,
                    });
                  }}
                  classNames={{
                    label: "text-[16px] mb-2",
                    input: " focus:border-[#C1C2C6] ",
                  }}
                />
                <div className="relative flex">
                  <div className="absolute z-30 top-10 left-10">
                    {/* <Popover width={75} position="bottom" withArrow shadow="md">
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
                    </Popover> */}
                  </div>
                  {/* ENTER PHONE NUMBER  */}
                  <TextInput
                    placeholder="Phone number"
                    label="Phone number"
                    size="md"
                    withAsterisk
                    required
                    value={details.phone}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        phone: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <Select
                    label="Country"
                    placeholder="Select Country"
                    searchable
                    nothingFound="No options"
                    value={details.country}
                    data={country}
                    onChange={(value) => {
                      setDetails({
                        ...details,
                        country: value as string,
                      });
                    }}
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
                    value={details.state}
                    data={state}
                    onChange={(value) => {
                      setDetails({
                        ...details,
                        state: value as string,
                      });
                    }}
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
                    value={details.city}
                    data={city}
                    onChange={(value) => {
                      setDetails({
                        ...details,
                        city: value as string,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      input: "bg-[#F5F5F6]  focus:border-[#C1C2C6]",
                    }}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={nextStep}
                    className="bg-[#bf2018] text-[#fff] hover:bg-[#bf2018]"
                  >
                    Map Farmland
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
            {/* MAP FARMLAND  */}
            <Stepper.Step label="Assign Location" completedIcon={2}>
              {/* POINT 1  */}
              <div className="flex flex-col gap-6 mt-2">
                <div className="flex justify-between gap-5">
                  <TextInput
                    placeholder="Lat"
                    label="Point 1"
                    size="md"
                    required
                    value={details.latOne}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        latOne: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                  <TextInput
                    placeholder="Long"
                    label="Point 1"
                    size="md"
                    required
                    value={details.longOne}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        longOne: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                </div>
              </div>
              {/* POINT 2  */}
              <div className="flex flex-col gap-6 mt-2">
                <div className="flex justify-between gap-5">
                  <TextInput
                    placeholder="Lat"
                    label="Point 2"
                    size="md"
                    required
                    value={details.latTwo}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        latTwo: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                  <TextInput
                    placeholder="Long"
                    label="Point 2"
                    size="md"
                    required
                    value={details.longTwo}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        longTwo: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                </div>
              </div>
              {/* POINT 3  */}
              <div className="flex flex-col gap-6 mt-2">
                <div className="flex justify-between gap-5">
                  <TextInput
                    placeholder="Lat"
                    label="Point 3"
                    size="md"
                    required
                    value={details.latThree}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        latThree: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                  <TextInput
                    placeholder="Long"
                    label="Point 2"
                    size="md"
                    required
                    value={details.longThree}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        longThree: e.target.value,
                      });
                    }}
                    classNames={{
                      label: "text-[16px] mb-2",
                      root: "flex-1",
                      input: " focus:border-[#C1C2C6]",
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-6">
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
                  Confirm Entries
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
            {/* CONFIRM ENTRIES  */}
            <Stepper.Step label="Confirm Entries" completedIcon={3}>
              <div className="flex flex-col gap-5 my-7">
                <div className="flex flex-col justify-between">
                  <div>
                    {/* image preview  */}
                    <Dropzone
                      onDrop={(files) => {
                        const reader = new FileReader();
                        setDetails({
                          ...details,
                          img: files[0],
                        });
                        setFileName(files[0].name);
                        setImgSize(files[0].size);
                        const data = files[0].size;
                        console.log(data / 1024);
                        reader.readAsDataURL(files[0]);

                        reader.onload = () => {
                          setImgPreview(reader.result as string);
                        };
                      }}
                      // onReject={(files) => console.log("rejected files", files)}
                      maxSize={3 * 1024 ** 2}
                      accept={IMAGE_MIME_TYPE}
                      styles={{
                        root: {
                          border: "1px dashed #C81107",
                          "&:hover": {
                            border: "1px dashed #6D0802",
                          },
                        },
                      }}
                    >
                      <Group
                        className="flex flex-col"
                        position="center"
                        spacing="xl"
                        style={{ minHeight: rem(220), pointerEvents: "none" }}
                      >
                        <Dropzone.Accept>
                          <IconUpload size="3.2rem" stroke={1.5} />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                          <IconX size="3.2rem" stroke={1.5} />
                        </Dropzone.Reject>
                        {imgPreview ? (
                          <div className="flex flex-col items-center justify-center gap-2 ">
                            <div className="rounded-[11px] p-[1px] border border-[#7C827D]">
                              <Image
                                src={imgPreview}
                                alt=""
                                width={150}
                                height={150}
                              />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                              <span className=" text-davy-grey text-14">
                                {fileName}
                              </span>
                              <span className=" text-phillipine-silver text-[10px]">
                                {imgSize}MB Image
                              </span>
                            </div>
                          </div>
                        ) : (
                          <>
                            <Dropzone.Idle>
                              <div className="flex flex-col items-center justify-center gap-1">
                                <Image
                                  src={"/create-card/upload.png"}
                                  alt={"upload"}
                                  width={47.73}
                                  height={47.73}
                                />
                                <p className=" text-phillipine-silver text-[8.37px] ">
                                  image, smaller than 10MB
                                </p>
                              </div>
                            </Dropzone.Idle>

                            <div className="flex flex-col items-center justify-center gap-2">
                              <Text
                                size="xl"
                                inline
                                className=" text-[10.05px] text-dim "
                              >
                                Drag and drop your file here or
                              </Text>
                            </div>

                            <Link href={"/"}>
                              <Button
                                className="w-full mt-2 rounded-lg text-engineering"
                                styles={{
                                  root: {
                                    background: "#F8E7E7 !important",
                                    height: "50px",
                                    "&:hover": {
                                      background: " !important ",
                                    },
                                  },
                                }}
                              >
                                Choose File
                              </Button>
                            </Link>
                          </>
                        )}
                      </Group>
                    </Dropzone>
                  </div>
                  <h5>{details?.img?.name}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>First Name</h5>
                  <h5>{details.first_name}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Last Name</h5>
                  <h5>{details.last_name}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Email Address</h5>
                  <h5>{details.email}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Phone Number</h5>
                  <h5>{details.phone}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Country</h5>
                  <h5>{details.country}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>State</h5>
                  <h5>{details.state}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>City</h5>
                  <h5>{details.city}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Point 1</h5>
                  <h5>{`${details.latOne} ${details.longOne}`}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Point 2</h5>
                  <h5>{`${details.latTwo} ${details.longTwo}`}</h5>
                </div>
                <div className="flex justify-between">
                  <h5>Point 3</h5>
                  <h5>{`${details.latThree} ${details.longThree}`}</h5>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button
                  variant="default"
                  onClick={prevStep}
                  className="bg-none text-[#4A4C58] hover:bg-none"
                >
                  <span className="me-2">
                    <Image width={16} height={16} src="/back.svg" alt="back" />
                  </span>
                  Assign Location
                </Button>
                <Button
                  onClick={handleSubmitDetails}
                  className="bg-[#bf2018] text-[#fff] hover:bg-[#bf2018]"
                >
                  Save Entries
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
            {/* <Stepper.Completed>Completed!</Stepper.Completed> */}
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
          Add new
        </Button>
      </Group>
    </>
  );
}
