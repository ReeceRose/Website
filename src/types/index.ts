export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl?: string;
}

export interface IHighlight {
  title: string;
  description: string;
}

export interface IExperience {
  name: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  tech?: string[];
}

export interface IExperiences {
  details: IExperience[];
}

export interface IProject {
  title: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
  description: string;
  tech: ITech[];
  status?: "coming-soon" | "alpha" | "beta";
  featured?: boolean;
}

export interface ITech {
  title: string;
  colour: string;
}

export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}
