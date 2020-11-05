export interface AboutProps {
  show: boolean;
  handleClose: Function;
}

export interface CardProps {
  id: number;
  url: string;
  title: string;
  blurb: string;
}

export interface ListProps {
  mockData: MockData[];
  url?: string;
  match?: any;
  show?: any;
}

export type MajorsData = {
  id: number;
  title: string;
  description: string;
};

export interface MockData {
  id: number;
  title: string;
  blurb: string;
}

export type ProblemData = {
  id: number;
  title: string;
  description: string;
};
