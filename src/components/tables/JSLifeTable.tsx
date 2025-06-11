import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";

type Column<T> = {
    title: React.ReactNode;
    dataIndex?: keyof T | string;
    key: string;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    align?: "left" | "center" | "right";
    width?: string | number;
};

interface CustomTableProps<T> {
    columns: Column<T>[];
    dataSource: T[];
    rowKey: string | ((record: T) => React.Key);
}

export function JSLifeTable<T>({ columns, dataSource, rowKey }: CustomTableProps<T>) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1024px]">
                    <Table>
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                {columns.map((col) => (
                                    <TableCell
                                        key={col.key}
                                        isHeader
                                        className={`px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 ${col.align === "center"
                                            ? "text-center"
                                            : col.align === "right"
                                                ? "text-right"
                                                : "text-start"
                                            }`}
                                    >
                                        {col.title}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>

                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {dataSource.map((record: any, index: number) => {
                                const key = typeof rowKey === "function" ? rowKey(record) : record[rowKey];
                                return (
                                    <TableRow key={key}>
                                        {columns.map((col) => {
                                            const value = col.dataIndex ? (record as any)[col.dataIndex] : undefined;

                                            return (
                                                <TableCell
                                                    key={col.key}
                                                    className={`px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400 ${col.align === "center"
                                                        ? "text-center"
                                                        : col.align === "right"
                                                            ? "text-right"
                                                            : "text-start"
                                                        }`}
                                                >
                                                    {col.render ? col.render(value, record, index) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
