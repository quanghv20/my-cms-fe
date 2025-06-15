"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JSLifeTable } from "../tables/JSLifeTable";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import JSLifeButton from "../ui/button/JSLifeButton";
import { CircleMinusIcon, CirclePlusIcon, PlusIcon } from "@/icons";

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

    const handleDeleteSocial = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    const handleAddSocial = () => {
        const newId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
        setData([
            ...data,
            {
                id: newId,
                user: {
                    image: "/images/user/default.jpg",
                    name: "",
                    role: "",
                },
                projectName: "",
                team: { images: [] },
                budget: "",
                status: "Pending",
            },
        ]);
    };

    const columns = [
        {
            title: "Icon",
            key: "icon",
            render: (_: any, record: Order) => (
                <Input type="text" placeholder="Social icon" />
            ),
        },
        {
            title: "Name",
            key: "name",
            render: (_: any, record: Order) => (
                <Input type="text" placeholder="Social name" />
            ),
        },
        {
            title: "Link",
            key: "link",
            render: (_: any, record: Order) => (
                <Input type="text" placeholder="Social link" />
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_: any, record: Order) => {
                return (
                    <>
                        <JSLifeButton
                            onClick={() => handleDeleteSocial(record.id)}
                            size="sm"
                            variant="red"
                        >
                            <CircleMinusIcon /> Delete
                        </JSLifeButton>
                    </>

                );
            },
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <JSLifeTable columns={columns} dataSource={data} rowKey="id" scroll={{ x: "1000px" }} />

            <div className="flex justify-end">
                <JSLifeButton variant="blue" onClick={(e) => {
                    // e.stopPropagation();
                    e.preventDefault();
                    handleAddSocial();
                }} className="bg-blue-600 text-white hover:bg-blue-700">
                    <CirclePlusIcon /> Add Social
                </JSLifeButton>
            </div>
        </div>
    );
}
