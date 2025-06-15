import { IProfile } from '@/type/profile.type';
import { requestApi } from '../libs/axiosInstance';

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const profileService = {
  async getProfile(username: string): Promise<IProfile> {
    // const res = await requestApi<IProfile>({
    //   method: 'GET',
    //   url: `/profile/username/${username}`,
    // });

    const res = {
      "data": {
        "_id": "6846fff12a8878b6b959ba2c",
        "username": "quanghv",
        "alias": "Quang Cối",
        "firstName": "Hà Văn",
        "lastName": "Quang",
        "email": "quanghv20@gmail.com",
        "phone": "0986915765",
        "address": "Hanoi, Vietnam",
        "avatarUrl": "https://example.com/avatar.jpg",
        "bio": "Fullstack Developer",
        "stack": "NodeJS & ReactJS",
        "education": {
          "logo": "https://example.com/university-logo.png",
          "name": "FPT University",
          "major": "Software Engineering",
          "fromDate": "09/2018",
          "toDate": "09/2022",
          "degree": "Bachelor",
          "gpa": "3.1",
          "description": "",
          "_id": "684700502a8878b6b959ba5f"
        },
        "companies": [
          {
            "logo": "https://example.com/company-a-logo.png",
            "name": "FPT Software.",
            "fromDate": "02/2023",
            "toDate": "03/2024",
            "position": "NodeJS & ReactJS Developer",
            "description": "",
            "_id": "684700502a8878b6b959ba5d"
          },
          {
            "logo": "https://example.com/company-b-logo.png",
            "name": "Viettel",
            "fromDate": "04/2024",
            "toDate": "Present",
            "position": "ReactJS Developer",
            "description": "",
            "_id": "684700502a8878b6b959ba5e"
          }
        ],
        "socials": [
          {
            "icon": "github",
            "name": "Github",
            "link": "https://github.com/quanghv20",
            "_id": "684700502a8878b6b959ba59"
          },
          {
            "icon": "linkedin",
            "name": "Linkedin",
            "link": "https://www.linkedin.com/in/quanghv20",
            "_id": "684700502a8878b6b959ba5a"
          },
          {
            "icon": "facebook",
            "name": "Facebook",
            "link": "https://www.facebook.com/quanghv20",
            "_id": "684700502a8878b6b959ba5b"
          },
          {
            "icon": "instagram",
            "name": "Instagram",
            "link": "https://www.instagram.com/quanghv20",
            "_id": "684700502a8878b6b959ba5c"
          }
        ],
        "__v": 0
      },
      "message": "Retrieved profile by username successfully",
      "statusCode": 200,
      "path": "/my-cms/api/profile/username/quanghv",
      "timestamp": "2025-06-15T01:49:08.871Z"
    }

    return res.data;
  }
};
