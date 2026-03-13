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
export type Time = bigint;
export interface ContactForm {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllPartnerApplications(): Promise<Array<PartnerApplication>>;
    submitContactForm(name: string, email: string, company: string, message: string): Promise<void>;
    submitPartnerApplication(name: string, email: string, company: string, role: string, partnerType: string, message: string): Promise<void>;
}
