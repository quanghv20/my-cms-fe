'use client';
import React, { useState } from 'react';
import { Modal } from '../ui/modal';
import Button from '../ui/button/Button';
import Input from '../form/input/InputField';
import Label from '../form/Label';
import { IProfile, ISocial } from '@/type/profile.type';
import BasicTableOne from '../tables/BasicTableOne';
import { JSLifeTable } from '../tables/JSLifeTable';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    profile: IProfile;
};

export default function EditMetaProfileModal({ isOpen, onClose, profile }: Props) {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [fileSelected, setFileSelected] = useState(false);

    // Dùng state local để quản lý socials
    const [socialLinks, setSocialLinks] = useState<ISocial[]>(profile.socials);

    // Xóa social theo _id
    const handleRemoveSocial = (_id: string) => {
        setSocialLinks((prev) => prev.filter((social) => social._id !== _id));
    };

    // Thêm social mới với id tạm thời (có thể dùng uuid hoặc timestamp)
    const handleAddSocial = () => {
        const newSocial: ISocial = {
            _id: `${Date.now()}`, // id tạm thời, sau save có thể thay đổi
            icon: '',
            name: '',
            link: '',
        };
        setSocialLinks((prev) => [...prev, newSocial]);
    };

    // Cập nhật input social (name, link, icon)
    const handleSocialChange = (_id: string, field: keyof ISocial, value: string) => {
        setSocialLinks((prev) =>
            prev.map((social) =>
                social._id === _id ? { ...social, [field]: value } : social
            )
        );
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Ví dụ console log socials hiện tại:
        console.log('Socials to save:', socialLinks);
        onClose();
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1000px] m-4" header={<div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Edit Profile
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                Update your avatar and social profile links.
            </p>
        </div>}>



            <form className="flex flex-col" onSubmit={handleSave}>
                <div className="custom-scrollbar max-h-[70vh] px-2 pb-3">
                    {/* Avatar Upload Section */}
                    <div className="mb-10">
                        <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                            Profile Picture
                        </h5>

                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-300 dark:border-gray-600">
                                <img
                                    src={avatarPreview || profile.avatarUrl || ''}
                                    alt="Avatar Preview"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div>
                                <Label htmlFor="avatarUpload" className="mb-1 block">
                                    Upload new avatar
                                </Label>

                                <div className="flex items-center gap-3">
                                    <label
                                        htmlFor="avatarUpload"
                                        className="cursor-pointer rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Choose File
                                    </label>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {fileSelected ? 'File selected' : 'No file chosen'}
                                    </span>
                                </div>

                                <input
                                    id="avatarUpload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const url = URL.createObjectURL(file);
                                            setAvatarPreview(url);
                                            setFileSelected(true);
                                        } else {
                                            setFileSelected(false);
                                        }
                                    }}
                                />
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Max size: 2MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div>
                        <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                            Social Links
                        </h5>
                        <div className="mt-4">
                            <Button size="sm" type="button" onClick={handleAddSocial}>
                                + Add Social
                            </Button>
                        </div>

                        {/* <BasicTableOne /> */}
                        <div>
                            <JSLifeTable columns={[{ title: "Icon", key: "icon" }]} rowKey={"id"} dataSource={[1, 2, 3, 4, 5, 6, 7, 8]} />
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
}
