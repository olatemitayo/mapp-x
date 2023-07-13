import React, { useState } from "react";

export default function Table() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
    pageCount,
    state,
    prepareRow,
    selectedFlatRows,
  }: any = useTable(
    {
      columns: CategoryColumn as any,
      data: CategoryData ?? [],
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns: any) => {
        return [
          {
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }: any) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );
  return (
    <>
      <table
        {...getTableProps()}
        className="bg-[white] dark:bg-[#161C27] text-sm font-normal dark:text-white w-full"
      >
        <thead className="">
          {headerGroups.map((headerGroups, idx) => (
            <tr
              className="dark:text-white"
              key={idx}
              {...headerGroups.getHeaderGroupProps()}
            >
              {headerGroups.headers.map((columns, index) => (
                <th
                  key={index}
                  {...columns.getHeaderProps()}
                  className="font-medium bg-[#F9FAFB] text-left dark:bg-[#232A37] dark:text-white text-[14px] text-xds-eneutral-9 py-4"
                >
                  {/* {columns.render("Header")} */}
                  {sortHeadings.includes(columns.Header) ? (
                    <span className="flex items-center gap-2">
                      {columns.Header}
                      <span
                        onClick={() => {
                          setCurrentFilter(columns.Header);
                          sortData(columns.id);
                        }}
                        className="flex cursor-pointer"
                      >
                        <ArrowDown
                          size="14"
                          color={
                            currentFilter === columns.Header &&
                            descending === "No"
                              ? "#BF2018"
                              : "#5D5B60"
                          }
                        />
                        <ArrowUp
                          size="14"
                          className="ml-[-8px]"
                          color={
                            currentFilter === columns.Header &&
                            descending === "Default"
                              ? "#BF2018"
                              : "#5D5B60"
                          }
                        />
                      </span>
                    </span>
                  ) : (
                    columns.render("Header")
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, id) => {
            prepareRow(row);
            return (
              <tr key={id} {...row.getRowProps()} className="text-left">
                {row.cells.map((cell) => {
                  return cell.column.Header === "Status" ? (
                    <td {...cell.getCellProps()} className="py-3 text-left">
                      {cell.value === true ? (
                        <span className="flex items-center gap-3">
                          <span className="rounded-2xl w-fit flex px-2 py-1 bg-[#E7F9F0] dark:bg-[#1C331E] items-center gap-1">
                            <Icon
                              icon="carbon:dot-mark"
                              color={
                                resolvedTheme === "dark" ? "#0BA257" : "#0DBF66"
                              }
                              height={10}
                              width={10}
                            />
                            <p className="text-[#0DBF66] text-sm leading-[160%]">
                              Active
                            </p>
                          </span>
                          {cell.row.original?.is_pending_deactivation && (
                            <Tooltip
                              label={`Staff scheduled for deactivation by ${moment(
                                cell.row.original?.deactivation_schedule
                              ).format("LL")}`}
                              color="dark"
                              withArrow
                              arrowSize={6}
                              width={200}
                              multiline
                            >
                              <Clock
                                size="24"
                                className="cursor-pointer"
                                color="#FF8A65"
                              />
                            </Tooltip>
                          )}
                        </span>
                      ) : (
                        <span className="rounded-2xl w-fit flex px-2 py-1 bg-[#FDEEEE] dark:bg-[#331C1C] items-center gap-1">
                          <Icon
                            icon="carbon:dot-mark"
                            color={
                              resolvedTheme === "dark" ? "#ED5556" : "#873031"
                            }
                            width={10}
                            height={10}
                          />
                          <p className="text-[#873031] dark:text-[#ED5556] text-sm leading-[160%]">
                            Inactive
                          </p>
                        </span>
                      )}
                    </td>
                  ) : cell.column.Header === "" ? (
                    <td {...cell.getCellProps()} className="py-3 text-left">
                      <ActiveButtonMenu
                        handleOpenModal={handleOpenModal}
                        id={cell.row.original.id}
                        status={cell.row.original.modifiedStatus}
                      />
                    </td>
                  ) : (
                    <td {...cell.getCellProps()} className="py-3 text-left">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      ;
    </>
  );
}
