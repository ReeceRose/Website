export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
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
