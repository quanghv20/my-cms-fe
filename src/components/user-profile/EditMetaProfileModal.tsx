import React, { useState } from 'react'
import { Modal } from '../ui/modal';
import { IProfile } from '@/type/profile.type';
import Label from '../form/Label';
import BasicTableOne from '../tables/BasicTableOne';
import Button from '../ui/button/Button';
import SocialsTable from './SocialsTable';

type PropsType = {
    isOpen: boolean;
    onClose: () => void;
    profile: IProfile;
}

export default function EditMetaProfileModal({ isOpen, onClose, profile }: PropsType) {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [fileSelected, setFileSelected] = useState(false);

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1000px] m-4">
            <div className="no-scrollbar relative w-full max-w-[1000px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
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
                    <div className="mt-7">
                        <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                            Social Links
                        </h5>
                    </div>
                </div>
                <form className="flex flex-col">
                    <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                        <SocialsTable />
                        <div className="flex justify-end">
                            <Button onClick={() => { }} className="bg-blue-600 text-white hover:bg-blue-700">
                                + Thêm Social 1010
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <Button size="sm" variant="outline" onClick={onClose}>
                            Close
                        </Button>
                        <Button size="sm" onClick={() => { }}>
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
