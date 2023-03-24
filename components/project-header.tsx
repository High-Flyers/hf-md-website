import React from "react";

type Props = {
  title: string;
  coverImage: string;
};

const ProjectHeader = ({ title, coverImage }: Props) => {
  return (
    <div className="mb-8 sm:mx-0">
      <img
        src={coverImage}
        alt={`Cover Image for ${title}`}
        className="block h-full w-full object-cover object-center hover:scale-105 transition duration-150"
      />
    </div>
  );
};

export default ProjectHeader;
