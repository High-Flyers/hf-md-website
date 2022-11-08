# About

This is website made for scientific organization High Flyers.
The main goal was to develop a website which is easy to edit and to add new content.

To make this possible, a dynamic routing with 'next.js' was used.
New pages are made by adding markdown file which describes it.
This automaticly creates new route for this page and makes it visible in navbar.

Also with this approach other pages were made. In this way administrator
can just add new markdown file and one extra line in '.tsx' file to create more pages.

## Tech stack

- Typescript
- Next.js (react)
- Tailwindcss

## Adding new blog post

To add new blog post create markdown file in '\_posts' folder.
Markdown file needs to start with a header which looks like this:

```markdown
---
title: "Droniada 2022"
excerpt: "Nasz zespół osiągnął kolejny sukces!!!"
coverImage: "/posts/droniada_2022/droniada2022.jpg"
date: "2022-03-16T05:35:07.322Z"
author:
  name: Paweł Piórkowski
  picture: "/authors/PawelPiorkowski.jpg"
ogImage:
  url: "/droniada_2022/droniada2022.jpg"
---
```

After this header, file is written like normal markdown with headers etc.

## Adding images

All images have to be in 'public' folder. It is recommended,
to create a folder with post name inside 'public/posts' folder to store images there.
In this way it will be easier to navigate inside of the website project.

Images should be added inside markodwn in this way:

```markdown
![Cool image](/posts/lorem_ipsum/droniada2022.jpg "Cool image")
```

Images which display at the top of the post and in its short form comes from header.
Header needs to provide a path to this image and to author image (see the example).

## Creating new site

Beside creating blog posts, administrator may want to create
a separate site available through navbar. This is done with these steps:

- Add name and path of the site inside 'components/Header' in 'panels' array.
- Create site in '\_sites' folder. Site is normal markdown,
  except title info (see examples in '\_sites' folder).

## Missing css in markdown

Some features of markdown are not supported yet.
You can notice it, when certain markdown element displatys just like normal 'div'.
To add new css you need to find out to what 'html'
component given 'md' component is translated to.
You can do this using 'inspect' tool in the browser. Then edit file 'components/markdown-styles.module.css'.
Edit it like normal 'css' file.
You should use 'tailwindcss' expressions to add new features.

## Deployment

The easiest way is to use 'Vercel'.
In this way every changed pushed to 'main' branch of the project will be updated.

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)
with your browser to see the result.

## ToDo

- [] Navbar collapsing to hamburger on small screens
- [] Rewrite blog posts from old website
- [] Make better sites
