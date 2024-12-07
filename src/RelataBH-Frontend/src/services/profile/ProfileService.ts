import axios from "axios";
import axiosInstance from "../axiosInstance";
import { ENDPOINTS } from "../Endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ProfileService {
    static fetchProfile = async (): Promise<ApiResponse<Profile>> => {
        const profile = await AsyncStorage.getItem("profile");
        if (profile != null) {
            return { success: true, data: JSON.parse(profile) }
        } else {
            let body = {
                userId: 100
            };
            const response = await axiosInstance.post<Profile>(ENDPOINTS.GET_PROFILE_INFOS(), body);
            AsyncStorage.setItem("profile", JSON.stringify(response.data))
            return { success: true, data: response.data } as SuccessResponse<Profile>
        }
    }

    static fetchQtdReportsProfile = async (): Promise<ApiResponse<Number>> => {
        const profile = await AsyncStorage.getItem("profile");
        if (!profile) {
            return { success: false, error: "Profile not found" };
        }
        const profileData = <Profile>JSON.parse(profile)
        return { success: true, data: profileData.qntRelatos }
    }

    static fetchProfileHistoryReports = async (): Promise<ApiResponse<ReportHistory>> => {
        const history = await AsyncStorage.getItem("history");
        if (history != null) {
            return { success: true, data: JSON.parse(history) } as SuccessResponse<ReportHistory>
        } else {
            const response = await axiosInstance.get<ReportHistory>(ENDPOINTS.REPORTS_BY_USER(100));
            AsyncStorage.setItem("history", JSON.stringify(response.data));
            return { success: true, data: response.data } as SuccessResponse<ReportHistory>
        }
    }

    static fetchProfileHistoryReports2 = async (): Promise<ApiResponse<ReportHistory[]>> => {
        const ListReportHistories: ReportHistory[] =
            [
                {
                    id: 1,
                    image: 'sla',
                    titulo: 'teste 1',
                    dsc: 'descricao 1',
                    createdAt: 30112024
                },
                {
                    id: 2,
                    image: 'sla',
                    titulo: 'teste 2',
                    dsc: 'descricao 2 jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    createdAt: 30112024
                },
                {
                    id: 3,
                    image: 'sla',
                    titulo: 'teste 3',
                    dsc: 'descricao 3',
                    createdAt: 30112024
                }
            ]

        return {
            success: true,
            data: ListReportHistories,
        };

    }

    static fetchProfileDescription2 = async (id: number): Promise<ApiResponse<ReportHistory>> => {
        const ListReportHistories: ReportHistory[] = [
            {
                id: 1,
                image: 'sla',
                titulo: 'teste 1',
                dsc: 'descricao 1',
                createdAt: 30112024
            },
            {
                id: 2,
                image: 'sla',
                titulo: 'teste 2',
                dsc: 'descricao 2 jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                createdAt: 30112024
            },
            {
                id: 3,
                image: 'sla',
                titulo: 'teste 3',
                dsc: 'descricao 3',
                createdAt: 30112024
            }
        ];
    
        // Filtra o histórico de relatórios com base no ID
        const reportHistory = ListReportHistories.find(item => item.id === id);
    
        // Retorna o objeto encontrado ou um erro se não encontrado
        if (reportHistory) {
            return { success: true, data: reportHistory };
        } else {
            return { success: false, error:  "erro"};
        }
    }
    

    static fetchQtdReportsProfile2 = async (): Promise<ApiResponse<Number>> => {
        return { success: true, data: 3 }
    }

    static fetchProfile2 = async (): Promise<ApiResponse<Profile>> => {

        const profile: Profile = {
            id: 100,
            email: 'armintasfilho@gmail.com',
            nome: 'Armintas Fernandes',
            createdAt: new Date('2024-11-30'),
            qntRelatos: 3,
        };
        return { success: true, data: profile } as SuccessResponse<Profile>
    }

}