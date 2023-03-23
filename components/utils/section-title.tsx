type Props = {
    name: string;
};

const SectionTitle = ({ name }: Props) => {
    return (
        <div className="font-additional font-regular text-2xl w-fit mx-auto 
                        md:text-3xl lg:text-4xl md:mx-0">
            <h3 className="text-center w-fit mx-auto md:mx-0">
                {name}
            </h3>
            <div className="h-accent-sm w-1/2 bg-my-contrast mt-[-0.2em] mx-auto md:mx-0" />
        </div>
    );
};

export default SectionTitle;