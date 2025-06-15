import React from "react";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { JSLifeTable } from "../tables/JSLifeTable";

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

// Define the table data using the interface
const tableData: Order[] = [
    {
        id: 1,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
            role: "Web Designer",
        },
        projectName: "Agency Website",
        team: {
            images: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        budget: "3.9K",
        status: "Active",
    },
    {
        id: 2,
        user: {
            image: "/images/user/user-18.jpg",
            name: "Kaiya George",
            role: "Project Manager",
        },
        projectName: "Technology",
        team: {
            images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
        },
        budget: "24.9K",
        status: "Pending",
    },
    {
        id: 3,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Zain Geidt",
            role: "Content Writing",
        },
        projectName: "Blog Writing",
        team: {
            images: ["/images/user/user-27.jpg"],
        },
        budget: "12.7K",
        status: "Active",
    },
    {
        id: 4,
        user: {
            image: "/images/user/user-20.jpg",
            name: "Abram Schleifer",
            role: "Digital Marketer",
        },
        projectName: "Social Media",
        team: {
            images: [
                "/images/user/user-28.jpg",
                "/images/user/user-29.jpg",
                "/images/user/user-30.jpg",
            ],
        },
        budget: "2.8K",
        status: "Cancel",
    },
    {
        id: 5,
        user: {
            image: "/images/user/user-21.jpg",
            name: "Carla George",
            role: "Front-end Developer",
        },
        projectName: "Website",
        team: {
            images: [
                "/images/user/user-31.jpg",
                "/images/user/user-32.jpg",
                "/images/user/user-33.jpg",
            ],
        },
        budget: "4.5K",
        status: "Active",
    },
];

export default function SocialsTable() {
    const columns = [
        {
            title: "User",
            key: "user",
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image width={40} height={40} src={record.user.image} alt={record.user.name} priority />
                    </div>
                    <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {record.user.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">{record.user.role}</span>
                    </div>
                </div>
            ),
        },
        {
            title: "Project Name",
            dataIndex: "projectName",
            key: "projectName",
        },
        {
            title: "Team",
            key: "team",
            render: (_: any, record: any) => (
                <div className="flex -space-x-2">
                    {record.team.images.map((teamImage: string, idx: number) => (
                        <div
                            key={idx}
                            className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                            <Image width={24} height={24} src={teamImage} alt={`Team member ${idx + 1}`} className="w-full" priority />
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: "Status",
            key: "status",
            render: (_: any, record: any) => {
                let color =
                    record.status === "Active" ? "success" : record.status === "Pending" ? "warning" : "error";

                return (
                    <Badge size="sm" color={color as any}>
                        {record.status}
                    </Badge>
                );
            },
        },
        {
            title: "Budget",
            dataIndex: "budget",
            key: "budget",
        },
    ];

    return (
        <JSLifeTable columns={columns} dataSource={tableData} rowKey="id" />
    );
}
