import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const sitesDirectory = join(process.cwd(), "_sites");
const projectsDirectory = join(process.cwd(), "_projects");

export function getSiteSlugs() {
  return fs.readdirSync(sitesDirectory);
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  return getBySlug(slug, fields, postsDirectory);
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  return getBySlug(slug, fields, projectsDirectory);
}

export function getSiteBySlug(slug: string, fields: string[] = []) {
  return getBySlug(slug, fields, sitesDirectory);
}

function getBySlug(slug: string, fields: string[] = [], dir: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllSites(fields: string[] = []) {
  const slugs = getSiteSlugs();
  const sites = slugs.map((slug) => getSiteBySlug(slug, fields));
  return sites;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((proj1, proj2) => (proj1.date > proj2.date ? -1 : 1));
  return projects;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getNPosts(n: number = 2, fields: string[] = []) {
  return getAllPosts(fields).slice(0, n);
}

export function getAtoBPosts(
  a: number = 0,
  b: number = 8,
  fields: string[] = []
) {
  return getAllPosts(fields).slice(a, b);
}

export const getNumOfPosts = () => {
  return getPostSlugs().length;
};
