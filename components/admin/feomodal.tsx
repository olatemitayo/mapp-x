import { useEffect, useState } from "react";
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
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconUpload, IconX } from "@tabler/icons-react";
import { FileWithPath } from "react-dropzone";

interface DetailsProps {
  img?: null | FileWithPath;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
}

interface IFeoModal {
  opened?: boolean;
  close?: () => void;
  URL?: string;
  feoList?: () => void;
}

export default function FeoModal({ opened, feoList, close, URL }: IFeoModal) {
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
  };
  const [details, setDetails] = useState<DetailsProps>(initialDetails);

  //hanlde submit details
  const handleSubmitDetails = async (e, method, url) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: {
            email: details.email,
            first_name: details.first_name,
            last_name: details.last_name,
            phone_number: details.phone,
          },
          location: details.city,
        }),
      });
      const data = await res.json();
      setDetails(initialDetails);
      feoList();
      close();
    } catch (error) {}
  };

  //hanlde edit details
  const handleEditDetails = async (e, method, url) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: {
            first_name: details.first_name,
            last_name: details.last_name,
            phone_number: details.phone,
          },
          location: details.city,
        }),
      });
      const data = await res.json();
      setDetails(initialDetails);
      feoList();
      close();
    } catch (error) {}
  };

  //to get data for the country
  const countryFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch("https://mapx.onrender.com/api/countries/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setCountry(
        data.results.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {}
  };

  useEffect(() => {
    countryFetch();
  }, []);
  //to get data for the state
  const stateFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(
        `https://mapx.onrender.com/api/countries/${details.country}/state`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setState(
        data.results.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {}
  };
  useEffect(() => {
    if (details.country) stateFetch();
  }, [details.country]);

  //to get data for the city
  const cityFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(
        `https://mapx.onrender.com/api/state/${details.state}/cities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setCity(
        data.results.reduce((acc, curr) => {
          acc.push({ label: curr.city, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {}
  };

  useEffect(() => {
    if (details.state) cityFetch();
  }, [details.state]);

  const fetchDetails = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setDetails({
        first_name: data?.user?.first_name,
        last_name: data?.user?.last_name,
        email: data?.user?.email,
        phone: data?.user?.phone_number,
        country: country.find((item) => item.label === data?.country)?.value,
        state: state?.find(
          (item) => item.label === data?.location_detail?.split(", ")[1]
        )?.value,
        city: data?.location,
      } as any);
    } catch (error) {}
  };

  useEffect(() => {
    if (URL) {
      fetchDetails();
    }
  }, [URL]);

  const createUrl = "https://mapx.onrender.com/api/admin/fieldofficers/create/";

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Add new FEO"
      size="40%"
      className="no-scrollbar"
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

                    reader.readAsDataURL(files[0]);

                    reader.onload = () => {
                      setImgPreview(reader.result as string);
                    };
                  }}
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
              {/* FIRST NAME  */}
              <TextInput
                placeholder="Enter Name"
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
              {/* LAST NAME  */}
              <TextInput
                placeholder="Enter Name"
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
              {/* EMAIL ADDRESS  */}
              <TextInput
                placeholder="Enter address"
                label="Email Address"
                size="md"
                withAsterisk
                disabled={URL ? true : false}
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
                <TextInput
                  placeholder="Phone number"
                  label="Phone number"
                  size="md"
                  withAsterisk
                  disabled={URL ? true : false}
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
                    input: "focus:border-[#C1C2C6]",
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
          {/* ASSIGN LOCATION  */}
          <Stepper.Step label="Assign Location" completedIcon={2}>
            <div className="flex flex-col gap-6">
              <Select
                label="Country"
                placeholder="Select Country"
                searchable
                nothingFound="No options"
                value={details.country}
                data={country || []}
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
                data={state || []}
                onChange={(value) => {
                  setDetails({
                    ...details,
                    state: value as string,
                  });
                }}
                classNames={{
                  label: "text-[16px] mb-2",
                  input: "bg-[#F5F5F6] border-[#C1C2C6] focus:border-[#C1C2C6]",
                }}
              />
              <Select
                label="City"
                placeholder="Select City"
                searchable
                nothingFound="No options"
                value={details.city}
                data={city || []}
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

                      reader.readAsDataURL(files[0]);

                      reader.onload = () => {
                        setImgPreview(reader.result as string);
                      };
                    }}
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
                        <div className="flex flex-col items-center justify-center gap-2 "></div>
                      ) : (
                        <>
                          <Dropzone.Idle>
                            <div className="flex flex-col items-center justify-center gap-1"></div>
                          </Dropzone.Idle>

                          <div className="flex flex-col items-center justify-center gap-2"></div>

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
                onClick={(e) => {
                  if (URL) {
                    handleEditDetails(e, "PATCH", URL);
                    return;
                  }
                  handleSubmitDetails(e, "POST", createUrl);
                }}
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
  );
}
