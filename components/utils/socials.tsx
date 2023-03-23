type Props = {
    className?: string;
};

const Socials = ({ className }: Props) => {
    return (
      <div className={"flex gap-10 justify-center w-3/4 max-w-[200px] mx-auto " + className}>
        <a
          className="w-1/3"
          href="https://www.instagram.com/highflyers.polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-ig.png" alt="instagram link" className="w-full"/>
        </a>
        <a
          className="w-1/3"
          href="https://www.linkedin.com/company/high-flyers-polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-in.png" alt="linkedin link" className="w-full"/>
        </a>
        <a
          className="w-1/3"
          href="https://www.facebook.com/high.flyers.polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-fb.png" alt="facebook link" className="w-full"/>
        </a>
      </div>
    );
};

export default Socials;