type Props = {
  src: string;
  alt: string;
  link: string;
};

export const SponsorImage = ({ src, alt, link }: Props) => {
  return (
    <a
      className="w-48 self-center"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} />
    </a>
  );
};

export default SponsorImage;
