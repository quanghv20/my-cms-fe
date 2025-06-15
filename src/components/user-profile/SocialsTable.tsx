"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JSLifeTable } from "../tables/JSLifeTable";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";

interface Order {
    id: number;
    user: {
        image: string;
        name: string;
        role: string;
    };
    projectName: string;
    team: {
        images: string[];
    };
    status: string;
    budget: string;
}

const initialData: Order[] = [
    {
        id: 1,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
            role: "Web Designer",
        },
        projectName: "Agency Website",
        team: {
            images: ["/images/user/user-22.jpg", "/images/user/user-23.jpg", "/images/user/user-24.jpg"],
        },
        budget: "3.9K",
        status: "Active",
    },
    // ... các dòng còn lại như cũ
];

export default function SocialsTable() {
    const [data, setData] = useState<Order[]>(initialData);

    const handleChange = (id: number, path: string, value: string) => {
        setData((prev) =>
            prev.map((item: any) =>
                item.id === id
                    ? {
                        ...item,
                        [path.split(".")[0]]: path.includes(".")
                            ? {
                                ...item[path.split(".")[0] as keyof Order],
                                [path.split(".")[1]]: value,
                            }
                            : value,
                    }
                    : item
            )
        );
    };

    const handleDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    const handleAdd = () => {
        const newId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
        // setData([
        //     ...data,
        //     {
        //         id: newId,
        //         user: {
        //             image: "/images/user/default.jpg",
        //             name: "",
        //             role: "",
        //         },
        //         projectName: "",
        //         team: { images: [] },
        //         budget: "",
        //         status: "Pending",
        //     },
        // ]);
    };

    const columns = [
        {
            title: "User",
            key: "user",
            render: (_: any, record: Order) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image width={40} height={40} src={record.user.image} alt={record.user.name} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input
                            className="text-theme-sm text-gray-800 dark:text-white/90 bg-transparent border-b border-gray-200 focus:outline-none focus:border-blue-400"
                            value={record.user.name}
                            onChange={(e) => handleChange(record.id, "user.name", e.target.value)}
                        />
                        <input
                            className="text-theme-xs text-gray-500 dark:text-gray-400 bg-transparent border-b border-gray-100 focus:outline-none focus:border-blue-300"
                            value={record.user.role}
                            onChange={(e) => handleChange(record.id, "user.role", e.target.value)}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Project",
            dataIndex: "projectName",
            key: "projectName",
            render: (value: string, record: Order) => (
                <input
                    className="w-full bg-transparent border-b border-gray-200 text-theme-sm text-gray-700 dark:text-white/80 focus:outline-none focus:border-blue-400"
                    value={value}
                    onChange={(e) => handleChange(record.id, "projectName", e.target.value)}
                />
            ),
        },
        {
            title: "Team",
            key: "team",
            render: (_: any, record: Order) => (
                <div className="flex -space-x-2">
                    {record.team.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                            <Image src={img} alt={`Team ${idx}`} width={24} height={24} />
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_: any, record: Order) => {
                const color = record.status === "Active" ? "success" : record.status === "Pending" ? "warning" : "error";

                return (
                    <div className="flex items-center gap-2">
                        <Badge size="sm" color={color as any}>
                            {record.status}
                        </Badge>
                        <button
                            onClick={() => handleDelete(record.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Xoá"
                        >
                            {/* <FaTrash size={14} /> */} Xoá
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <JSLifeTable columns={columns} dataSource={data} rowKey="id" scroll={{ x: "1000px" }} />

            <div className="flex justify-end">
                <Button onClick={() => {}} className="bg-blue-600 text-white hover:bg-blue-700">
                    + Thêm Social
                </Button>
            </div>
            <div className="flex justify-end">
                <Button onClick={handleAdd} className="bg-blue-600 text-white hover:bg-blue-700">
                    + Thêm Social 2
                </Button>
            </div>
        </div>
    );
}
