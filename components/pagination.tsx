const LEFT_SIZE = 3;
const RIGHT_SIZE = LEFT_SIZE;
const SIZE = LEFT_SIZE + RIGHT_SIZE + 1;

type Props = {
  allPages: number;
  currentPage: number;
  parent: string;
};

const Pagination = ({ allPages, currentPage, parent }: Props) => {
  let begin = currentPage - LEFT_SIZE < 0 ? 0 : currentPage - LEFT_SIZE;
  let end =
    currentPage + RIGHT_SIZE + 1 < allPages
      ? currentPage + RIGHT_SIZE + 1
      : allPages;

  const slack = SIZE - (end - begin);
  if (slack > 0) {
    if (begin == 0)
      if (end + slack < allPages) end += slack;
      else end = allPages;
    if (end == allPages)
      if (begin - slack > 0) begin -= slack;
      else begin = 0;
  }

  const before = [];
  const after = [];
  for (let i = begin; i < end; i++)
    if (i < currentPage) before.push(i);
    else if (i > currentPage) after.push(i);

  return (
    <nav aria-label="Page navigation" className="flex items-center">
      <div className="ml-auto mr-auto mb-8">
        <ul className="inline-flex items-center -space-x-px">
          <LeftArrow index={currentPage} allPages={allPages} parent={parent} />
          {before.map((i) => (
            <Counter index={i} isCurrent={false} key={i} parent={parent} />
          ))}
          <Counter index={currentPage} isCurrent={true} parent={parent} />
          {after.map((i) => (
            <Counter index={i} isCurrent={false} key={i} parent={parent} />
          ))}
          <RightArrow index={currentPage} allPages={allPages} parent={parent} />
        </ul>
      </div>
    </nav>
  );
};

type CounterProps = {
  isCurrent: boolean;
  index: number;
  parent: string;
};

const Counter = ({ index, isCurrent, parent }: CounterProps) => {
  const className = isCurrent
    ? "py-2 px-3 leading-tight text-gray-800 bg-my-button border border-gray-300 hover:bg-my-button-hover hover:text-gray-700"
    : "z-10 py-2 px-3 leading-tight text-gray-500 bg-my-backround border border-gray-300 hover:bg-gray-100 hover:text-gray-700";
  return (
    <li key={index.toString()}>
      <a href={`/${parent}/${index}`} className={className}>
        {index + 1}
      </a>
    </li>
  );
};

type ArrowProps = {
  index: number;
  allPages: number;
  parent: string;
};

const LeftArrow = ({ index, parent }: ArrowProps) => {
  const href = index == 0 ? `/${parent}/${index}` : `/${parent}/${index - 1}`;
  return (
    <li key="left_arrow">
      <a
        href={href}
        className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="sr-only">Previous</span>
        <svg
          aria-hidden="true"
          className="w-5 h-[19px]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </li>
  );
};

const RightArrow = ({ index, allPages, parent }: ArrowProps) => {
  const href =
    index == allPages - 1 ? `/${parent}/${index}` : `/${parent}/${index + 1}`;
  return (
    <li key="right_arrow">
      <a
        href={href}
        className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="sr-only">Next</span>
        <svg
          aria-hidden="true"
          className="w-5 h-[19px]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </li>
  );
};

export default Pagination;
