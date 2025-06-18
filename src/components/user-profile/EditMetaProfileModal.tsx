import React, { useState } from 'react'
import { IProfile } from '@/type/profile.type';
import { JSLifeModal } from '../ui/modal/JSModal';
import { CircleMinusIcon, CirclePlusIcon } from '@/icons';
import { JSLifeTable } from '../tables/JSLifeTable';
import Label from '../form/Label';
import JSLifeInput from '../form/input/JSLifeInput';
import JSLifeButton from '../ui/button/JSLifeButton';
import Input from '../form/input/InputField';

type PropsType = {
    isOpen: boolean;
    onClose: () => void;
    profile: IProfile;
}

interface ISocial {
    id?: string;
    icon?: string;
    name?: string;
    link?: string;
}

const initialSocial = {
    id: undefined,
    icon: undefined,
    name: undefined,
    link: undefined,
}

export default function EditMetaProfileModal({ isOpen, onClose, profile }: PropsType) {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [fileSelected, setFileSelected] = useState(false);
    const [socials, setSocials] = useState<ISocial[]>([initialSocial]);

    /** Logic Handler */
    const handleAddSocial = () => {
        setSocials([
            ...socials,
            initialSocial
        ]);
    };

    const handleDeleteSocial = (index: number) => {
        setSocials((prev) => prev.filter((_, i) => i !== index));
    };

    const columns: any = [
        {
            title: "Icon",
            key: "icon",
            render: () => (
                <JSLifeInput type="text" placeholder="Social icon" />
            ),
        },
        {
            title: "Name",
            key: "name",
            render: () => (
                <JSLifeInput type="text" placeholder="Social name" />
            ),
        },
        {
            title: "Link",
            key: "link",
            render: () => (
                <JSLifeInput type="text" placeholder="Social link" />
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_: any, __: ISocial, index: number) => {
                return (
                    <>
                        <JSLifeButton
                            onClick={() => handleDeleteSocial(index)}
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
        <JSLifeModal isOpen={isOpen} onClose={onClose} className="max-w-[1140px] m-4">
            {/* <div className="no-scrollbar relative w-full max-w-[1140px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Edit Profile
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Update your details to keep your profile up-to-date.
                    </p>
                    <div>
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
                    <div className="flex justify-between mt-8">
                        <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                            Social Links
                        </h5>
                        <div>
                            <JSLifeButton size="sm" variant="blue" onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleAddSocial();
                            }} className="bg-blue-600 text-white hover:bg-blue-700">
                                <CirclePlusIcon /> Add Social
                            </JSLifeButton>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col">
                    <div className="custom-scrollbar h-[330px] overflow-y-auto px-2 pb-3">
                        <div className="flex flex-col gap-4 mt-4">
                            <JSLifeTable columns={columns} dataSource={socials} rowKey="id" scroll={{ x: "1000px" }} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <JSLifeButton size="md" variant="outline" onClick={onClose}>
                            Close
                        </JSLifeButton>
                        <JSLifeButton size="md" onClick={() => { }}>
                            Save Changes
                        </JSLifeButton>
                    </div>
                </form>
            </div> */}
            <div className="no-scrollbar relative w-full max-w-[1140px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Edit Personal Information
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Update your details to keep your profile up-to-date.
                    </p>
                </div>
                <form className="flex flex-col">
                    <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                        <div>
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
                        <div className='mt-7'>
                            <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                                Social Links
                            </h5>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <div>
                                    <Label>Facebook</Label>
                                    <Input type="text" defaultValue="https://www.facebook.com/PimjoHQ" />
                                </div>

                                <div>
                                    <Label>X.com</Label>
                                    <Input type="text" defaultValue="https://x.com/PimjoHQ" />
                                </div>

                                <div>
                                    <Label>Linkedin</Label>
                                    <Input type="text" defaultValue="https://www.linkedin.com/company/pimjo" />
                                </div>

                                <div>
                                    <Label>Instagram</Label>
                                    <Input type="text" defaultValue="https://instagram.com/PimjoHQ" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                                Personal Information
                            </h5>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <div className="col-span-2 lg:col-span-1">
                                    <Label>First Name</Label>
                                    <Input type="text" defaultValue="Musharof" />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Last Name</Label>
                                    <Input type="text" defaultValue="Chowdhury" />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Email Address</Label>
                                    <Input type="text" defaultValue="randomuser@pimjo.com" />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Phone</Label>
                                    <Input type="text" defaultValue="+09 363 398 46" />
                                </div>

                                <div className="col-span-2">
                                    <Label>Bio</Label>
                                    <Input type="text" defaultValue="Team Manager" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <JSLifeButton size="md" variant="outline" onClick={onClose}>
                            Close
                        </JSLifeButton>
                        <JSLifeButton size="md" onClick={() => { }}>
                            Save Changes
                        </JSLifeButton>
                    </div>
                </form>
            </div>
        </JSLifeModal>
    )
}
