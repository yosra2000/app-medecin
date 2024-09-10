import { FollowUp } from '../models/FollowUp';

  export interface Patient {
    id: string; // L'identifiant du patient, généralement une chaîne de caractères
    resourceType: string; // Le type de ressource, ici "Patient",
    image: string;
    name: {
      use?: string; // Utilisation du nom (e.g., official, usual)
      family?: string; // Nom de famille
      given?: string[]; // Prénoms
    }[];
    gender?: string; // Genre du patient (e.g., male, female)
    followUps: FollowUp[];  // New property

    birthDate?: string; // Date de naissance (format YYYY-MM-DD)
    deceasedBoolean?: boolean; // Indique si le patient est décédé
    address?: {
      use?: string; // Utilisation de l'adresse (e.g., home)
      type?: string; // Type d'adresse (e.g., both, postal)
      line?: string[]; // Lignes de l'adresse
      city?: string; // Ville
      district?: string; // District
      state?: string; // État
      postalCode?: string; // Code postal
      country?: string; // Pays
    }[];
    telecom?: {
      system?: string; // Système de communication (e.g., phone, email)
      value?: string; // Valeur du contact (e.g., numéro de téléphone)
      use?: string; // Utilisation du contact (e.g., home, work)
      rank?: number; // Rang de la communication
      period?: {
        start?: string; // Date de début de la période de validité
        end?: string; // Date de fin de la période de validité
      };
    }[];
    identifier?: {
      use?: string; // Utilisation de l'identifiant
      type?: {
        coding?: {
          system?: string; // Code du système
          code?: string; // Code de l'identifiant
        }[];
      };
      system?: string; // Système d'identifiant
      value?: string; // Valeur de l'identifiant
      period?: {
        start?: string; // Date de début de la période de validité
        end?: string; // Date de fin de la période de validité
      };
      assigner?: {
        display?: string; // Entité assignant l'identifiant
      };
    }[];
    managingOrganization?: {
      reference?: string; // Référence à l'organisation qui gère le patient
    };
    generalPractitioner?: {
      reference?: string; // Référence au médecin généraliste
    }[];
    contact?: {
      relationship?: {
        coding?: {
          system?: string; // Code du système de relation
          code?: string; // Code de relation
        }[];
      }[];
      name?: {
        family?: string; // Nom de famille
        given?: string[]; // Prénoms
      };
      telecom?: {
        system?: string; // Système de communication
        value?: string; // Valeur de contact
      }[];
      address?: {
        use?: string; // Utilisation de l'adresse
        type?: string; // Type d'adresse
        line?: string[]; // Lignes de l'adresse
        city?: string; // Ville
        district?: string; // District
        state?: string; // État
        postalCode?: string; // Code postal
        country?: string; // Pays
      };
      gender?: string; // Genre
      period?: {
        start?: string; // Date de début de la période
      };
  
    }[];
  }
  