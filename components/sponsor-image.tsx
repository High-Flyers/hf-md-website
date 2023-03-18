type Props = {
  src: string;
  alt: string;
  link: string;
  small: boolean;
};

export const SponsorImage = ({ src, alt, link, small }: Props) => {
  return (
    <a
      className="w-48 self-center"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {small ? (
        <img className="w-48 h-48 object-contain" src={src} alt={alt} />
      ) : (
        <img className="object-contain mx-auto" src={src} alt={alt} />
      )}
    </a>
  );
};

export default SponsorImage;
