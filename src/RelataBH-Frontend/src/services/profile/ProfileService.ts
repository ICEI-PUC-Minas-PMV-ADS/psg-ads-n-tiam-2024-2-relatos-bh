import axios from "axios";
import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ProfileService 
{
    static fetchProfile = async () : Promise<ApiResponse<Profile>> => {
        const profile = await AsyncStorage.getItem("profile");
        if(profile != null)
        {
            return {success: true, data: JSON.parse(profile)}
        } else {
            let body = {
                userId: 100
            };
            const response = await axiosInstance.post<Profile>(ENDPOINTS.GET_PROFILE_INFOS(),body);
            AsyncStorage.setItem("profile", JSON.stringify(response.data))
            return {success: true, data: response.data} as SuccessResponse<Profile>
        }
    }
}