import { FollowUp } from '../models/FollowUp';

export interface Patient {
    id: number;
    name: string;
    image: string;
    diagnosis?: string; // Optional property for diagnosis
    age?: number; // Optional property for age
    weight?: number; // Optional property for weight
    height?: number; // Optional property for height
    bmi?: number; // Optional property for BMI
    notes?: string; // Optional property for additional notes
    followUps: FollowUp[];  // New property
  }
  