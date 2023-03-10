import Link from "next/link";

type Props = {};

const AllStories = ({}: Props) => {
  return (
    <button className="block bg-my-button text-white font-saira px-12 py-2 mx-auto">
      <Link href="/all-posts/0">WIĘCEJ</Link>
    </button>
  );
};

export default AllStories;
