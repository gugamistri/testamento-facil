import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type MaritalStatus = 'SOLTEIRO' | 'CASADO' | 'DIVORCIADO' | 'VIUVO' | 'UNIAO_ESTAVEL'

export interface PersonalData {
  fullName: string
  cpf: string
  birthDate: string
  maritalStatus: MaritalStatus
  nationality: string
  profession: string
}

export interface RealEstateAsset {
  id: string
  type: 'CASA' | 'APARTAMENTO' | 'TERRENO' | 'COMERCIAL'
  address: string
  registrationNumber?: string
  sharePercentage: number
  observations?: string
}

export interface FinancialAsset {
  id: string
  bank: string
  type: 'CORRENTE' | 'POUPANCA' | 'INVESTIMENTO'
  description: string
}

export interface DigitalAsset {
  id: string
  type: 'CRYPTO' | 'SOCIAL_MEDIA' | 'DOMAIN' | 'CLOUD_STORAGE'
  account: string
  instructions?: string
}

export interface Beneficiary {
  id: string
  name: string
  cpf?: string
  relationship: string
  share: number
}

interface WizardState {
  currentStep: number
  personalData: PersonalData
  assets: {
    realEstate: RealEstateAsset[]
    financial: FinancialAsset[]
    digital: DigitalAsset[]
  }
  beneficiaries: Beneficiary[]
  videoSession?: {
    scheduledDate: string | null
    status: 'PENDING' | 'SCHEDULED' | 'COMPLETED'
  }
  monitoring?: {
    status: 'ACTIVE' | 'ALERT' | 'VENCIDO'
    lastCheck: string
    nextCheckIn: string
  }

  // Actions
  setStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void

  updatePersonalData: (data: Partial<PersonalData>) => void

  addRealEstate: (asset: Omit<RealEstateAsset, 'id'>) => void
  removeRealEstate: (id: string) => void

  addFinancial: (asset: Omit<FinancialAsset, 'id'>) => void
  removeFinancial: (id: string) => void

  addDigital: (asset: Omit<DigitalAsset, 'id'>) => void
  removeDigital: (id: string) => void

  addBeneficiary: (beneficiary: Omit<Beneficiary, 'id'>) => void
  removeBeneficiary: (id: string) => void
  updateBeneficiary: (id: string, data: Partial<Beneficiary>) => void
  updateBeneficiaryShare: (id: string, share: number) => void

  scheduleVideoSession: (date: string) => void

  updateMonitoringStatus: (status: 'ACTIVE' | 'ALERT' | 'VENCIDO') => void

  resetWizard: () => void
}

const initialPersonalData: PersonalData = {
  fullName: '',
  cpf: '',
  birthDate: '',
  maritalStatus: 'SOLTEIRO',
  nationality: 'Brasileira',
  profession: '',
}

export const useWizardStore = create<WizardState>()(
  persist(
    (set) => ({
      currentStep: 1,
      personalData: initialPersonalData,
      assets: {
        realEstate: [],
        financial: [],
        digital: [],
      },
      beneficiaries: [],
      videoSession: {
        scheduledDate: null,
        status: 'PENDING',
      },
      monitoring: {
        status: 'ACTIVE',
        lastCheck: new Date().toISOString(),
        nextCheckIn: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
      },

      setStep: (step) => set({ currentStep: step }),
      nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 9) })),
      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

      updatePersonalData: (data) =>
        set((state) => ({ personalData: { ...state.personalData, ...data } })),

      addRealEstate: (asset) =>
        set((state) => ({
          assets: {
            ...state.assets,
            realEstate: [...state.assets.realEstate, { ...asset, id: crypto.randomUUID() }],
          },
        })),

      removeRealEstate: (id) =>
        set((state) => ({
          assets: {
            ...state.assets,
            realEstate: state.assets.realEstate.filter((a) => a.id !== id),
          },
        })),

      addFinancial: (asset) =>
        set((state) => ({
          assets: {
            ...state.assets,
            financial: [...state.assets.financial, { ...asset, id: crypto.randomUUID() }],
          },
        })),

      removeFinancial: (id) =>
        set((state) => ({
          assets: {
            ...state.assets,
            financial: state.assets.financial.filter((a) => a.id !== id),
          },
        })),

      addDigital: (asset) =>
        set((state) => ({
          assets: {
            ...state.assets,
            digital: [...state.assets.digital, { ...asset, id: crypto.randomUUID() }],
          },
        })),

      removeDigital: (id) =>
        set((state) => ({
          assets: {
            ...state.assets,
            digital: state.assets.digital.filter((a) => a.id !== id),
          },
        })),

      addBeneficiary: (beneficiary) =>
        set((state) => ({
          beneficiaries: [
            ...state.beneficiaries,
            { ...beneficiary, id: crypto.randomUUID() },
          ],
        })),

      removeBeneficiary: (id) =>
        set((state) => ({
          beneficiaries: state.beneficiaries.filter((b) => b.id !== id),
        })),

      updateBeneficiary: (id, data) =>
        set((state) => ({
          beneficiaries: state.beneficiaries.map((b) => (b.id === id ? { ...b, ...data } : b)),
        })),

      updateBeneficiaryShare: (id, share) =>
        set((state) => ({
          beneficiaries: state.beneficiaries.map((b) =>
            b.id === id ? { ...b, share } : b
          ),
        })),

      scheduleVideoSession: (date) =>
        set((state) => ({
          videoSession: {
            ...state.videoSession,
            scheduledDate: date,
            status: 'SCHEDULED',
          },
        })),

      updateMonitoringStatus: (status) =>
        set((state) => ({
          monitoring: state.monitoring ? {
            ...state.monitoring,
            status,
          } : undefined
        })),

      resetWizard: () =>
        set({
          currentStep: 1,
          personalData: {
            fullName: '',
            cpf: '',
            birthDate: '',
            maritalStatus: 'SOLTEIRO',
            nationality: 'Brasileira',
            profession: '',
          },
          assets: {
            realEstate: [],
            financial: [],
            digital: [],
          },
          beneficiaries: [],
          videoSession: {
            scheduledDate: null,
            status: 'PENDING',
          },
          monitoring: {
            status: 'ACTIVE',
            lastCheck: new Date().toISOString(),
            nextCheckIn: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
          },
        }),
    }),
    {
      name: 'testamento-wizard-storage-v2',
    }
  )
)
