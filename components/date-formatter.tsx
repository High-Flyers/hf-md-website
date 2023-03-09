import { parseISO, format } from "date-fns";
import plLocale from "date-fns/locale/pl";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="font-saira">
      {format(date, "d LLLL, yyyy", { locale: plLocale })}
    </time>
  );
};

export default DateFormatter;
