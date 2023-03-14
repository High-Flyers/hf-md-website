type Props = {
    name: string;
};

const SectionTitle = ({ name }: Props) => {
    return (
        <div className="font-additional font-bold text-xl md:text-2xl lg:text-xl w-fit mx-auto">
            <h3 className="text-center w-fit mx-auto">
                {name}
            </h3>
            <div className="h-accent-sm w-1/2 bg-my-contrast mt-[-0.2em] mx-auto" />
        </div>
    );
};

export default SectionTitle;