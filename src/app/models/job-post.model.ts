export class JobPost {
  id?: number;
  title?: string;
  description?: string;
  techStack?: [string];
  experience?: number;

  public toString(): string {
    const { title, experience, techStack, description } = this;
    return `Title: ${title}, Experience: ${experience} years: ${experience}, Tech stack: ${techStack}, Description: ${description}`;
  }
}