export enum TrainingType {
  HOME_1TO1 = '1 to 1 home training',
  OUTDOOR = 'Outdoor park sessions',
  COUPLES = 'Couples or friends training',
  SMALL_GROUPS = 'Neighbourhood small groups',
  NOT_SURE = 'Not sure yet'
}

export enum TrainingLocation {
  HOME = 'At home',
  PARK = 'In the park',
  MIX = 'A mix of both'
}

export enum StartTimeframe {
  MONTH = 'Within the next month',
  THREE_MONTHS = 'Within the next three months',
  LATER = 'Later or not sure'
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  location: TrainingLocation;
  trainingType: TrainingType;
  timeSlots: string[];
  interestedInGroups: boolean;
  startTime: StartTimeframe;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}