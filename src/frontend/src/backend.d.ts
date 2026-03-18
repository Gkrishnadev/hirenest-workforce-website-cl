import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PartnerApplication {
    partnerType: string;
    name: string;
    role: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
}
export interface VendorApplication {
    contactPerson: string;
    email: string;
    timestamp: Time;
    technologies: string;
    companyName: string;
    phone: string;
    benchSize: bigint;
}
export type Time = bigint;
export interface ContactForm {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
}
export interface RequirementSubmission {
    role: string;
    engagementType: string;
    company: string;
    timestamp: Time;
    skills: string;
    location: string;
    startDate: string;
}
export interface UserProfile {
    name: string;
    email: string;
    company: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    claimFirstAdmin(): Promise<boolean>;
    deleteContactForm(): Promise<void>;
    deletePartnerApplication(): Promise<void>;
    deleteRequirementSubmission(): Promise<void>;
    deleteVendorApplication(): Promise<void>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllPartnerApplications(): Promise<Array<PartnerApplication>>;
    getAllRequirementSubmissions(): Promise<Array<RequirementSubmission>>;
    getAllVendorApplications(): Promise<Array<VendorApplication>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isAdminAssigned(): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, email: string, company: string, message: string): Promise<void>;
    submitPartnerApplication(name: string, email: string, company: string, role: string, partnerType: string, message: string): Promise<void>;
    submitRequirementSubmission(company: string, role: string, skills: string, location: string, engagementType: string, startDate: string): Promise<void>;
    submitVendorApplication(companyName: string, contactPerson: string, email: string, phone: string, technologies: string, benchSize: bigint): Promise<void>;
}
