import Link from "next/link";

type Props = {
    name: string;
    link: string;
    className?: string;
};

const LinkButton = ({ name, link, className }: Props) => {
    return (
        <Link as={link} href={link}>
            <button className={"block bg-my-button font-saira text-white \
                                text-xs px-5 py-2 lg:text-sm hover:bg-my-button-hover " + className}>
                {name}
            </button>
        </Link>
    );
};

export default LinkButton;