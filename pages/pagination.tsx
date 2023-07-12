import { Button, Pagination } from "@mantine/core";
import { ArrowLeft, ArrowLeft2, ArrowRight, ArrowRight2 } from "iconsax-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

function TablePagination({ activePage, totalPage, setPage }) {
  const handlePagination = ({
    action,
    number,
  }: {
    action?: "prev" | "next";
    number?: any;
  }) => {
    if (action === "next") {
      setPage((v) => v + 1);
    } else if (action === "prev") {
      setPage((v) => v - 1);
    } else if (number) {
      setPage(number);
    }
  };
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div
        className="grid grid-cols-[auto_1fr_auto] px-6 py-[18px] dark:border-t-[#252D3D] border-t border-t-[#FDFDFD] items-center"
        style={{
          boxShadow:
            resolvedTheme === "dark"
              ? "none"
              : "0px 6px 6px -6px rgba(193, 194, 198, 0.16), 0px -4px 40px rgba(193, 194, 198, 0.4)",
        }}
      >
        <Button
          onClick={() => handlePagination({ action: "prev" })}
          variant="outline"
          disabled={activePage < 2}
          className="rounded-lg border border-[#DBD9D9] dark:border-[#252D3D] dark:bg-[#252D3D] dark:text-white text-[14px] font-medium text-[#514747] leading-5"
          // styles={{
          //   root: {
          //     "&[data-disabled]": {
          //       background: "#e9ecef",
          //     },
          //   },
          // }}
          style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
          leftIcon={
            <ArrowLeft
              size="12"
              color={resolvedTheme === "dark" ? "#fff" : "#514747"}
              className={activePage < 2 && "opacity-40"}
            />
          }
        >
          Prev
        </Button>
        <Pagination
          className="justify-center"
          withControls={false}
          styles={(theme) => ({
            control: {
              borderRadius: "8px",
              color: resolvedTheme === "dark" ? "#FFF" : "#645B5B",
              fontWeight: 500,
              fontSize: "14px",
              border: "none",
              "&[data-active]": {
                background: resolvedTheme === "dark" ? "#1C2433" : "#CFD5F7",
                border: "8px",
                color: resolvedTheme === "dark" ? "#3851DD" : "#192463",
              },
              "&:not([data-disabled]):hover": {
                background: "transparent",
              },
              "&[data-active]:not([data-disabled]):hover": {
                background:
                  resolvedTheme === "dark"
                    ? "#1C2433 !important"
                    : "#CFD5F7 !important",
              },
            },
          })}
          value={activePage}
          onChange={(val) => handlePagination({ number: val })}
          total={totalPage}
        />
        <Button
          onClick={() => handlePagination({ action: "next" })}
          variant="outline"
          disabled={activePage >= totalPage}
          className="rounded-lg border border-[#DBD9D9] dark:border-[#252D3D] dark:bg-[#252D3D] dark:text-white text-[14px] font-medium text-[#514747] leading-5"
          style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
          rightIcon={
            <ArrowRight
              size="12"
              color={resolvedTheme === "dark" ? "#fff" : "#514747"}
              className={activePage >= totalPage && "opacity-40"}
            />
          }
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default TablePagination;
