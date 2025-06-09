// app/user-management/page.tsx

import React from "react";
import Image from "next/image";

import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";
import ComponentCard from "@/components/common/ComponentCard";
import BasicTableOne from "@/components/tables/BasicTableOne";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

interface User {
    id: number;
    image: string;
    name: string;
    role: string;
    email: string;
    status: string;
}

// Giả sử dữ liệu user quản lý (có thể fetch từ API ở real app)
const users: User[] = [
    {
        id: 1,
        image: "/images/user/user-17.jpg",
        name: "Lindsey Curtis",
        role: "Web Designer",
        email: "lindsey@example.com",
        status: "Active",
    },
    {
        id: 2,
        image: "/images/user/user-18.jpg",
        name: "Kaiya George",
        role: "Project Manager",
        email: "kaiya@example.com",
        status: "Pending",
    },
    {
        id: 3,
        image: "/images/user/user-17.jpg",
        name: "Zain Geidt",
        role: "Content Writing",
        email: "zain@example.com",
        status: "Active",
    },
    {
        id: 4,
        image: "/images/user/user-20.jpg",
        name: "Abram Schleifer",
        role: "Digital Marketer",
        email: "abram@example.com",
        status: "Inactive",
    },
    {
        id: 5,
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        role: "Front-end Developer",
        email: "carla@example.com",
        status: "Active",
    },
];

export default function UserManagementPage() {
    return (
        <div>
            <PageBreadcrumb pageTitle="Basic Table" />
            <div className="space-y-6">
                <ComponentCard title="Basic Table 1">
                    <BasicTableOne />
                </ComponentCard>
            </div>
        </div>
    );
}
