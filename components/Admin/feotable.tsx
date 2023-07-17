import Image from "next/image";
import {
  Table,
  Progress,
  TextInput,
  Text,
  Loader,
  LoadingOverlay,
} from "@mantine/core";
import { Data } from "../database/adminfeodata";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import FeoModal from "./feomodal";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";

export default function FEOFarmertable() {
  const [tableData, setTableData] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [URL, setURL] = useState(null);
  const feoList = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(
        "https://mapx.onrender.com/api/admin/fieldofficers/list/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setTableData(data.results);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch");
    }
  };
  const deleteFEO = async (url) => {
    setDeleteLoading(true);
    const token = JSON.parse(localStorage.getItem("my-user"))?.access;
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setDeleteLoading(false);
        feoList();
        toast.success("FEO deleted successfully");
      }
    } catch (error) {
      console.log(error);
      setDeleteLoading(false);
      toast.error("Unable to delete!");
    }
  };

  useEffect(() => {
    feoList();
  }, []);
  const totalItems = tableData.length;

  const ths = (
    <tr>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        <div className="flex gap-1">
          Full name{" "}
          <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        <div className="flex gap-1">
          Phone <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Email <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Farmers <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Mapped Farmlands{" "}
          <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Progress <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Location <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Country <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
      <th className="!text-[#8F9198] !font-medium !text-[14px]">
        {" "}
        <div className="flex gap-1">
          Options <Image width={24} height={24} src={"/sort.svg"} alt="sort" />
        </div>
      </th>
    </tr>
  );

  const openDeleteModal = (url) => {
    modals.openConfirmModal({
      title: "Delete FEO",
      // closeOnConfirm: false,
      centered: true,
      children: (
        <Text size="sm">Are you sure you want to delete your FEO?</Text>
      ),
      labels: {
        confirm: deleteLoading ? (
          <p className="flex items-center gap-2">
            <Loader size="sm" />
            Please wait...
          </p>
        ) : (
          "Delete"
        ),
        cancel: "No don't delete",
      },
      confirmProps: {
        disabled: deleteLoading,
        color: "red",
        className: "bg-[#BF2018] hover:bg-[#BF2018]",
      },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        deleteFEO(url);
      },
    });
  };

  const rows = tableData.map((item) => (
    <tr
      key={item.name}
      className="cursor-pointer hover:bg-[#f0f0f0] hover:cursor-pointer"
    >
      <td className="!border-0">{item.full_name}</td>
      <td className="!border-0">{item.user.phone_number}</td>
      <td className="!border-0">{item.user.email}</td>
      <td className="!border-0">{item.num_farmers_assigned}</td>
      <td className="!border-0">{item.num_farms_mapped}</td>
      <td className="!border-0">
        <span>
          <span>{+item.progress_level.toFixed(2)}%</span>
          <Progress color="#BF2018" value={item.progress_level} />
        </span>
      </td>
      <td className="!border-0">{item.location_detail}</td>
      <td className="!border-0">
        <span className="flex gap-2">
          <Image src={"/Flag.svg"} width={20} height={20} alt="flag" />
          <span>{item.country}</span>
        </span>
      </td>

      <td className="!border-0">
        <div className="flex gap-4">
          <Image
            onClick={() => openDeleteModal(item?.delete_url)}
            width={20}
            height={20}
            alt=""
            src={"/delete.svg"}
            className="cursor-pointer"
          />
          <Image
            onClick={() => {
              setURL(item.update_url);
              open();
            }}
            width={20}
            height={20}
            alt=""
            src={"/editt.svg"}
            className="cursor-pointer"
          />
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="flex flex-col h-full gap-5 p-6 mt-4 rounded-[20px] bg-white">
      <div className="flex items-center justify-between gap-1">
        <div className="flex gap-2">
          <h2 className="text-2xl font-semibold">All FEOs</h2>
          <span className="bg-[#FCE9E8] text-[#BF2018] px-3 py-1 rounded-[32px]">
            {totalItems}
          </span>
        </div>
        <div>
          <div className="flex gap-3">
            <TextInput
              className="border-2  w-[284px] rounded-[8px] px-4 "
              placeholder="search"
              withAsterisk
              classNames={{
                input: "border-none",
              }}
            />
            <div className="flex gap-2 items-center px-4 border rounded-[8px]">
              <Image width={24} height={24} alt="columns" src="/columns.svg" />
              <p>Colum Visibility</p>
            </div>
            <div>
              <Image width={40} height={40} alt="columns" src="/filter.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-2 overflow-auto no-scrollbar ">
        <Table
          captionSide="bottom"
          className="h-[100vh] w-[107vw] overflow-auto"
        >
          <thead className="flex-1 overflow-auto overflow-x-auto">{ths}</thead>
          <tbody className="overflow-x-scroll">{rows}</tbody>
        </Table>
      </div>
      <FeoModal URL={URL} opened={opened} close={close} />
      <LoadingOverlay visible={deleteLoading} />
    </div>
  );
}
