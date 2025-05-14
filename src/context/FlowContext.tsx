
import React, { createContext, useState, useContext, ReactNode } from "react";

interface FlowContextType {
  patients: string[];
  setPatients: (patients: string[]) => void;
  selectedPatient: string | null;
  setSelectedPatient: (patient: string | null) => void;
  patientContext: string;
  setPatientContext: (context: string) => void;
  clinicianConcern: string;
  setClinicianConcern: (concern: string) => void;
  guidance: string | null;
  setGuidance: (guidance: string | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider = ({ children }: { children: ReactNode }) => {
  const [patients, setPatients] = useState<string[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [patientContext, setPatientContext] = useState("");
  const [clinicianConcern, setClinicianConcern] = useState("");
  const [guidance, setGuidance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <FlowContext.Provider
      value={{
        patients,
        setPatients,
        selectedPatient,
        setSelectedPatient,
        patientContext,
        setPatientContext,
        clinicianConcern,
        setClinicianConcern,
        guidance,
        setGuidance,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = (): FlowContextType => {
  const context = useContext(FlowContext);
  if (context === undefined) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
};
