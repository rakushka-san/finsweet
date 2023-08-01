export interface IAuthor {
  _id: string;
  name: string;
  photoSrc: string;
  position: string;
  company: string;
  blogDescription: string;
  region: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
  };
}
