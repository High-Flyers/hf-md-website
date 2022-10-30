const LEFT_SIZE = 3;
const RIGHT_SIZE = LEFT_SIZE;
const SIZE = LEFT_SIZE + RIGHT_SIZE + 1;

type Props = {
  allPages: number;
  currentPage: number;
};

const Pagination = ({ allPages, currentPage }: Props) => {
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
          <LeftArrow index={currentPage} allPages={allPages} />
          {before.map((i) => (
            <Counter index={i} isCurrent={false} key={i} />
          ))}
          <Counter index={currentPage} isCurrent={true} />
          {after.map((i) => (
            <Counter index={i} isCurrent={false} key={i} />
          ))}
          <RightArrow index={currentPage} allPages={allPages} />
        </ul>
      </div>
    </nav>
  );
};

type CounterProps = {
  isCurrent: boolean;
  index: number;
};

const Counter = ({ index, isCurrent }: CounterProps) => {
  const className = isCurrent
    ? "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    : "z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  return (
    <li key={index.toString()}>
      <a href={`/all-posts/${index}`} className={className}>
        {index + 1}
      </a>
    </li>
  );
};

type ArrowProps = {
  index: number;
  allPages: number;
};

const LeftArrow = ({ index }: ArrowProps) => {
  const href = index == 0 ? `/all-posts/${index}` : `/all-posts/${index - 1}`;
  return (
    <li key="left_arrow">
      <a
        href={href}
        className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Previous</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
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

const RightArrow = ({ index, allPages }: ArrowProps) => {
  const href =
    index == allPages - 1 ? `/all-posts/${index}` : `/all-posts/${index + 1}`;
  return (
    <li key="right_arrow">
      <a
        href={href}
        className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Next</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
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
