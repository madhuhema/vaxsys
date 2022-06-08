export interface Appointment {
    vaccineSupplierId: number
    patientId?: number
    vacDate: String
    slotID: number
}

export interface AppointmentResponse {
    patientSlotId: number
    patientId: number
    slotID: number
    slotTime: string
    vaccineSupplierId: number
    supplierLocation: string
    vaccineName: string
    vacDate: string
}